/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SeatingChartView(classMissionMasterydata: any) {
   return (
      <div>
         {classMissionMasterydata.classMissionMasterydata.studentMissionMasteryList.map(
            (studentMissionMastery: any) => {
               return (
                  <div style={{ width: 150, height: 150 }}>
                     <CircularProgressbar value={studentMissionMastery.progress * 100} />
                  </div>
               );
            }
         )}
      </div>
   );
}

export default SeatingChartView;
