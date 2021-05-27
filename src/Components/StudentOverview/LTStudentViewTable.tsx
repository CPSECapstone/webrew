/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import TableComponent from '../TableComponent/TableComponent';
import {
   CmStudentFieldsFragment,
   Target,
   useClassMissionMasteryQuery,
   useClassTargetMasteryQuery,
   useGetCoursesQuery,
   useProgressOverviewQuery,
   UserProgress,
} from '../../__generated__/types';
import { LIST_TARGETS_BY_COURSE } from '../../hooks/ListTargetsByCourse';

function LTStudentViewTable() {
   const { data: progressData } = useProgressOverviewQuery({
      variables: {
         course: 'Integrated Science',
      },
   });

   const { data: missionMasteryData } = useClassMissionMasteryQuery();

   const { data: targetMasteryData } = useClassTargetMasteryQuery();

   const { data: courseTargets } = useQuery(LIST_TARGETS_BY_COURSE);
   console.log(missionMasteryData);
   console.log(targetMasteryData);
   console.log(courseTargets);

   const history = useHistory();

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
               progress: `${(studentMissionMastery.progress * 100).toFixed(1)}%`,
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
               // Cell: ({ value }: { value: any }) => {

               //    return <>{value.status} </>;
               // },
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

   const learningTargetSet = new Set();

   if (courseTargets !== undefined) {
      courseTargets.targets.map((target: Target) => {
         data.map((row: any) => {
            row.row[target.targetName] = '';
         });
         if (!learningTargetSet.has(target.targetName)) {
            learningTargetSet.add(target.targetName);
            learningTargetGroup.columns.push({
               Header: target.targetName,
               accessor: `row.${target.targetName}`,
            });
         }
      });
      tableColumns.push(learningTargetGroup);
   }

   return (
      <div className="base-table">
         <TableComponent columns={tableColumns} data={data} rowClickFunction={rowClicked} />
      </div>
   );
}

export default LTStudentViewTable;
