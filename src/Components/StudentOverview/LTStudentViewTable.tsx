import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Progress } from '../../interfaces/Progress';
import { Users } from '../../interfaces/Users';
import TableComponent from '../TableComponent/TableComponent';
import {
   ProgressOverview,
   Target,
   useProgressOverviewQuery,
   UserProgress,
} from '../../__generated__/types';

function rowClick(test: string) {
   console.log('Row Clicked', test);
}

function LTStudentViewTable() {
   const { data: progressData } = useProgressOverviewQuery({
      variables: {
         course: 'Integrated Science',
      },
   });

   const data: any[] = [];

   // if (progressData === undefined) {
   //    return <div />;
   // }

   progressData?.progressOverview.userProgress.map((userProgress: UserProgress) =>
      data.push({
         row: {
            section: 1,
            name: userProgress.userName,
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
            average: '',
            progress: '%',
         },
      })
   );

   console.log(data);

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
               Header: 'Recent',
               accessor: 'row.recent',
               Cell: ({ value }: { value: any }) => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  return <>{value.status} </>;
               },
            },
            {
               Header: 'Average',
               accessor: 'row.average',
            },
            {
               Header: 'Progress',
               accessor: 'row.progress',
            },
         ],
      },
   ];

   // const columns = useMemo(
   //    () => [
   //       {
   //          Header: 'Section',
   //          accessor: 'row.section',
   //       },
   //       {
   //          Header: 'Student',
   //          accessor: 'row.name',
   //       },
   //       // {
   //       //    Header: 'Time',
   //       //    accessor: 'row.time',
   //       // },
   //       // {
   //       //    Header: 'Recent',
   //       //    accessor: 'row.recent',
   //       //    Cell: ({ value }: { value: any }) => {
   //       //       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
   //       //       return <>{value.status} </>;
   //       //    },
   //       // },
   //       {
   //          Header: 'Average',
   //          accessor: 'row.average',
   //       },
   //       {
   //          Header: 'Progress',
   //          accessor: 'row.progress',
   //       },
   //    ],
   //    []
   // );

   const learningTargetGroup: any = {
      Header: 'Learning Targets',
      columns: [],
   };

   if (progressData !== undefined) {
      for (const target of progressData?.progressOverview.targets) {
         data.map((row) => {
            row.row[target.targetName] = target.targetName;
         });
         learningTargetGroup.columns.push({
            Header: target.targetName,
            accessor: `row.${target.targetName}`,
         });
      }
      tableColumns.push(learningTargetGroup);
   }

   // progressData?.progressOverview.targets.map((target: Target) =>

   // );

   console.log(tableColumns);

   return (
      <div className="base-table">
         <TableComponent columns={tableColumns} data={data} rowClickFunction={rowClick} />
      </div>
   );
}

export default LTStudentViewTable;
