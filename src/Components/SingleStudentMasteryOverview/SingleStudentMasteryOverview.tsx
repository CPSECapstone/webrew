// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import styled from 'styled-components';
// import { Link, useHistory } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import StudentPicture from '../../assets/images/images-1.png';
// import LinearProgressWithLabel from '../LinearProgressWithLabel/LinearProgressWithLabel';
// import TargetDropDown from '../LinearProgressWithLabel/TargetDropDown';
// import {
//    Objective,
//    ObjectiveProgress,
//    TargetProgress,
//    useGetTargetProgressQuery,
// } from '../../__generated__/types';
// import { User } from '../../interfaces/User';

// const StudentDiv = styled.div`
//    height: 275px;
//    width: 100%;
//    font-size: 24pt;
//    display: flex;
//    justify-content: flex-start;
//    align-items: left;
// `;

// const StudentNameDiv = styled.div`
//    height: 50px;
//    width: 100%;
//    font-size: 24pt;
//    display: flex;
//    justify-content: flex-start;
//    align-items: left;
// `;

// const StudentImageDiv = styled.div`
//    height: 200px;
//    width: 100%;
//    font-size: 24pt;
//    display: flex;
//    justify-content: flex-start;
//    align-items: left;
// `;

// const FieldTitleDiv = styled.div`
//    height: 30px;
//    width: 100%;
//    background-color: #99d6ff;
//    align-items: center;
//    display: flex;
//    padding: 5px;
//    border: 1px;
//    border-color: #1A8BDE;
//    border-style: solid;
// }
// `;

// const RowDiv = styled.div`
//    width: 100%;
//    display: flex;
//    background-color: white;
// `;

// const ColumnDiv = styled.div`
//    width: 100%;
//    flex-direction: column;
//    padding: 5px;
// `;

// const PaddedDiv = styled.div`
//    padding-left: 5px;
// `;

// const useStyles = makeStyles((theme: Theme) =>
//    createStyles({
//       root: {
//          width: '100%',
//          maxWidth: 500,
//          backgroundColor: theme.palette.background.paper,
//       },
//       nested: {
//          paddingLeft: theme.spacing(4),
//       },
//       progressBar: {
//          minWidth: '150px',
//       },
//    })
// );

// export interface LearningTarget {
//    name: string;
//    learningObjectives: Objective[];
// }

// export default function SingleStudentMasteryOverview() {
//    const classes = useStyles();
//    const history = useHistory();
//    const test: any = history.location.state;
//    const inputUser: User = {
//       id: test?.id,
//       firstName: test?.firstName,
//       lastName: test?.lastName,
//    };

//    // A hardcoded name to account for reaching the page via the side menu
//    if (!inputUser.firstName && !inputUser.lastName) {
//       inputUser.firstName = 'Bob';
//       inputUser.lastName = 'Jones';
//    }

//    // const learningTargets = [
//    //    {
//    //       name: 'Target 1',
//    //       learningObjectives: [
//    //          {
//    //             objectiveName: 'Objective 1',
//    //             tasks: [
//    //                {
//    //                   name: 'Task 1',
//    //                },
//    //                {
//    //                   name: 'Task 2',
//    //                },
//    //             ],
//    //          },
//    //          {
//    //             objectiveName: 'Objective 2',
//    //             tasks: [
//    //                {
//    //                   name: 'Task 1',
//    //                },
//    //                {
//    //                   name: 'Task 2',
//    //                },
//    //             ],
//    //          },
//    //       ],
//    //    },
//    //    {
//    //       name: 'Target 2',
//    //       learningObjectives: [
//    //          {
//    //             objectiveName: 'Objective 1',
//    //             tasks: [
//    //                {
//    //                   name: 'Task 1',
//    //                },
//    //                {
//    //                   name: 'Task 2',
//    //                },
//    //             ],
//    //          },
//    //          {
//    //             objectiveName: 'Objective 2',
//    //             tasks: [
//    //                {
//    //                   name: 'Task 1',
//    //                },
//    //                {
//    //                   name: 'Task 2',
//    //                },
//    //             ],
//    //          },
//    //       ],
//    //    },
//    // ];

//    const goals = [
//       {
//          name: 'Goal 1',
//       },
//       {
//          name: 'Goal 2',
//       },
//       {
//          name: 'Goal 3',
//       },
//    ];

//    const compGoals = [
//       {
//          name: 'Goal 0',
//       },
//       {
//          name: 'Goal 0.1',
//       },
//       {
//          name: 'Goal 0.2545454646',
//       },
//    ];

//    const compLearningTargets = [
//       {
//          name: 'Target 0',
//          compLearningObjectives: [
//             {
//                objectiveName: 'Objective 1',
//                tasks: [
//                   {
//                      name: 'Task 1',
//                   },
//                   {
//                      name: 'Task 2A',
//                   },
//                ],
//             },
//          ],
//       },
//       {
//          name: 'Target 0.5',
//          compLearningObjectives: [
//             {
//                objectiveName: 'Objective 1',
//                tasks: [
//                   {
//                      name: 'Task 1',
//                   },
//                   {
//                      name: 'Task 2A',
//                   },
//                ],
//             },
//          ],
//       },
//    ];
//    const { data } = useGetTargetProgressQuery({
//       variables: {},
//    });

//    if (!data) {
//       <div>Data Undefined</div>;
//    }

//    const targetData = data?.getAllTargetProgress;
//    // console.log(targetData?.target.targetName);

//    const COMP_TASK_PERCENT = 100;

//    return (
//       <div style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: '#DAEFFE' }}>
//          <StudentDiv>
//             <ColumnDiv>
//                <StudentNameDiv>
//                   {inputUser.firstName} {inputUser.lastName}
//                </StudentNameDiv>
//                <StudentImageDiv>
//                   <img src={StudentPicture} alt="" style={{ width: 200, height: 200 }} />
//                </StudentImageDiv>
//             </ColumnDiv>
//             <ColumnDiv>
//                <Link
//                   to={{
//                      pathname: 'singleStudentOverview',
//                      state: {
//                         id: inputUser.id,
//                         firstName: inputUser.firstName,
//                         lastName: inputUser.lastName,
//                      },
//                   }}
//                >
//                   <Button variant="info" size="lg">
//                      Click for Mission Progress
//                   </Button>
//                </Link>
//             </ColumnDiv>
//          </StudentDiv>
//          <RowDiv>
//             <ColumnDiv>
//                <FieldTitleDiv>Current Targets</FieldTitleDiv>
//                {targetData?.map((targetProgress) => (
//                   <TargetDropDown
//                      name={targetProgress.target.targetName}
//                      objectives={targetProgress.objectives as ObjectiveProgress[]}
//                   />
//                ))}
//             </ColumnDiv>
//             <ColumnDiv>
//                <FieldTitleDiv>Current Goals</FieldTitleDiv>
//                {goals.map((goal) => (
//                   <List>
//                      <PaddedDiv>
//                         <ListItem
//                            button
//                            className={classes.nested}
//                            style={{
//                               border: '1px',
//                               borderColor: '#C2D2FC',
//                               borderStyle: 'solid',
//                               backgroundColor: '#E9EEFC',
//                            }}
//                         >
//                            <ListItemText primary={goal.name} />
//                            <LinearProgressWithLabel
//                               className={classes.progressBar}
//                               value={COMP_TASK_PERCENT}
//                            />
//                         </ListItem>
//                      </PaddedDiv>
//                   </List>
//                ))}
//             </ColumnDiv>
//          </RowDiv>
//          <RowDiv>
//             <ColumnDiv>
//                <FieldTitleDiv>Completed Targets</FieldTitleDiv>
//                {/* {compLearningTargets.map((compTarget) => (
//                   <TargetDropDown
//                      name={compTarget.name}
//                      learningObjectives={compTarget.compLearningObjectives as any[]}
//                   />
//                ))} */}
//             </ColumnDiv>
//             <ColumnDiv>
//                <FieldTitleDiv>Completed Goals</FieldTitleDiv>
//                {compGoals.map((compGoal) => (
//                   <List>
//                      <PaddedDiv>
//                         <ListItem
//                            button
//                            className={classes.nested}
//                            style={{
//                               border: '1px',
//                               borderColor: '#C2D2FC',
//                               borderStyle: 'solid',
//                               backgroundColor: '#E9EEFC',
//                            }}
//                         >
//                            <ListItemText primary={compGoal.name} />
//                            <LinearProgressWithLabel
//                               className={classes.progressBar}
//                               value={COMP_TASK_PERCENT}
//                            />
//                         </ListItem>
//                      </PaddedDiv>
//                   </List>
//                ))}
//             </ColumnDiv>
//          </RowDiv>
//       </div>
//    );
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import StudentPicture from '../../assets/images/images-1.png';
import { User } from '../../interfaces/User';
// import {
//    CourseInfoFieldsFragment,
//    TaskStats,
//    useGetMissionProgressQuery,
// } from '../../__generated__/types';
// import TargetDropDown from '../LinearProgressWithLabel/TargetDropDown';
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

// function calculateStatus(progress: TaskObjectiveProgress[]) {
//    let count = 0;
//    for (const taskStat of progress) {
//       console.log(taskStat);
//       if (taskStat.mastery !== 'NOT_GRADED') {
//          count++;
//       }
//    }
//    if (progress.length > 0) {
//       return count / progress.length;
//    }
//    return 0;
// }

function SingleStudentMasteryOverview() {
   // const { data: users } = useQuery<User>(GET_USERS);
   // const { userId } = useParams();
   const classes = useStyles();
   const history = useHistory();

   const test: any = history.location.state;
   const inputUser: User = {
      id: test?.id,
      firstName: test?.firstName,
      lastName: test?.lastName,
   };
   console.log(inputUser.id);

   const { data } = useGetTargetProgressQuery({
      variables: {
         courseId: 'Integrated Science',
         username: '74caa373-b13a-4a97-84d3-ba9e27236290',
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
