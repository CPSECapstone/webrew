import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
   createStyles,
   FormControl,
   InputLabel,
   makeStyles,
   MenuItem,
   Select,
   Theme,
} from '@material-ui/core';

import {
   Mission,
   ProgressOverview,
   useProgressOverviewQuery,
   UserProgress,
} from '../../__generated__/types';
import TableComponent from '../TableComponent/TableComponent';
import '../TableComponent/TableComponent.css';
import MissionIcon from '../../assets/images/missionmedical-logo.png';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      tableContainer: {
         flexGrow: 1,
         backgroundColor: theme.palette.background.paper,
      },
   })
);

function CourseHome() {
   const { data: progressData } = useProgressOverviewQuery({
      variables: {
         course: 'Integrated Science',
      },
   });

   // const { data: targetProgressData } = gett;

   const classes = useStyles();
   const { className } = useParams<Record<string, string | undefined>>();
   const [viewType, setViewType] = useState('List');

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setViewType(event.target.value as string);
   };

   const history = useHistory();
   const rowClicked = (userName: string) => {
      history.push({
         pathname: '/singleStudentOverview',
         state: { id: '', firstName: userName, lastName: ' ' },
      });
   };

   const data: any[] = [];
   progressData?.progressOverview.userProgress.map((userProgress: UserProgress) =>
      data.push({
         row: {
            name: userProgress.userName,
            recent:
               userProgress.progress.length !== 0
                  ? userProgress.progress[userProgress.progress.length - 1].taskId
                  : '',

            masteryLevel: '19',
            lastLogOn: 'Jan. 7, 2021',
         },
      })
   );

   const tableColumns = [
      {
         Header: 'Overview',
         columns: [
            {
               Header: 'Name',
               accessor: 'row.name',
            },
            {
               Header: 'Current Task',
               accessor: 'row.recent',
            },
            {
               Header: 'Mastery Level',
               accessor: 'row.masteryLevel',
            },
            {
               Header: 'Last Log-On',
               accessor: 'row.lastLogOn',
            },
         ],
      },
   ];

   // const taskGroup: any = {
   //    Header: 'Tasks',
   //    columns: [],
   // };

   // let taskCounter = 1;
   // if (progressData !== undefined) {
   //    const currentMission: any = progressData?.progressOverview.missions[0];
   //    // console.log(progressData?.progressOverview.missions);
   //    // console.log(currentMission);
   //    for (const missionContent of currentMission.missionContent) {
   //       if (missionContent.__typename === 'Task') {
   //          const taskName = `Task #${taskCounter}`;
   //          data.map((row) => {
   //             row.row[taskName] = '';
   //          });
   //          taskGroup.columns.push({
   //             Header: taskName,
   //             accessor: `row.${taskName}`,
   //          });
   //          taskCounter++;
   //       }
   //    }
   //    tableColumns.push(taskGroup);
   // }

   console.log(data);
   console.log(tableColumns);

   return (
      <div>
         <div
            className=""
            style={{
               height: '200px',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
            }}
         >
            <div className="row ">
               <img
                  src={MissionIcon}
                  alt=""
                  style={{
                     marginRight: '-28px',
                     marginTop: '-8px',
                     width: '90px',
                     height: '90px',
                     zIndex: 1,
                     position: 'relative',
                  }}
               />
               <div
                  style={{
                     color: 'white',
                     fontSize: '50px',
                     fontWeight: 'bold',
                     display: 'inline-block',
                     minWidth: '550px',
                     height: '75px',
                     textAlign: 'center',

                     background:
                        'linear-gradient(90deg, rgb(49, 119, 238) 0%, rgb(17, 61, 138) 100%) white',
                  }}
               >
                  {progressData ? progressData.progressOverview.missions[0].name : ''}
               </div>
            </div>
         </div>

         <div className={classes.tableContainer}>
            <FormControl style={{ minWidth: '150px', marginLeft: '21px', marginTop: '6px' }}>
               <InputLabel>View As</InputLabel>
               <Select value={viewType} onChange={handleChange}>
                  <MenuItem value="Chart">Seating Chart</MenuItem>
                  <MenuItem value="List">List</MenuItem>
               </Select>
            </FormControl>

            <div className="base-table">
               <TableComponent columns={tableColumns} data={data} rowClickFunction={rowClicked} />
            </div>
         </div>
      </div>
   );
}

export default CourseHome;
