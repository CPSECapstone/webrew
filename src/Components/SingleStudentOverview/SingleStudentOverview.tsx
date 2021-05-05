/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import StudentPicture from '../../assets/images/images-1.png';
import { User } from '../../interfaces/User';
import LinearProgressWithLabel from '../LinearProgressWithLabel/LinearProgressWithLabel';
import MissionDropDown from '../LinearProgressWithLabel/MissionDropDown';
import { MissionSubMission } from '../../interfaces/MissionSubMission';
import { GET_USERS } from '../../queries/user-queries';

const StudentDiv = styled.div`
   height: 275px;
   width: 100%;
   font-size: 24pt;
   display: flex;
   justify-content: flex-start;
   align-items: left;
   flex-direction: column;
`;

const StudentNameDiv = styled.div`
   height: 50px;
   width: 100%;
   font-size: 24pt;
   display: flex;
   justify-content: flex-start;
   align-items: left;
`;

const StudentImageDiv = styled.div`
   height: 200px;
   width: 100%;
   font-size: 24pt;
   display: flex;
   justify-content: flex-start;
   align-items: left;
`;

const FieldTitleDiv = styled.div`
   height: 30px;
   width: 100%;
   background-color: #99d6ff;
   align-items: center;
   display: flex;
   padding: 5px;
   border: 1px;
   border-color: #1A8BDE;
   border-style: solid;
}
`;

const RowDiv = styled.div`
   width: 100%;
   display: flex;
   background-color: white;
`;

const ColumnDiv = styled.div`
   width: 100%;
   flex-direction: column;
   padding: 5px;
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
   const { data: users } = useQuery<User>(GET_USERS);
   // const { userId } = useParams();
   const classes = useStyles();
   const history = useHistory();
   console.log(users);

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
                     id: 'string',
                     name: 'Task 1',
                     instructions: 'string',
                     points: 3,
                     parentMissionId: 'string',
                     parentMissionIndex: 4,
                     pages: [],
                     requirements: [],
                  },
                  {
                     id: 'string2',
                     name: 'Task 2',
                     instructions: 'string2',
                     points: 3,
                     parentMissionId: 'string2',
                     parentMissionIndex: 4,
                     pages: [],
                     requirements: [],
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
      <div style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: '#DAEFFE' }}>
         <StudentDiv>
            <StudentNameDiv>
               {inputUser.firstName} {inputUser.lastName}
            </StudentNameDiv>
            <StudentImageDiv>
               <img src={StudentPicture} alt="" style={{ width: 200, height: 200 }} />
            </StudentImageDiv>
         </StudentDiv>
         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Missions</FieldTitleDiv>
               {missions.map((mission) => (
                  <MissionDropDown name={mission.name} subMissions={mission.subMissions as any[]} />
               ))}
            </ColumnDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Goals</FieldTitleDiv>
               {goals.map((goal) => (
                  <List>
                     <PaddedDiv>
                        <ListItem
                           button
                           className={classes.nested}
                           style={{
                              border: '1px',
                              borderColor: '#C2D2FC',
                              borderStyle: 'solid',
                              backgroundColor: '#E9EEFC',
                           }}
                        >
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
               <FieldTitleDiv>Completed Missions</FieldTitleDiv>
               {missions.map((compMission) => (
                  <MissionDropDown
                     name={compMission.name}
                     subMissions={compMission.subMissions as any[]}
                  />
               ))}
            </ColumnDiv>
            <ColumnDiv>
               <FieldTitleDiv>Completed Goals</FieldTitleDiv>
               {compGoals.map((compGoal) => (
                  <List>
                     <PaddedDiv>
                        <ListItem
                           button
                           className={classes.nested}
                           style={{
                              border: '1px',
                              borderColor: '#C2D2FC',
                              borderStyle: 'solid',
                              backgroundColor: '#E9EEFC',
                           }}
                        >
                           <ListItemText primary={compGoal.name} />
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
      </div>
   );
}

export default SingleStudentOverview;
