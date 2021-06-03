// TODO fix linting complaints

/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GridWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(7, 1fr);
   gap: 10px;
   justify-items: center;
   padding: 20px !important;
`;

const ProgressContent = styled.div`
   font-size: 14px;
   max-width: 120px;
   text-align: center;
`;

const CurrentTask = styled.div`
   margin-top: 5px;
   display: flex;
   flex-direction: column;
`;

function SeatingChartView(classMissionMasterydata: any) {
   return (
      <GridWrapper>
         {classMissionMasterydata.classMissionMasterydata.studentMissionMasteryList.map(
            (studentMissionMastery: any) => {
               return (
                  <div style={{ width: 150, height: 150 }}>
                     <CircularProgressbarWithChildren
                        value={studentMissionMastery.progress * 100}
                        styles={{ path: { stroke: '#2F80ED' } }}
                     >
                        <ProgressContent>
                           <strong>
                              {/* Abbreviates last name if name is more than 25 chars */}
                              {/* {studentMissionMastery.student.email.split('@')[0]} */}

                              {studentMissionMastery.student.email.split('@')[0].length < 10
                                 ? `${studentMissionMastery.student.email.split('@')[0]}`
                                 : `${studentMissionMastery.student.email
                                      .split('@')[0]
                                      .substring(0, 10)}...`}
                           </strong>
                           <CurrentTask>
                              <div>
                                 <Link to="/viewTask">Current Task</Link>
                              </div>
                              <div>{studentMissionMastery.currentTaskName}</div>
                           </CurrentTask>
                        </ProgressContent>
                     </CircularProgressbarWithChildren>
                  </div>
               );
            }
         )}
      </GridWrapper>
   );
}

export default SeatingChartView;
