import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { LIST_QUIZ_SUBMISSIONS } from '../../queries/quiz-submission-queries';
import { GET_QUIZ } from '../../queries/quiz-queries';
import { QuizSubmissions } from '../../interfaces/QuizSubmissions';
import { Quiz } from '../../interfaces/Quiz';

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

function TaskOverview() {
   const classes = useStyles();
   const { data: quizSubmissions } = useQuery<QuizSubmissions>(LIST_QUIZ_SUBMISSIONS);
   const { data: quiz } = useQuery<Quiz>(GET_QUIZ);

   const history = useHistory();
   if (quizSubmissions === undefined || quiz === undefined) {
      return <div>Quiz Submission(s) Undefined</div>;
   }

   return (
      <div style={{ marginLeft: '5px', fontSize: '40px' }}>
         <div style={{ marginLeft: '5px' }}>{quiz.name}</div>
         <div className={classes.root}>
            <TableContainer style={{ marginLeft: '5px' }} component={Paper}>
               <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                     <TableRow>
                        <StyledTableCell>Student Name</StyledTableCell>
                        <StyledTableCell>Points</StyledTableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {quizSubmissions.quizSubmissions.map((submission) => (
                        <StyledTableRow
                           style={{ cursor: 'pointer' }}
                           onClick={() => {
                              history.push('/taskSubmission');
                           }}
                        >
                           <StyledTableCell component="th" scope="row">
                              {submission.student}
                           </StyledTableCell>
                           <StyledTableCell>{`${submission.points}/4`}</StyledTableCell>
                        </StyledTableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
      </div>
   );
}

export default TaskOverview;
