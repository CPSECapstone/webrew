import React from 'react';
import styled from 'styled-components'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, FormControl, InputLabel, Chip, Input, MenuItem, Select } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { LIST_QUIZ_SUBMISSIONS } from '../queries/quiz-submission-queries';
import { useQuery } from '@apollo/client';
// import TableSortLabel from '@material-ui/core/TableSortLabel';

const QuizDiv = styled.div`
   height: 300px;
   width: 600px;
   //background-color: grey;
   margin-top: 10px;
`;


const StyledTableCell = withStyles((theme: Theme) =>
   createStyles({
      head: {
         backgroundColor: theme.palette.common.black,
         color: theme.palette.common.white,
      },
      body: {
         fontSize: 14,
      },
   }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
   createStyles({
      root: {
         '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
         },
      },
   }),
) (TableRow);


// const useStyles = makeStyles({
//    table: {
//       minWidth: 700,
//       maxWidth: 700
//    },
// });

export interface QuizSubmissions {
   quizSubmissions: QuizSubmission[];
}

export interface QuizSubmission {
   id: string;
   student: string;
   points: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(160),
        height: theme.spacing(30),
      },
    },
    table: {
      minWidth: 700,
      // maxWidth: 700
   },
  }),
);

export default function QuizOverview() {
   const classes = useStyles();
   const {loading, error, data } = useQuery<QuizSubmissions>(LIST_QUIZ_SUBMISSIONS);

   // const [addCourse, { data }] = useMutation(SAVE_COURSE);
   if (data === undefined) {
      return <div></div>
   }
   console.log(data);


   return (
      <div className={classes.root}>
         {/* <div>Quizovervview</div> */}
         <TableContainer style={{marginLeft: '5px' }} component={Paper}>
            <Table className={classes.table} aria-label="customized table">
               <TableHead>
                  <TableRow>
                     <StyledTableCell>Student Name</StyledTableCell>
                     <StyledTableCell>Points</StyledTableCell>
                    
                  </TableRow>
               </TableHead>
               <TableBody>
                  {data.quizSubmissions.map((submission) => (
                     <StyledTableRow key={submission.student}>
                        <StyledTableCell component="th" scope="row">
                           {submission.student}
                        </StyledTableCell>
                        <StyledTableCell >{submission.points}</StyledTableCell>
                      
                     </StyledTableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>

      // <CenterDiv>

      // </CenterDiv>




   );
}