/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import StudentPicture from '../../assets/images/images-1.png';
import { User } from '../../interfaces/User';
import LinearProgressWithLabel from '../LinearProgressWithLabel/LinearProgressWithLabel';
import {
   TaskObjectiveProgress,
   TaskStats,
   useGetMissionProgressQuery,
   useGetTaskObjectiveProgressQuery,
} from '../../__generated__/types';

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

const TaskRowDiv = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: right;
`;

const ColumnDiv = styled.div`
   width: 100%;
   flex-direction: column;
   padding: 5px;
`;
const LeftColumnDiv = styled.div`
   width: 75%;
   flex-direction: column;
   display: flex
   align-items: right;
   justify-content: right;
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

function getTaskObjectiveProgress(task: TaskStats) {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { data: taskObjectiveProgress } = useGetTaskObjectiveProgressQuery({
      variables: {
         taskId: task.taskId,
         username: 'Google_114813486146105420824',
      },
   });
   if (taskObjectiveProgress === undefined) {
      return <></>;
   }
   const objectiveProgresses = (taskObjectiveProgress.getTaskObjectiveProgress as unknown) as TaskObjectiveProgress[];
   return objectiveProgresses;
}

// eslint-disable-next-line consistent-return
function getMissionProgress(missionData: any, name: string) {
   // eslint-disable-next-line no-restricted-syntax
   for (const mission of missionData) {
      if (mission.mission.name === name) {
         // eslint-disable-next-line @typescript-eslint/no-unsafe-return
         return mission.progress;
      }
   }
}

function SingleMissionOverview() {
   // const { data: users } = useQuery<User>(GET_USERS);
   const { name } = useParams<Record<string, string | undefined>>();
   // const { username } = useParams<Record<string, string | undefined>>();
   const username = 'Google_114813486146105420824';
   const classes = useStyles();
   const history = useHistory();
   console.log(history);

   const test: any = history.location.state;
   const inputUser: User = {
      id: test?.id,
      firstName: test?.firstName,
      lastName: test?.lastName,
   };
   console.log(inputUser.id);
   const { loading, error, data } = useGetMissionProgressQuery({
      variables: {
         courseId: 'Integrated Science',
         username: 'Google_113982570160032635204',
      },
   });

   if (loading) {
      return <p>Loading...</p>;
   }
   if (error) {
      return <p>`Error! ${error.message}`</p>;
   }

   const missionData = data?.getAllMissionProgress;

   const missionProgressData = getMissionProgress(missionData, name as string);

   return (
      <div
         className="container"
         style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: 'white' }}
      >
         <HeaderDiv className="row">
            <TargetDiv className="col-8">
               <List>
                  <ListItem>{name}</ListItem>
               </List>
            </TargetDiv>
            <StudentDiv className="col-4">
               <ColumnDiv>
                  <StudentNameDiv className="row">
                     {inputUser.firstName}
                     {inputUser.lastName}
                  </StudentNameDiv>
                  <StudentImageDiv className="row">
                     <img src={StudentPicture} alt="" style={{ width: 120, height: 120 }} />
                  </StudentImageDiv>
               </ColumnDiv>
            </StudentDiv>
         </HeaderDiv>
         <Divider orientation="horizontal" />
         <TaskRowDiv className="row">
            <LeftColumnDiv className="col-12" style={{ justifyContent: 'right' }}>
               {missionProgressData?.map((task: TaskStats) => (
                  // <Link to={`/viewTask/${task.taskId}`} data-testid="task-btn">
                  <Link
                     to={{
                        pathname: `/viewTask/${task.taskId}/${username}`,
                        state: getTaskObjectiveProgress(task),
                     }}
                     data-testid="task-btn"
                  >
                     {console.log(task)}
                     <List
                        component="div"
                        disablePadding
                        style={{ justifyContent: 'right', width: '100%' }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'right',
                           }}
                        >
                           <ListItem button divider style={{ width: '100%' }}>
                              <ListItemText primary={task.name} style={{ width: '100%' }} />
                              {(() => {
                                 if (task?.submission?.graded) {
                                    return (
                                       <LinearProgressWithLabel
                                          className={classes.progressBar}
                                          value={
                                             ((task?.submission?.pointsAwarded as number) /
                                                (task?.submission?.pointsPossible as number)) *
                                             100
                                          }
                                       />
                                    );
                                 }

                                 return (
                                    <LinearProgressWithLabel
                                       className={classes.progressBar}
                                       value={0}
                                    />
                                 );
                              })()}
                           </ListItem>
                        </div>
                     </List>
                  </Link>
               ))}
            </LeftColumnDiv>
         </TaskRowDiv>
      </div>
   );
}

export default SingleMissionOverview;
