// source: https://github.com/CPSECapstone/Flipted-Hydro/blob/main/src/Components/MissionsScreen.js

import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { GET_MISSIONS, GET_ALL_MISSION_PROGRESS } from '../../queries/mission-queries';
import './MissionOverview.css';
import ProgressBar from './ProgressBar';

const MISSION_COMPONENT_PATH = '/courseHome/Integrated Science';

// this component displays all of the Missions in a course
export default function MissionsScreen() {
   const hist = useHistory();

   const [focusedMission, setFocusedMission] = useState(null);

   const { loading, error, data, refetch } = useQuery(GET_MISSIONS, {
      variables: { id: 'Integrated Science' },
   });

   const {
      loading: progressLoading,
      error: progressError,
      data: progressData,
      refetch: progressRefetch,
   } = useQuery(GET_ALL_MISSION_PROGRESS, {
      variables: { id: 'Integrated Science' },
   });

   if (loading || progressLoading)
      return (
         <div className="tasks">
            <h1>Loading...</h1>
         </div>
      );

   if (error || progressError) {
      console.warn(error);
      // throw error;
      return (
         <div className="tasks">
            <h1>Error!</h1>
         </div>
      );
   }

   return MissionsScreenDisplay(data, progressData, hist, focusedMission, setFocusedMission);
}

// this function allows for dependency injection during testing
export function MissionsScreenDisplay(data, progressData, hist, focusedMission, setFocusedMission) {
   function displayMissionList() {
      return (
         <div className="missionList">
            {data.missions.map((mission) => (
               <div
                  data-testid={mission.id}
                  className="Mission"
                  onClick={() => setFocusedMission(mission)}
               >
                  {/* <HdrWeakIcon style={{ color: "white", transform: "scale(6)" }}/> */}
                  <h1 style={{ color: 'white' }}>{mission.name}</h1>
               </div>
            ))}
         </div>
      );
   }

   function MissionOverview(props) {
      if (props.mission != null) {
         const prog = calculateMissionProgress(props.mission.id, progressData);
         return (
            <div data-testid="missionOverview">
               <h1>{props.mission.name}</h1>
               <h2>{props.mission.description}</h2>
               <div className="progress">
                  <div />
                  <div data-testid="missionOverviewProgressBar">
                     <ProgressBar
                        width="700"
                        height="10"
                        doneColor="#4274F3"
                        leftColor="rgb(108, 108, 133)"
                        total={100}
                        done={prog}
                     />
                  </div>
                  <h1
                     style={{
                        margin: '0',
                        padding: '0',
                     }}
                  >
                     % Complete
                  </h1>
               </div>
               <div className="start">
                  <button
                     style={{ top: '0' }}
                     onClick={() => redirectToMission(hist, props.mission.id)}
                  >
                     Continue
                  </button>
               </div>
            </div>
         );
      }
      return null;
   }

   return (
      <div className="missions">
         <>Integrated Science</>
         <h2>Missions</h2>
         {displayMissionList()}
         {!focusedMission ? null : (
            <div className="card">
               <MissionOverview mission={focusedMission} />
            </div>
         )}
      </div>
   );
}

// returns a percentage of tasks in the specified mission that have been submitted
export function calculateMissionProgress(missionId, progressData) {
   // retrieve the progress object that matches the specified missionId
   let progress = null;
   for (let i = 0; i < progressData.getAllMissionProgress.length; i++) {
      if (progressData.getAllMissionProgress[i].mission.id == missionId) {
         progress = progressData.getAllMissionProgress[i].progress;
      }
   }

   // progress object not found
   if (progress == null) {
      console.warn('Mission progress not found.');
      return 0;
   }
}

export function redirectToMission(hist, missionId) {
   hist.push({
      pathname: MISSION_COMPONENT_PATH,
      state: {
         id: missionId,
      },
   });
}
