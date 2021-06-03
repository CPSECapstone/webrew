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
import { CmStudentFieldsFragment } from '../../__generated__/types';

interface MissionMasteryRow {
   row: {
      name: string;
      recent: string;
      masteryLevel: string;
      lastLogOn: string;
      studentId: string;
   };
}

function ListView(classMissionMasterydata: any) {
   const history = useHistory();
   const rowClicked = (row: MissionMasteryRow) => {
      console.log(row);
      history.push({
         pathname: `/singleStudentOverview/${row.row.studentId}`,
      });
   };

   const data: MissionMasteryRow[] = classMissionMasterydata.classMissionMasterydata.studentMissionMasteryList.map(
      (studentMissionMastery: CmStudentFieldsFragment) => {
         return {
            row: {
               name: `${studentMissionMastery.student.lastName} ${studentMissionMastery.student.firstName}`,
               recent: studentMissionMastery.currentTaskName,
               masteryLevel: studentMissionMastery.level,
               lastLogOn: 'Jan. 7, 2021',
               studentId: studentMissionMastery.student.studentId,
            },
         };
      }
   );

   // TODO remove when names are populated
   data.forEach((dataEntry: MissionMasteryRow) => {
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
