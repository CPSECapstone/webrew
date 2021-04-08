import {
   withStyles,
   Theme,
   createStyles,
   TableCell,
   TableRow,
   TableContainer,
   Paper,
   Table,
   TableHead,
   TableBody,
   makeStyles,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Users } from '../interfaces/User';

const StyledTableCell = withStyles((theme: Theme) =>
   createStyles({
      head: {
         backgroundColor: '#8484e1',
         color: theme.palette.common.black,
         borderBottom: '0px solid',
      },
      body: {
         fontSize: 14,
         borderBottom: '0px solid',
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
         // maxWidth: 700
      },
      borderedHeaderCell: {
         borderRight: '4px solid gray',
      },
      borderedCell: {
         borderLeft: '4px solid gray',
         borderRight: '4px solid gray',
         borderBottom: '4px solid gray',
      },
      tableRow: {
         '&:hover': {
            backgroundColor: '#d9d9d9 !important',
         },
      },
   })
);

const users: Users = {
   users: [
      {
         id: '1',
         firstName: 'Sansa',
         lastName: 'Stark',
      },
      {
         id: '2',
         firstName: 'Robb',
         lastName: 'Stark',
      },
      {
         id: '3',
         firstName: 'Arya',
         lastName: 'Stark',
      },
      {
         id: '4',
         firstName: 'John',
         lastName: 'Snow',
      },
   ],
};

export interface Progress {
   curStatus: string;
   statusColor: string;
   time: string;
}

const userProgressMap = new Map<string, Progress>();

export default function StudentOverview() {
   const classes = useStyles();
   const history = useHistory();

   userProgressMap.set('1', {
      curStatus: 'Task 1.1',
      statusColor: '#00b300', // Green
      time: '2:10',
   });

   userProgressMap.set('2', {
      curStatus: 'Task 1.2',
      statusColor: '#00b300', // Green
      time: '1:30',
   });

   userProgressMap.set('3', {
      curStatus: 'Task 2.1',
      statusColor: '#a6a6a6', // Gray
      time: '1:15',
   });

   userProgressMap.set('4', {
      curStatus: 'Task 1.1',
      statusColor: '#ff6666', // Red
      time: '6:15',
   });

   // const { data } = useQuery<Users>(GET_USERS);
   // const [] = useMutation(ADD_USER);

   // if (data === undefined) {
   //    return <div />;
   // }

   return (
      <div style={{ marginLeft: '5px', fontSize: '40px' }}>
         <div
            style={{ marginLeft: '5px' }}
            // onClick={() => {
            //    addUser({
            //       variables: {
            //          user: {
            //             firstName: 'joe2x',
            //             lastName: 'smith',
            //          },
            //       },
            //    });
            // }}
         >
            Student Overview
         </div>
         <div className={classes.root}>
            <TableContainer style={{ marginLeft: '5px' }} component={Paper}>
               <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                     <TableRow>
                        <StyledTableCell className={classes.borderedHeaderCell}>
                           Section
                        </StyledTableCell>
                        <StyledTableCell className={classes.borderedHeaderCell}>
                           Student
                        </StyledTableCell>
                        <StyledTableCell className={classes.borderedHeaderCell} align="center">
                           Time
                        </StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell style={{ width: 1, backgroundColor: 'black' }} />

                        <StyledTableCell className={classes.borderedHeaderCell}>
                           Task #1
                        </StyledTableCell>
                        <StyledTableCell className={classes.borderedHeaderCell}>
                           Task #2
                        </StyledTableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {users.users.map((user) => (
                        <StyledTableRow
                           hover
                           style={{ cursor: 'pointer' }}
                           className={classes.tableRow}
                           onClick={() => {
                              history.push({
                                 pathname: '/singleStudentOverview',
                                 state: user,
                              });
                           }}
                        >
                           <StyledTableCell className={classes.borderedCell} scope="row">
                              1
                           </StyledTableCell>
                           <StyledTableCell className={classes.borderedCell} scope="row">
                              {user.firstName} {user.lastName}
                           </StyledTableCell>
                           <StyledTableCell
                              className={classes.borderedCell}
                              scope="row"
                              align="center"
                           >
                              {userProgressMap.get(user.id)?.time}
                           </StyledTableCell>
                           <StyledTableCell
                              // className={classes.borderedCell}
                              style={{
                                 backgroundColor: userProgressMap.get(user.id)?.statusColor,
                                 borderBottom: '4px solid gray',
                              }}
                              align="center"
                              scope="row"
                           >
                              {userProgressMap.get(user.id)?.curStatus}
                           </StyledTableCell>
                           <StyledTableCell style={{ backgroundColor: 'black' }} />
                           <StyledTableCell
                              style={{
                                 borderBottom: '4px solid gray',
                              }}
                           />
                           <StyledTableCell className={classes.borderedCell} />
                           {/* <StyledTableCell >{submission.points + '/4'}</StyledTableCell> */}
                        </StyledTableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
      </div>
   );
}
