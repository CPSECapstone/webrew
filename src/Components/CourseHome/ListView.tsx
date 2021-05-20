// TODO fix linting complaints

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import React from 'react';
import { useHistory } from 'react-router-dom';
import TableComponent from '../TableComponent/TableComponent';

function ListView(classMissionMasterydata: any) {
   const history = useHistory();
   const rowClicked = (userName: string) => {
      history.push({
         pathname: '/singleStudentOverview',
         state: { id: '', firstName: userName, lastName: ' ' },
      });
   };

   const data: any[] = [];
   classMissionMasterydata.classMissionMasterydata.studentMissionMasteryList.map(
      (studentMissionMastery: any) =>
         data.push({
            row: {
               name: `${studentMissionMastery.student.lastName} ${studentMissionMastery.student.firstName}`,
               recent: studentMissionMastery.currentTaskName,
               masteryLevel: studentMissionMastery.level,
               lastLogOn: 'Jan. 7, 2021',
            },
         })
   );

   // TODO remove when names are populated
   data.forEach((dataEntry) => {
      if (dataEntry.row.name.indexOf('null') !== -1) {
         dataEntry.row.name = 'Mary Lee';
      }
   });

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

   return <TableComponent columns={tableColumns} data={data} rowClickFunction={rowClicked} />;
}

export default ListView;
