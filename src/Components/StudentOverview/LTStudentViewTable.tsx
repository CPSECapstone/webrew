/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
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
   CtmObjectiveMasteryFieldsFragment,
   Target,
   useClassMissionMasteryQuery,
   useClassTargetMasteryQuery,
} from '../../__generated__/types';
import { LIST_TARGETS_BY_COURSE } from '../../hooks/ListTargetsByCourse';
import SelectedLTStudentViewTable from './SelectedLTStudentViewTable';
import { Mastery } from '../../Screens/ClassMastery/StudentMasteryRow';

function LTStudentViewTable() {
   const { data: missionMasteryData } = useClassMissionMasteryQuery();

   const [selectedLT, setSlectedLT] = useState<string | null>(null);
   const [targetMasteryDatas, setTargetMasteryDatas] = useState<any[]>([]);
   const [fetchOnce, setFetchOnce] = useState<boolean>(false);

   const handleLTSelection = (
      event: React.MouseEvent<HTMLElement>,
      newSelectedLT: string | null
   ) => {
      setSlectedLT(newSelectedLT);
   };

   const history = useHistory();

   const { data: courseTargets } = useQuery(LIST_TARGETS_BY_COURSE);

   React.useEffect(() => {
      if (!courseTargets || fetchOnce) {
         return;
      }
      setFetchOnce(true);
      const token = localStorage.getItem('jwt');

      for (const target of courseTargets.targets) {
         fetch('https://18wi8h43il.execute-api.us-east-1.amazonaws.com/dev-flipted/graphql', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json',
               authorization: token ? `${token}` : '',
            },
            body: JSON.stringify({
               query:
                  'query ClassTargetMastery($targetId: String!) {\n  classTargetMastery(targetId: $targetId) {\n    target {\n      ...CTMTargetField\n      __typename\n    }\n    studentObjectiveMasteryList {\n      ...CTMStudentObjectiveMasteryFields\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CTMTargetField on Target {\n  targetId\n  targetName\n  objectives {\n    ...CTMObjectiveField\n    __typename\n  }\n  __typename\n}\n\nfragment CTMObjectiveField on Objective {\n  objectiveId\n  objectiveName\n  __typename\n}\n\nfragment CTMStudentObjectiveMasteryFields on StudentObjectiveMastery {\n  student {\n    studentId\n    email\n    __typename\n  }\n  objectiveMasteryList {\n    ...CTMObjectiveMasteryFields\n    __typename\n  }\n  __typename\n}\n\nfragment CTMObjectiveMasteryFields on ObjectiveMastery {\n  objectiveId\n  mastery\n  __typename\n}\n',
               variables: { targetId: target.targetId },
            }),
         })
            .then((r) => r.json())
            .then((data) => {
               // eslint-disable-next-line @typescript-eslint/no-unsafe-return
               setTargetMasteryDatas((cur: any[]) => [...cur, data]);
            });
      }
   }, [courseTargets, targetMasteryDatas, fetchOnce]);

   if (!courseTargets || targetMasteryDatas.length < courseTargets.targets.length) {
      return <div />;
   }
   if (targetMasteryDatas.length === courseTargets.targets.length) {
      console.log('Target Mastery Datas: ', targetMasteryDatas);
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
               name: `${studentMissionMastery.student.lastName} ${studentMissionMastery.student.firstName}`,
               team: studentMissionMastery.student.team,
               recent: studentMissionMastery.currentTaskName,
               average: '',
            },
         })
   );

   // TODO remove when names are populated
   data.forEach((dataEntry) => {
      if (dataEntry.row.name.indexOf('null') !== -1) {
         dataEntry.row.name = 'Mary Lee';
      }
      if (dataEntry.row.name.length > 25) {
         dataEntry.row.name = dataEntry.row.name.substring(0, 25);
      }
   });

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
      let index = 0;
      const targetMastery = targetMasteryDatas.find(
         (x) => x.data.classTargetMastery.target.targetId === target.targetId
      );

      data.map((row: any) => {
         let count = 0;
         targetMastery.data.classTargetMastery.studentObjectiveMasteryList[
            index
         ].objectiveMasteryList.map((objectiveMastery: CtmObjectiveMasteryFieldsFragment) => {
            if (objectiveMastery.mastery === 'MASTERED') {
               count += 3;
            } else if (objectiveMastery.mastery === 'NEARLY_MASTERED') {
               count++;
            }
         });
         row.row[target.targetName] = count;
         index++;
      });
      if (!learningTargetSet.has(target.targetName)) {
         learningTargetSet.add(target.targetName);
         learningTargetGroup.columns.push({
            Header: target.description,
            accessor: `row.${target.targetName}`,
            Cell: ({ cell: { value } }: { cell: any }) => (
               <Mastery
                  percentage={
                     value / (targetMastery.data.classTargetMastery.target.objectives.length * 3)
                  }
               />
            ),
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
