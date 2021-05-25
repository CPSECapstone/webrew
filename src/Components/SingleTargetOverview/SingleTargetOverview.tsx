import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { Divider, ListItemText, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import StudentPicture from '../../assets/images/images-1.png';
import {
   Objective,
   useGetTargetProgressQuery,
   TargetProgress,
   TaskObjectiveProgress,
   TargetProgressFieldsFragment,
   ObjectiveProgressFieldsFragment,
   ObjectiveProgress,
   TaskObjectiveProgressFieldsFragment,
} from '../../__generated__/types';
import { User } from '../../interfaces/User';
import ObjectiveDropDown from '../LinearProgressWithLabel/ObjectiveDropDown';
import CircularProgressWithLabel from '../LinearProgressWithLabel/CircularProgressWithLabel';

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

const StudentDiv = styled.div`
   height: 175px;
   width: 100%;
   font-size: 24pt;
   display: flex;
   justify-content: flex-end;
   align-items: left;
`;

const SingleTargetDiv = styled.div`
   background-color: white;
`;

const StudentNameDiv = styled.div`
   height: 30px;
   width: 100%;
   font-size: 18pt;
   display: flex;
   justify-content: flex-end;
   align-items: left;
`;

const StudentImageDiv = styled.div`
   height: 175px;
   width: 100%;
   display: flex;
   justify-content: flex-end;
   align-items: left;
`;

const RowDiv = styled.div`
   width: 100%;
   display: flex;
   background-color: white;
   flex-direction: row;
   height: 100%;
   justify-content: center;
`;

const ColumnDiv = styled.div`
   width: 100%;
   flex-direction: column;
   padding: 5px;
`;

const TargetColumnDiv = styled.div`
   width: 75%;
   flex-direction: column;
   padding: 5px;
   // border-right: 1px solid #c2d2fc;
`;

const CircleColumnDiv = styled.div`
   width: 25%;
   flex-direction: column;
   padding: 5px;
   justify-content: center;
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

function getTargetData(targetData1: TargetProgress[], name: string) {
   for (const target of targetData1) {
      if (target.target.targetName === name) {
         return target;
      }
   }
}

export default function SingleTargetOveriew() {
   const classes = useStyles();
   const history = useHistory();
   const { name } = useParams<Record<string, string | undefined>>();
   const test: any = history.location.state;
   const inputUser: User = {
      id: test?.id,
      firstName: test?.firstName,
      lastName: test?.lastName,
   };
   const { data, loading, error } = useGetTargetProgressQuery({
      variables: {
         courseId: 'Integrated Science',
         username: 'Google_118280657086683968595',
      },
   });

   if (loading) {
      return <p>Loading...</p>;
   }
   if (error) {
      return <p>`Error! ${error.message}`</p>;
   }
   if (!data) {
      return <></>;
   }

   const targetData1 = data.getAllTargetProgress;
   console.log(targetData1);
   // const targetData = data?.getAllTargetProgress[0];
   // console.log(targetData);
   const targetData = getTargetData((targetData1 as unknown) as TargetProgress[], name as string);

   // A hardcoded name to account for reaching the page via the side menu
   if (!inputUser.firstName && !inputUser.lastName) {
      inputUser.firstName = 'Bob';
      inputUser.lastName = 'Jones';
   }

   return (
      <SingleTargetDiv className="container d-inline-block " style={{ marginRight: '5px' }}>
         <HeaderDiv className="row">
            <TargetDiv className="col-9">
               <List>
                  <ListItem>
                     <ListItemText>
                        <Typography color="textSecondary">Task Mastery</Typography>
                     </ListItemText>
                  </ListItem>
                  <ListItem>{name}</ListItem>
               </List>
            </TargetDiv>
            <StudentDiv className="col-3">
               <ColumnDiv>
                  <StudentNameDiv>{targetData?.target.targetName}</StudentNameDiv>
                  <StudentImageDiv>
                     <img src={StudentPicture} alt="" style={{ width: 120, height: 120 }} />
                  </StudentImageDiv>
               </ColumnDiv>
            </StudentDiv>
         </HeaderDiv>
         <Divider orientation="horizontal" />
         <RowDiv className="row">
            <TargetColumnDiv className="col-12">
               {targetData?.objectives.map((objective: ObjectiveProgress) => (
                  <ObjectiveDropDown name={objective.objectiveName} tasks={objective.tasks} />
               ))}
            </TargetColumnDiv>
         </RowDiv>
      </SingleTargetDiv>
   );
}