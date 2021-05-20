/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from '@apollo/client';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Divider, Typography } from '@material-ui/core';
import StudentPicture from '../../assets/images/images-1.png';
import { User } from '../../interfaces/User';
import LinearProgressWithLabel from '../LinearProgressWithLabel/LinearProgressWithLabel';
import MissionDropDown from '../LinearProgressWithLabel/MissionDropDown';
import { GET_USERS } from '../../queries/user-queries';
import {
   CourseInfoFieldsFragment,
   TaskStats,
   useGetMissionProgressQuery,
} from '../../__generated__/types';
import CircularProgressWithLabel from '../LinearProgressWithLabel/CircularProgressWithLabel';
import MasteryCard from './MasteryCard';

const StudentDiv = styled.div`
   height: 200px;
   width: 100%;
   font-size: 24pt;
   display: flex;
   justify-content: flex-end;
   align-items: left;
`;

const StudentNameDiv = styled.div`
   height: 50px;
   width: 100%;
   font-size: 18pt;
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
   flex-direction: row;
   height: 100%;
   justify-content: left;
`;

const ColumnDiv = styled.div`
   width: 100%;
   flex-direction: column;
   padding: 5px;
`;
const LeftColumnDiv = styled.div`
   width: 75%;
   flex-direction: column;
   padding: 5px;
`;
const RightColumnDiv = styled.div`
   width: 25%;
   flex-direction: column;
   padding: 5px;
`;

const PaddedDiv = styled.div`
   padding-left: 5px;
`;
const HeaderDiv = styled.div`
   height: 100%;
   width: 100%;
   font-size: 24pt;
   display: flex;
`;

const TargetDiv = styled.div`
   height: 175px;
   width: 100%;
   color: #2f80ed;
   display: flex;
   justify-content: flex-start;
   align-items: flex-end;
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

function calculateStatus(progress: TaskStats[]) {
   let count = 0;
   for (const taskStat of progress) {
      console.log(taskStat);
      if (taskStat.submission?.graded) {
         count++;
      }
   }
   if (progress.length > 0) {
      return count / progress.length;
   }
   return 0;
}

function SingleStudentOverview() {
   const { data: users } = useQuery<User>(GET_USERS);
   // const { userId } = useParams();
   const classes = useStyles();
   const history = useHistory();

   const COMP_TASK_PERCENT = 100;

   const testVal: any = history.location.state;
   const inputUser: User = {
      id: testVal?.id,
      firstName: testVal?.firstName,
      lastName: testVal?.lastName,
   };
   const { data } = useGetMissionProgressQuery({
      variables: {
         courseId: 'Integrated Science',
         username: 'Google_113982570160032635204',
      },
   });
   const missionData1 = data?.getAllMissionProgress[0];
   const missionData = data?.getAllMissionProgress;
   console.log(missionData);

   return (
      <div
         data-testid="single-student-overview"
         className="container d-inline-block "
         style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: 'white' }}
      >
         <HeaderDiv className="row">
            <TargetDiv className="col-8">
               <List>
                  <ListItem>Mission Progress</ListItem>
               </List>
            </TargetDiv>
            <StudentDiv className="col-4">
               <ColumnDiv className="container d-inline-block">
                  <StudentNameDiv className="container-sm">
                     {inputUser.firstName}
                     {inputUser.lastName}
                  </StudentNameDiv>
                  <StudentImageDiv className="container-sm">
                     <img src={StudentPicture} alt="" style={{ width: 120, height: 120 }} />
                  </StudentImageDiv>
               </ColumnDiv>
            </StudentDiv>
         </HeaderDiv>
         <Divider orientation="horizontal" />
         <RowDiv className="row">
            {missionData?.map((mission) => (
               <MasteryCard
                  name={mission.mission.name}
                  progress={mission.progress as TaskStats[]}
                  status={calculateStatus(mission.progress)}
                  user={inputUser}
               />
            ))}
         </RowDiv>
      </div>
   );
}

export default SingleStudentOverview;
