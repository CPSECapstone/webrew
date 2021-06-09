import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { MissionsQueryResult, useMissionsQuery } from '../../__generated__/types';

function MissionStudentViewTable() {
   const [selectedMission, setSelectedMission] = useState<string | null>(null);
   const [fetchOnce, setFetchOnce] = useState<boolean>(false);

   const handleMissionSelection = (
      event: React.MouseEvent<HTMLElement>,
      newSelectedMission: string | null
   ) => {
      setSelectedMission(newSelectedMission);
   };

   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
   const { data: courseMissions }: MissionsQueryResult = useMissionsQuery();

   React.useEffect(() => {
      if (!courseMissions || fetchOnce) {
         return;
      }
      setFetchOnce(true);
   }, [fetchOnce, courseMissions]);

   if (!courseMissions) {
      return <div />;
   }

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
      </div>
   );
}

export default MissionStudentViewTable;
