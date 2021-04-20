/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import StudentPicture from '../../assets/images/images-1.png';
import { User } from '../../interfaces/User';
import LinearProgressWithLabel from '../LinearProgressWithLabel/LinearProgressWithLabel';
import MissionDropDown from '../LinearProgressWithLabel/MissionDropDown';
import { MissionSubMission } from '../../interfaces/MissionSubMission';

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

function SingleStudentOverview() {
   const classes = useStyles();
   const history = useHistory();

   const COMP_TASK_PERCENT = 100;

   const test: any = history.location.state;
   const inputUser: User = {
      id: test?.id,
      firstName: test?.firstName,
      lastName: test?.lastName,
   };

   const missions = [
      {
         id: '123',
         name: 'Mission 1',
         description: 'mission1 for you',
         subMissions: [
            {
               id: '345',
               name: 'Sub-Mission 1',
               description: 'SubMission1 description',
               tasks: [
                  {
                     id: '345',
                     name: 'Task 1',
                     description: 'Task1 description',
                     link: 'link1',
                  },
                  {
                     id: '346',
                     name: 'Task 2',
                     description: 'Task2 description',
                     link: 'link2',
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

   return (
      <div style={{ marginLeft: '5px' }}>
         <StudentNameDiv>
            {inputUser.firstName} {inputUser.lastName}
         </StudentNameDiv>
         <img src={StudentPicture} alt="" style={{ width: 200, height: 200 }} />

         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Targets</FieldTitleDiv>
               {missions.map((mission) => (
                  <MissionDropDown
                     name={mission.name}
                     subMissions={mission.subMissions as MissionSubMission[]}
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
               {missions.map((compMission) => (
                  <MissionDropDown
                     name={compMission.name}
                     subMissions={compMission.subMissions as MissionSubMission[]}
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

export default SingleStudentOverview;
