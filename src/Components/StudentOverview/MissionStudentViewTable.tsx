import {
   createStyles,
   makeStyles,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Theme,
   withStyles,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Progress } from '../../interfaces/Progress';
import { Users } from '../../interfaces/Users';

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

function MissionStudentViewTable() {
   const classes = useStyles();
   const history = useHistory();

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
                     Mission A
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Mission B
                  </StyledTableCell>
                  <StyledTableCell className={classes.borderedHeaderCell} align="center">
                     Mission C
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
                     <StyledTableCell className={classes.borderedCell} />
                     <StyledTableCell className={classes.borderedCell} />
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}

export default MissionStudentViewTable;
