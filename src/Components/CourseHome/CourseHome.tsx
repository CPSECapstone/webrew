import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

import {
   Mission,
   ProgressOverview,
   useProgressOverviewQuery,
   UserProgress,
} from '../../__generated__/types';
import TableComponent from '../TableComponent/TableComponent';

import '../TableComponent/TableComponent.css';

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

   const classes = useStyles();
   const { className } = useParams<Record<string, string | undefined>>();

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
            section: 1,
            name: userProgress.userName,
            team: '',
            time: '',
            recent: {
               status:
                  userProgress.progress.length !== 0
                     ? userProgress.progress[userProgress.progress.length - 1].taskId
                     : '',
               style: {
                  backgroundColor:
                     userProgress.progress.length !== 0
                        ? userProgress.progress[userProgress.progress.length - 1].status
                           ? '#00b300'
                           : '#ff6666'
                        : '#a6a6a6',
               },
            },
         },
      })
   );

   const tableColumns = [
      {
         Header: 'Student Information',
         columns: [
            {
               Header: 'Section',
               accessor: 'row.section',
            },
            {
               Header: 'Student',
               accessor: 'row.name',
            },
            {
               Header: 'Team',
               accessor: 'row.team',
            },
            {
               Header: 'Time',
               accessor: 'row.time',
            },
            {
               Header: 'Status',
               accessor: 'row.recent',
               Cell: ({ value }: { value: any }) => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  return <>{value.status} </>;
               },
            },
         ],
      },
   ];

   const taskGroup: any = {
      Header: 'Tasks',
      columns: [],
   };

   let taskCounter = 1;
   if (progressData !== undefined) {
      const currentMission: any = progressData?.progressOverview.missions[0];
      // console.log(progressData?.progressOverview.missions);
      // console.log(currentMission);
      for (const missionContent of currentMission.missionContent) {
         if (missionContent.__typename === 'Task') {
            const taskName = `Task #${taskCounter}`;
            data.map((row) => {
               row.row[taskName] = '';
            });
            taskGroup.columns.push({
               Header: taskName,
               accessor: `row.${taskName}`,
            });
            taskCounter++;
         }
      }
      tableColumns.push(taskGroup);
   }

   console.log(data);
   console.log(tableColumns);

   return (
      <div>
         <div
            style={{
               color: 'white',
               fontSize: '50px',
               fontWeight: 'bold',
               textAlign: 'center',
               background:
                  'linear-gradient(90deg, rgb(49, 119, 238) 0%, rgb(17, 61, 138) 100%) white',
            }}
         >
            {className}
         </div>
         <div className={classes.tableContainer}>
            <div className="base-table">
               <TableComponent columns={tableColumns} data={data} rowClickFunction={rowClicked} />
            </div>
         </div>
      </div>
   );
}

export default CourseHome;
