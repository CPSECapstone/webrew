import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import StudentPicture from '../assets/images/images-1.png';
import LinearProgressWithLabel from '../components/linear-progress-bar';
import TargetDropDown from '../components/TargetDropDown';
import { LearningObjective } from '../interfaces/LearningObjective';

const StudentNameDiv = styled.div`
   height: 50px;
   width: 100%;
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

const PaddedDiv = styled.div`
   padding-left: 5px;
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

export interface LearningTarget {
   name: string;
   learningObjectives: LearningObjective[];
}

export default function SingleStudentMasteryOveriew() {
   const classes = useStyles();

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

   return (
      <div style={{ marginLeft: '5px' }} data-testid="mastery-overview">
         <StudentNameDiv aria-label="username">
            {/* {inputUser.firstName} {inputUser.lastName} */} Bob Jones
         </StudentNameDiv>
         <img src={StudentPicture} alt="" style={{ width: 200, height: 200 }} />

         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Targets</FieldTitleDiv>
               {learningTargets.map((target) => (
                  <TargetDropDown
                     name={target.name}
                     learningObjectives={target.learningObjectives as LearningObjective[]}
                  />
               ))}
            </ColumnDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Goals</FieldTitleDiv>
               {goals.map((goal) => (
                  <List>
                     <PaddedDiv>
                        <ListItem button className={classes.nested}>
                           <ListItemText primary={goal.name} />
                           <LinearProgressWithLabel
                              className={classes.progressBar}
                              value={COMP_TASK_PERCENT}
                           />
                        </ListItem>
                     </PaddedDiv>
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
                     learningObjectives={compTarget.compLearningObjectives as LearningObjective[]}
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
