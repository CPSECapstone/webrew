import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import StudentPicture from '../assets/images/images-1.png';
import { User } from '../interfaces/User';
import LinearProgressWithLabel from '../components/linear-progress-bar';
import TargetDropDown from '../components/TargetDropDown';

const StudentNameDiv = styled.div`
   height: 50px;
   width: 100%;
   // background-color: ;
   font-size: 24pt;
`;

const FieldTitleDiv = styled.div`
   height: 30px;
   width: 100%;
   background-color: #99d6ff;
   align-items: center;
   display: flex;
}
`;

const RowDiv = styled.div`
   width: 100%;
   display: flex;
`;

const ColumnDiv = styled.div`
   width: 100%;
   flex-direction: column;
`;

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

export default function SingleStudentMasteryOveriew() {
   const classes = useStyles();
   const history = useHistory();

   const learningTargets = [
      {
         name: 'Target 1',
         learningObjectives: [
            {
               name: 'Objective 1',
               tasks: [
                  {
                     name: 'Task 1',
                  },
                  {
                     name: 'Task 2',
                  },
               ],
            },
            {
               name: 'Objective 2',
               tasks: [
                  {
                     name: 'Task 1',
                  },
                  {
                     name: 'Task 2',
                  },
               ],
            },
         ],
      },
      {
         name: 'Target 2',
         learningObjectives: [
            {
               name: 'Objective 1',
               tasks: [
                  {
                     name: 'Task 1',
                  },
                  {
                     name: 'Task 2',
                  },
               ],
            },
            {
               name: 'Objective 2',
               tasks: [
                  {
                     name: 'Task 1',
                  },
                  {
                     name: 'Task 2',
                  },
               ],
            },
         ],
      },
   ];

   const goals = [
      {
         name: 'Goal 1',
      },
      {
         name: 'Goal 2',
      },
      {
         name: 'Goal 3',
      },
   ];

   const compGoals = [
      {
         name: 'Goal 0',
      },
      {
         name: 'Goal 0.1',
      },
      {
         name: 'Goal 0.2',
      },
   ];

   const compLearningTargets = [
      {
         name: 'Target 0',
         compLearningObjectives: [
            {
               name: 'Objective 1',
               tasks: [
                  {
                     name: 'Task 1',
                  },
                  {
                     name: 'Task 2A',
                  },
               ],
            },
         ],
      },
      {
         name: 'Target 0.5',
         compLearningObjectives: [
            {
               name: 'Objective 1',
               tasks: [
                  {
                     name: 'Task 1',
                  },
                  {
                     name: 'Task 2A',
                  },
               ],
            },
         ],
      },
   ];

   const COMP_TASK_PERCENT = 100;

   // const test: any = history.location.state;
   // const inputUser: User = {
   //    id: test?.id,
   //    firstName: test?.firstName,
   //    lastName: test?.lastName,
   // };

   return (
      <div style={{ marginLeft: '5px' }}>
         <StudentNameDiv>
            {/* {inputUser.firstName} {inputUser.lastName} */} Bob Jones
         </StudentNameDiv>
         <img src={StudentPicture} alt="" style={{ width: 200, height: 200 }} />

         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Targets</FieldTitleDiv>
               {learningTargets.map((target) => (
                  <TargetDropDown
                     name={target.name}
                     learningObjectives={target.learningObjectives}
                  />
               ))}
            </ColumnDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Goals</FieldTitleDiv>
               {goals.map((goal) => (
                  <List>
                     <ListItem button className={classes.nested}>
                        <ListItemIcon>
                           <div />
                        </ListItemIcon>
                        <ListItemText primary={goal.name} />
                        <LinearProgressWithLabel
                           className={classes.progressBar}
                           value={COMP_TASK_PERCENT}
                        />
                     </ListItem>
                  </List>
               ))}
            </ColumnDiv>
         </RowDiv>
         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Completed Targets</FieldTitleDiv>
               {compLearningTargets.map((compTarget) => (
                  <TargetDropDown
                     name={compTarget.name}
                     learningObjectives={compTarget.compLearningObjectives}
                  />
               ))}
            </ColumnDiv>
            <ColumnDiv>
               <FieldTitleDiv>Completed Goals</FieldTitleDiv>
               {compGoals.map((compGoal) => (
                  <List>
                     <ListItem button className={classes.nested}>
                        <ListItemIcon>
                           <div />
                        </ListItemIcon>
                        <ListItemText primary={compGoal.name} />
                        <LinearProgressWithLabel
                           className={classes.progressBar}
                           value={COMP_TASK_PERCENT}
                        />
                     </ListItem>
                  </List>
               ))}
            </ColumnDiv>
         </RowDiv>
      </div>
   );
}
