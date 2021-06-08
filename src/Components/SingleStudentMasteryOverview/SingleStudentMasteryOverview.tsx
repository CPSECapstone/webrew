/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import StudentPicture from '../../assets/images/images-1.png';
import { User } from '../../interfaces/User';
import {
   ObjectiveProgressFieldsFragment,
   TaskObjectiveProgressFieldsFragment,
   useGetTargetProgressQuery,
} from '../../__generated__/types';
import TargetMasteryCard from './TargetMasteryCard';

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

function getTaskCount(tasks: TaskObjectiveProgressFieldsFragment[]) {
   let count = 0;
   for (const task of tasks) {
      if (task.mastery !== 'NOT_GRADED') {
         count++;
      }
   }
   return count;
}

function calculateStatus(objectives: ObjectiveProgressFieldsFragment[]) {
   let count = 0;
   for (const objective of objectives) {
      count += getTaskCount(objective.tasks);
   }

   return count;
}

function SingleStudentMasteryOverview() {
   const history = useHistory();

   const test: any = history.location.state;
   const inputUser: User = {
      id: test?.id,
      firstName: test?.firstName,
      lastName: test?.lastName,
   };
   console.log(inputUser.firstName);

   const { data } = useGetTargetProgressQuery({
      variables: {
         courseId: 'Integrated Science',
         username: 'Google_113982570160032635204',
      },
   });

   console.log(data);

   if (!data) {
      <div>Data Undefined</div>;
   }

   const targetData = data?.getAllTargetProgress;
   console.log(targetData);

   return (
      <div className="container" style={{ backgroundColor: 'white' }}>
         <HeaderDiv className="row">
            <TargetDiv className="col-8">
               <List>
                  <ListItem>Target Progress</ListItem>
               </List>
            </TargetDiv>
            <StudentDiv className="col-4">
               <ColumnDiv className="container">
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
            {targetData?.map((target) => (
               <TargetMasteryCard
                  name={target.target.targetName}
                  status={calculateStatus(target.objectives)}
                  user={inputUser}
               />
            ))}
         </RowDiv>
      </div>
   );
}

export default SingleStudentMasteryOverview;
