import classes from '*.module.css';
import { withStyles, Theme, createStyles, TableCell, TableRow, TableContainer, Paper, Table, TableHead, TableBody } from '@material-ui/core';
import React from 'react'


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


export default function StudentOverview() {

   return (
      <div style={{ marginLeft: '5px', fontSize: '40px'}}>
         <div style={{ marginLeft: '5px' }} >{data2.quiz.name}</div>
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
                     {data.quizSubmissions.map((submission) => (

                        <StyledTableRow style={{ cursor: 'pointer' }} onClick={() => {
                           history.push('/quizSubmission')
                        }}>

                           <StyledTableCell component="th" scope="row">
                              {submission.student}
                           </StyledTableCell>
                           <StyledTableCell >{submission.points + '/4'}</StyledTableCell>

                        </StyledTableRow>

                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div >
      </div>
   );

}