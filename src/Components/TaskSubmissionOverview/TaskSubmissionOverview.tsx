import Table from '@material-ui/core/Table';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import useQuizBlockSubmissions from '../../hooks/useQuizBlockSubmissions';
import QuizBlockPie from './QuizBlockPie';
import './TaskSubmissionOverview.css';
import { useQuizBlockQuery } from '../../__generated__/types';

const StyledTableCell = withStyles((theme: Theme) =>
   createStyles({
      head: {
         backgroundColor: theme.palette.common.black,
         color: theme.palette.common.white,
      },
      body: {
         fontSize: 14,
      },
   })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
   createStyles({
      root: {
         '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
         },
      },
   })
)(TableRow);

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
         flexWrap: 'wrap',
         '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(160),
            height: theme.spacing(60),
         },
      },
      table: {
         minWidth: 700,
      },
   })
);

function TaskSubmissionOverview() {
   const classes = useStyles();
   const history = useHistory();
   const { data: quizblockQuery } = useQuizBlockQuery({
      variables: {
         taskId: 'ac133970e04',
         blockId: '0984b7bf5a0',
      },
   });

   // const { quizblock } = useQuizBlock();
   const { loading, error, quizblockSubmissions } = useQuizBlockSubmissions();

   if (loading) {
      return <p>Loading...</p>;
   }
   if (error) {
      return <p>`Error! ${error.message}`</p>;
   }

   if (!quizblockQuery?.quizblock || !quizblockSubmissions) {
      return <></>;
   }

   const { quizblock } = quizblockQuery;

   const rows: JSX.Element[] = quizblockSubmissions.map((submission) => {
      return (
         <StyledTableRow
            key={submission.student}
            style={{ cursor: 'pointer' }}
            onClick={() => {
               history.push('/viewTaskSubmission');
            }}
         >
            <StyledTableCell component="th" scope="row">
               {submission.student}
            </StyledTableCell>
            <StyledTableCell>{`${submission.points}/${quizblock.points}`}</StyledTableCell>
         </StyledTableRow>
      );
   });

   return (
      <div className="task-overview-container">
         <div className="chart">
            <QuizBlockPie />
         </div>
         <div style={{ marginLeft: '5px' }}>{quizblock.title}</div>
         <div className={classes.root}>
            <TableContainer style={{ marginLeft: '5px' }} component={Paper}>
               <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                     <TableRow>
                        <StyledTableCell>Student Name</StyledTableCell>
                        <StyledTableCell>Points</StyledTableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>{rows}</TableBody>
               </Table>
            </TableContainer>
         </div>
      </div>
   );
}

export default TaskSubmissionOverview;
