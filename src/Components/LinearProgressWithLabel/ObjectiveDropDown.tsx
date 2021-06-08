import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { Box, LinearProgress } from '@material-ui/core';

import {
   TaskObjectiveProgress,
   useGetTaskObjectiveProgressQuery as UseGetTaskObjectiveProgressQuery,
} from '../../__generated__/types';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         width: '100%',
         maxWidth: 500,
         backgroundColor: theme.palette.background.paper,
      },
      nested: {
         paddingLeft: theme.spacing(4),
      },
      progressBar: {
         minWidth: '150px',
      },
   })
);
const MasteredProgress = withStyles(() =>
   createStyles({
      root: {
         height: 25,
         borderRadius: 5,
      },
      colorPrimary: {
         backgroundColor: '#30CC30',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#30CC30',
      },
   })
)(LinearProgress);

const NotStartedProgress = withStyles(() =>
   createStyles({
      root: {
         height: 25,
         borderRadius: 5,
         display: 'flex',
         justifyContent: 'right',
      },
      colorPrimary: {
         backgroundColor: '#E0E0E0',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#E0E0E0',
      },
   })
)(LinearProgress);

const NotMasteredProgress = withStyles(() =>
   createStyles({
      root: {
         height: 25,
         borderRadius: 5,
      },
      colorPrimary: {
         backgroundColor: '#EA6868',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#EA6868',
      },
   })
)(LinearProgress);

const AlmostMasteredProgress = withStyles(() =>
   createStyles({
      root: {
         height: 25,
         borderRadius: 5,
      },
      colorPrimary: {
         backgroundColor: '#F2C94C',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#F2C94C',
      },
   })
)(LinearProgress);

const DoublePaddedDiv = styled.div`
   padding-left: 40px;
   width: 100%;
   justify-content: left;
`;

export interface ObjectiveDropDownProps {
   name: string;
   tasks: TaskObjectiveProgress[];
   username: string;
}

function getTaskObjectivePorgress(task: TaskObjectiveProgress) {
   const { data: taskObjectiveProgress } = UseGetTaskObjectiveProgressQuery({
      variables: {
         taskId: task.task.id,
         username: 'Google_114813486146105420824',
      },
   });
   if (taskObjectiveProgress === undefined) {
      return <></>;
   }
   const objectiveProgresses = (taskObjectiveProgress.getTaskObjectiveProgress as unknown) as TaskObjectiveProgress[];
   return objectiveProgresses;
}

function getProgressBar(status: number) {
   if (status === 0) {
      return <NotStartedProgress />;
   }
   if (status < 0.75) {
      return <NotMasteredProgress />;
   }
   if (status >= 0.75 && status < 1) {
      return <AlmostMasteredProgress />;
   }
   return <MasteredProgress />;
}

// Handles state to open and close dropdown
function handleClick(
   openObjectBool: boolean,
   openFunction: React.Dispatch<React.SetStateAction<boolean>>
): void {
   openFunction(!openObjectBool);
}

function getTaskPercent(mastery: string) {
   if (mastery === 'NOT_GRADED') {
      return 0;
   }
   if (mastery === 'NOT_MASTERED') {
      return 0.5;
   }
   if (mastery === 'ALMOST_MASTERED') {
      return 0.75;
   }
   return 1;
}

function getObjectivePercent(tasks: TaskObjectiveProgress[]) {
   let count = 0;
   // eslint-disable-next-line no-restricted-syntax
   for (const task of tasks) {
      const mastery = getTaskPercent(task.mastery);
      if (mastery === 1) {
         count++;
      }
   }
   if (tasks.length === 0) {
      return 0;
   }
   return count / tasks.length;
}

export default function ObjectiveDropDown({ name, tasks, username }: ObjectiveDropDownProps) {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   return (
      <List component="div" disablePadding style={{ justifyContent: 'right', width: '100%' }}>
         <ListItem button onClick={() => handleClick(open, setOpen)} divider>
            {open ? <ExpandLess /> : <ExpandMore />}
            <ListItemText primary={name} />
            <Box display="flex" style={{ justifyContent: 'right' }} width="80%">
               <Box width="100%" mr={1} ml={1}>
                  {getProgressBar(getObjectivePercent(tasks))}
               </Box>
            </Box>
         </ListItem>

         <Collapse in={open} timeout="auto" unmountOnExit>
            {tasks.map((task: TaskObjectiveProgress) => (
               <Link
                  to={{
                     pathname: `/viewTask/${task.task.id}/${username}`,
                     state: getTaskObjectivePorgress(task),
                  }}
               >
                  {console.log(task)}
                  <List component="div" disablePadding>
                     <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <DoublePaddedDiv>
                           <ListItem button className={classes.nested} divider>
                              <ListItemText primary={task.task.name} />
                              <Box display="flex" alignItems="center" width="80%">
                                 <Box width="100%" mr={1} ml={1}>
                                    {getProgressBar(getTaskPercent(task.mastery))}
                                 </Box>
                              </Box>
                           </ListItem>
                        </DoublePaddedDiv>
                     </div>
                  </List>
               </Link>
            ))}
         </Collapse>
      </List>
   );
}
