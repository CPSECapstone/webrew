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
import { Link, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Progress } from '../../interfaces/Progress';
import { Users } from '../../interfaces/Users';
import { GET_LEARNING_OBJECTIVE } from '../../queries/LearningObjectiveQueries';
import { LearningObjectives } from '../../interfaces/LearningObjectives';
import { LearningObjective } from '../../interfaces/LearningObjective';

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

const userProgressMap = new Map<string, Progress>();

function StudentOverview() {
   const classes = useStyles();
   const history = useHistory();
   // const { data: learningObjective } = useQuery<LearningObjectives>(GET_LEARNING_OBJECTIVE);
   // if (!learningObjective) {
   //    return <>Learning Objective Undefined</>;
   // }

   // const objs = learningObjective.learningObjectives.map((learningobjective: LearningObjective) => (
   //    <>
   //       <>{learningobjective.name}</>
   //    </>
   // ));

   // userProgressMap.set('1', {
   //    curStatus: 'Task 1.1',
   //    statusColor: '#00b300', // Green
   //    time: '2:10',
   //    objective: objs[0],
   // });

   // userProgressMap.set('2', {
   //    curStatus: 'Task 1.2',
   //    statusColor: '#00b300', // Green
   //    time: '1:30',
   //    objective: objs[1],
   // });

   // userProgressMap.set('3', {
   //    curStatus: 'Task 2.1',
   //    statusColor: '#a6a6a6', // Gray
   //    time: '1:15',
   //    objective: objs[2],
   // });

   // userProgressMap.set('4', {
   //    curStatus: 'Task 1.1',
   //    statusColor: '#ff6666', // Red
   //    time: '6:15',
   //    objective: objs[0],
   // });

   return (
      <div style={{ marginLeft: '5px', fontSize: '40px' }}>
         <div style={{ marginLeft: '5px' }}>Student Overview</div>
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
                           Objective #1
                        </StyledTableCell>
                        <StyledTableCell className={classes.borderedHeaderCell}>
                           Objective #2
                        </StyledTableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {users.users.map((user) => (
                        <Link to={"/singleStudentOverview/" + user.id}>
                           <StyledTableRow
                              hover
                              style={{ cursor: 'pointer' }}
                              className={classes.tableRow}
                              // onClick={() => {
                              //    history.push({
                              //       pathname: '/singleStudentOverview',
                              //       state: user,
                              //    });
                              // }}
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
                                 className={classes.borderedCell}
                                 scope="row"
                                 align="center"
                              >
                                 {userProgressMap.get(user.id)?.objective}
                              </StyledTableCell>
                              <StyledTableCell
                                 style={{
                                    borderBottom: '4px solid gray',
                                 }}
                              />
                              <StyledTableCell className={classes.borderedCell} />
                           </StyledTableRow>
                        </Link>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
      </div>
   );
}

export default StudentOverview;
