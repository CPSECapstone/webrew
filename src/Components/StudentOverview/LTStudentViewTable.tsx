/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-restricted-syntax */
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import TableComponent from '../TableComponent/TableComponent';
import {
   CmStudentFieldsFragment,
   Target,
   useClassMissionMasteryQuery,
} from '../../__generated__/types';
import { LIST_TARGETS_BY_COURSE } from '../../hooks/ListTargetsByCourse';
import SelectedLTStudentViewTable from './SelectedLTStudentViewTable';

function LTStudentViewTable() {
   const { data: missionMasteryData } = useClassMissionMasteryQuery();

   const [selectedLT, setSlectedLT] = useState<string | null>(null);

   const handleLTSelection = (
      event: React.MouseEvent<HTMLElement>,
      newSelectedLT: string | null
   ) => {
      setSlectedLT(newSelectedLT);
   };

   const history = useHistory();

   const { data: courseTargets } = useQuery(LIST_TARGETS_BY_COURSE);

   if (!courseTargets) {
      return <div />;
   }

   const rowClicked = (userName: string) => {
      history.push({
         pathname: '/singleStudentMasteryOverview',
         state: { id: '', firstName: userName, lastName: ' ' },
      });
   };

   const data: any[] = [];
   missionMasteryData?.classMissionMastery?.studentMissionMasteryList.map(
      (studentMissionMastery: CmStudentFieldsFragment) =>
         data.push({
            row: {
               section: '1',
               name: `${studentMissionMastery.student.email}`,
               team: studentMissionMastery.student.team,
               recent: studentMissionMastery.currentTaskName,
               average: '',
               progress: `${(studentMissionMastery.progress * 100).toFixed(1)}%`,
            },
         })
   );

   // TODO remove when names are populated
   data.forEach((dataEntry) => {
      // if (dataEntry.row.name.indexOf('null') !== -1) {
      //    dataEntry.row.name = 'Mary Lee';
      // }
      if (dataEntry.row.name.length > 25) {
         dataEntry.row.name = dataEntry.row.name.substring(0, 25);
      }
   });

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
               Header: 'Team',
               accessor: 'row.team',
            },
            {
               Header: 'Recent',
               accessor: 'row.recent',
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

   const learningTargetGroup: any = {
      Header: 'Learning Targets',
      columns: [],
   };

   // Set handles the case of two learing targets with the same name
   const learningTargetSet = new Set();

   courseTargets.targets.map((target: Target) => {
      data.map((row: any) => {
         row.row[target.targetName] = '';
      });
      if (!learningTargetSet.has(target.targetName)) {
         learningTargetSet.add(target.targetName);
         learningTargetGroup.columns.push({
            Header: target.description,
            accessor: `row.${target.targetName}`,
         });
      }
   });
   tableColumns.push(learningTargetGroup);

   return (
      <div>
         <ToggleButtonGroup
            value={selectedLT}
            style={{ paddingLeft: '20px' }}
            exclusive
            onChange={handleLTSelection}
         >
            {courseTargets.targets.map((target: Target) => {
               return (
                  <ToggleButton value={target.targetId} style={{ width: '100px' }}>
                     {target.targetName}
                  </ToggleButton>
               );
            })}
         </ToggleButtonGroup>

         {selectedLT === null ? (
            <div className="base-table">
               <TableComponent columns={tableColumns} data={data} rowClickFunction={rowClicked} />
            </div>
         ) : (
            <SelectedLTStudentViewTable
               classMissionMastery={missionMasteryData?.classMissionMastery}
               selectedLTId={selectedLT}
            />
         )}
      </div>
   );
}

export default LTStudentViewTable;
