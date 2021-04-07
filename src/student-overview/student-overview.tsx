import classes from '*.module.css';
import { useMutation, useQuery } from '@apollo/client';
import { withStyles, Theme, createStyles, TableCell, TableRow, TableContainer, Paper, Table, TableHead, TableBody, makeStyles } from '@material-ui/core';
import React from 'react';
import MakeUser from '../add-user-form/make-fake-user';
import { User, Users } from '../interfaces/User';
import { ADD_USER, GET_USERS } from '../queries/user-queries';


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
         // maxWidth: 700
      },
   }),
);


export default function StudentOverview() {
   const classes = useStyles();
   const { data } = useQuery<Users>(GET_USERS);
   const [addUser, { data: data2 }] = useMutation(ADD_USER);


   if (data === undefined) {
      return <div></div>
   }
   
   return (
      <div style={{ marginLeft: '5px', fontSize: '40px'}}>
         <div style={{ marginLeft: '5px' }} onClick={() => {
                           addUser({variables: {user: {
                              firstName: 'joe2x',
                              lastName: 'smith' 
                          }}})
                        }}>Student Overview</div>
         <div className={classes.root}>
            <TableContainer style={{ marginLeft: '5px' }} component={Paper}>
               <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                     <TableRow>
                        <StyledTableCell>Section</StyledTableCell>
                        <StyledTableCell>Student</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell></StyledTableCell>

                        <StyledTableCell>Task #1</StyledTableCell>
                        <StyledTableCell>Task #2</StyledTableCell>

                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {data.users.map((user) => (

                        <StyledTableRow style={{ cursor: 'pointer' }}>

                           <StyledTableCell component="th" scope="row">
                              {user.firstName}
                           </StyledTableCell>
                            {/* <StyledTableCell >{submission.points + '/4'}</StyledTableCell> */}

                        </StyledTableRow>

                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div >
      </div>
   );

}