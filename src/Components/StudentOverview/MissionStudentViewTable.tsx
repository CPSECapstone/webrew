/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
   MissionsQueryResult,
   useGetStudentsByCourseQuery,
   useMissionsQuery,
} from '../../__generated__/types';
import SelectedMissionViewTable from './SelectedMissionViewTable';

function MissionStudentViewTable() {
   const [selectedMission, setSelectedMission] = useState<string | null>(null);
   const [fetchOnce, setFetchOnce] = useState<boolean>(false);

   const handleMissionSelection = (
      event: React.MouseEvent<HTMLElement>,
      newSelectedMission: string | null
   ) => {
      setSelectedMission(newSelectedMission);
   };

   const { data: courseMissions }: MissionsQueryResult = useMissionsQuery();
   const { data: enrolledStudents } = useGetStudentsByCourseQuery();

   React.useEffect(() => {
      if (!courseMissions || fetchOnce) {
         return;
      }
      setFetchOnce(true);
   }, [fetchOnce, courseMissions]);

   if (!courseMissions) {
      return <div />;
   }

   const selectedMissionData = courseMissions.missions?.find((mission) => {
      return mission?.id === selectedMission;
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

         {selectedMission === null ? (
            <div />
         ) : (
            <SelectedMissionViewTable mission={selectedMissionData} students={enrolledStudents} />
         )}
      </div>
   );
}

export default MissionStudentViewTable;
