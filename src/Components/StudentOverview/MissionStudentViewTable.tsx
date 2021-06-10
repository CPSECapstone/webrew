/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
   MissionsQueryResult,
   useGetStudentsByCourseQuery,
   useMissionsQuery,
} from '../../__generated__/types';
import TableComponent from '../TableComponent/TableComponent';

interface MissionStudentViewRow {
   row: {
      name: string;
      studentId: string;
   };
}

function MissionStudentViewTable() {
   const { data: students } = useGetStudentsByCourseQuery();
   const tableColumns = [
      {
         Header: 'Student Grades',
         columns: [
            {
               Header: 'Student',
               accessor: 'row.name',
            },
         ],
      },
   ];

   const [selectedMission, setSelectedMission] = useState<string | null>(null);
   const [fetchOnce, setFetchOnce] = useState<boolean>(false);

   const handleMissionSelection = (
      event: React.MouseEvent<HTMLElement>,
      newSelectedMission: string | null
   ) => {
      setSelectedMission(newSelectedMission);
   };

   const { data: courseMissions }: MissionsQueryResult = useMissionsQuery();

   React.useEffect(() => {
      if (!courseMissions || fetchOnce) {
         return;
      }
      setFetchOnce(true);
   }, [fetchOnce, courseMissions]);

   if (!courseMissions || !students) {
      return <div />;
   }

   const data: MissionStudentViewRow[] = students.students.map((student) => {
      return {
         row: {
            name: student.firstName ? student.firstName : 'NAME NOT FOUND!!!',
            studentId: student.studentId,
         },
      };
   });

   return (
      <div>
         <ToggleButtonGroup
            value={selectedMission}
            style={{ marginBottom: '20px', paddingLeft: '20px' }}
            exclusive
            onChange={handleMissionSelection}
         >
            {courseMissions?.missions?.map((mission) => {
               return (
                  <ToggleButton value={mission?.id} style={{ width: '100px' }}>
                     {mission?.name}
                  </ToggleButton>
               );
            })}
         </ToggleButtonGroup>
         <div className="base-table">
            <TableComponent columns={tableColumns} data={data} />
         </div>
      </div>
   );
}

export default MissionStudentViewTable;
