// Source: https://github.com/CPSECapstone/Flipted-Hydro/blob/main/src/Components/Mission.js
import { useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';
import { GET_MISSION } from '../../queries/mission-queries';
import './Mission.css';

function Mission() {
   const { missionId } = useParams<Record<string, string | undefined>>();

   const { loading, error, data } = useQuery(GET_MISSION, {
      variables: { id: missionId },
   });

   if (loading) return <h2>Loading...</h2>;

   if (error) {
      return <h2>Error!</h2>;
   }

   const title = data.mission.name;
   const { description } = data.mission;

   function displayMissions(data) {
      return data.mission.missionContent.map((missionContentItem) => {
         if (missionContentItem.__typename === 'Task') {
            return renderTask(missionContentItem);
         }
         if (missionContentItem.__typename === 'SubMission') {
            return renderSubMission(missionContentItem);
         }
      });
   }

   function renderTask(task) {
      const history = useHistory();

      return (
         <div>
            <div
               key={task.id}
               className={task.__typename}
               onClick={() => history.push(`/viewTask/${task.id}`)}
            >
               <ul>
                  <h5>{task.name}</h5>
                  <h2>
                     Score: {task?.submission?.pointsAwarded} / {task.points}
                  </h2>
               </ul>
            </div>
         </div>
      );
   }

   function renderSubMission(subMission) {
      return (
         <div key={subMission.id} className={subMission.__typename}>
            <ul>
               <h2>Sub-Mission:</h2>
               <h5>{subMission.name}</h5>
            </ul>
         </div>
      );
   }

   return (
      <div className="MissonOverview">
         <div className="background">
            <div className="missionTitle" />
            <div className="missiontext">
               <h1>{title}</h1>
               <h2>{description}</h2>
            </div>
            <div className="row">
               <div className="column">
                  <div className="taskSpace">
                     <ul>{displayMissions(data)}</ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Mission;
