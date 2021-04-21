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
   Tab,
   Tabs,
   Box,
   Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import TabList from '@material-ui/lab/TabList';
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
            margin: theme.spacing(0),
            width: theme.spacing(160),
            height: theme.spacing(60),
         },
      },
      table: {
         minWidth: 700,
         // maxWidth: 700
      },
      borderedHeaderCell: {
         borderTop: '4px solid gray',
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
      tabContainer: {
         flexGrow: 1,
         backgroundColor: theme.palette.background.paper,
      },
      selectedTab: {
         backgroundColor: 'rgb(109, 158, 235)',
         fontSize: '24px',
         color: 'white',
         fontWeight: 'bold',
      },
      defaultTab: {
         backgroundColor: 'rgb(238, 238, 238)',
         fontSize: '24px',
         color: 'black',
         fontWeight: 'bold',
      },
      innerTab: {
         background: 'linear-gradient(90deg, rgb(242, 242, 242) 0%, rgb(166, 166, 166) 100%) white',
         border: '3px solid black',
         fontWeight: 'bold',
      },
      selectedInnerTab: {
         background: 'linear-gradient(90deg, rgb(255, 246, 219) 0%, rgb(250, 210, 92) 100%) white',
         border: '3px solid black',
         fontWeight: 'bold',
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

function LTTargetViewTable() {
   const classes = useStyles();

   return (
      <TableContainer style={{ marginLeft: '5px' }} component={Paper}>
         <Table className={classes.table} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell
                     className={classes.borderedHeaderCell}
                     style={{ borderLeft: '4px solid gray' }}
                  >
                     Section
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell}>Target</StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Average
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Progress
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Obj1
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Obj2
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Obj3
                  </StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {/* Rows will be loaded from map when data is available */}
               <StyledTableRow>
                  <StyledTableCell className={classes.borderedCell} scope="row">
                     1
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row">
                     LT1
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} align="center">
                     %
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} scope="row" />
               </StyledTableRow>
               <StyledTableRow>
                  <StyledTableCell className={classes.borderedCell} scope="row">
                     1
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row">
                     LT2
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} align="center">
                     %
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} scope="row" />
               </StyledTableRow>
               <StyledTableRow>
                  <StyledTableCell className={classes.borderedCell} scope="row">
                     1
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row">
                     LT3
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} align="center">
                     %
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} scope="row" />
                  <StyledTableCell className={classes.borderedCell} scope="row" />
               </StyledTableRow>
            </TableBody>
         </Table>
      </TableContainer>
   );
}

function LTStudentViewTable() {
   const classes = useStyles();
   const history = useHistory();

   return (
      <TableContainer style={{ marginLeft: '5px' }} component={Paper}>
         <Table className={classes.table} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell
                     className={classes.borderedHeaderCell}
                     style={{ borderLeft: '4px solid gray' }}
                  >
                     Section
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell}>Student</StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Time
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Recent
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Average
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Progress
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     LT1
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     LT2
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     LT3
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
                     <StyledTableCell className={classes.borderedCell} scope="row" align="center">
                        {userProgressMap.get(user.id)?.time}
                     </StyledTableCell>
                     <StyledTableCell
                        className={classes.borderedCell}
                        style={{
                           backgroundColor: userProgressMap.get(user.id)?.statusColor,
                        }}
                        align="center"
                        scope="row"
                     >
                        {userProgressMap.get(user.id)?.curStatus}
                     </StyledTableCell>
                     <StyledTableCell className={classes.borderedCell} />
                     <StyledTableCell className={classes.borderedCell} align="center">
                        %
                     </StyledTableCell>
                     <StyledTableCell className={classes.borderedCell} />
                     <StyledTableCell className={classes.borderedCell} />
                     <StyledTableCell className={classes.borderedCell} />
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}

function LearningTargetTab() {
   const classes = useStyles();
   const [value, setValue] = useState('1');

   const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: string) => {
      setValue(newValue);
   };

   return (
      <TabContext value={value}>
         <TabList onChange={handleChange} centered>
            <Tab
               label="Student View"
               value="1"
               className={value === '1' ? classes.selectedInnerTab : classes.innerTab}
            />
            <Tab
               label="Target View"
               value="2"
               className={value === '2' ? classes.selectedInnerTab : classes.innerTab}
            />
         </TabList>
         <TabPanel value="1">
            <LTStudentViewTable />
         </TabPanel>
         <TabPanel value="2">
            <LTTargetViewTable />
         </TabPanel>
      </TabContext>
   );
}

function MissionStudentViewTable() {
   const classes = useStyles();
   const history = useHistory();

   return (
      <TableContainer style={{ marginLeft: '5px' }} component={Paper}>
         <Table className={classes.table} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell
                     className={classes.borderedHeaderCell}
                     style={{ borderLeft: '4px solid gray' }}
                  >
                     Section
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell}>Student</StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Time
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Current
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     LT1
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     LT2
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     LT3
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
                     <StyledTableCell className={classes.borderedCell} scope="row" align="center">
                        {userProgressMap.get(user.id)?.time}
                     </StyledTableCell>
                     <StyledTableCell
                        className={classes.borderedCell}
                        style={{
                           backgroundColor: userProgressMap.get(user.id)?.statusColor,
                        }}
                        align="center"
                        scope="row"
                     >
                        {userProgressMap.get(user.id)?.curStatus}
                     </StyledTableCell>
                     <StyledTableCell
                        style={{
                           borderBottom: '4px solid gray',
                        }}
                     />
                     <StyledTableCell className={classes.borderedCell} />
                     <StyledTableCell className={classes.borderedCell} />
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}

function MissionsTab() {
   const classes = useStyles();
   const [value, setValue] = useState('1');

   const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: string) => {
      setValue(newValue);
   };

   return (
      <TabContext value={value}>
         <TabList onChange={handleChange} centered>
            <Tab
               label="Student View"
               value="1"
               className={value === '1' ? classes.selectedInnerTab : classes.innerTab}
            />
            <Tab
               label="Task View"
               value="2"
               className={value === '2' ? classes.selectedInnerTab : classes.innerTab}
            />
            <Tab
               label="Objective View"
               value="3"
               className={value === '3' ? classes.selectedInnerTab : classes.innerTab}
            />
         </TabList>
         <TabPanel value="1">
            <MissionStudentViewTable />
         </TabPanel>
         <TabPanel value="2">Mission Task View Table</TabPanel>
         <TabPanel value="3">Mission Objective View Table</TabPanel>
      </TabContext>
   );
}

function StudentOverview() {
   const classes = useStyles();

   const [value, setValue] = useState('1');

   const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: string) => {
      setValue(newValue);
   };
   // const { data: learningObjective } = useQuery<LearningObjectives>(GET_LEARNING_OBJECTIVE);
   // if (!learningObjective) {
   //    return <>Learning Objective Undefined</>;
   // }

   // const objs = learningObjective.learningObjectives.map((learningobjective: LearningObjective) => (
   //    <>
   //       <>{learningobjective.name}</>
   //    </>
   // ));

   userProgressMap.set('1', {
      curStatus: 'Task 1.1',
      statusColor: '#00b300', // Green
      time: '2:10',
      // objective: objs[0],
   });

   userProgressMap.set('2', {
      curStatus: 'Task 1.2',
      statusColor: '#00b300', // Green
      time: '1:30',
      // objective: objs[1],
   });

   userProgressMap.set('3', {
      curStatus: 'Task 2.1',
      statusColor: '#a6a6a6', // Gray
      time: '1:15',
      // objective: objs[2],
   });

   userProgressMap.set('4', {
      curStatus: 'Task 1.1',
      statusColor: '#ff6666', // Red
      time: '6:15',
      // objective: objs[0],
   });

   return (
      <div style={{ marginLeft: '5px' }}>
         <div
            style={{
               color: 'white',
               fontSize: '50px',
               fontWeight: 'bold',
               background:
                  'linear-gradient(90deg, rgb(49, 119, 238) 0%, rgb(17, 61, 138) 100%) white',
            }}
         >
            Biology
         </div>
         <div className={classes.root}>
            <Paper className={classes.tabContainer}>
               <TabContext value={value}>
                  <TabList onChange={handleChange} variant="fullWidth" centered>
                     <Tab
                        label="Learning Targets"
                        value="1"
                        className={value === '1' ? classes.selectedTab : classes.defaultTab}
                     />
                     <Tab
                        label="Missions"
                        value="2"
                        className={value === '2' ? classes.selectedTab : classes.defaultTab}
                     />
                  </TabList>
                  <TabPanel value="1">
                     <LearningTargetTab />
                  </TabPanel>
                  <TabPanel value="2">
                     <MissionsTab />
                  </TabPanel>
               </TabContext>
            </Paper>
         </div>
      </div>
   );
}

export default StudentOverview;
