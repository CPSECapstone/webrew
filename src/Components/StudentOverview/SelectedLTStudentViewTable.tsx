/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TableComponent from '../TableComponent/TableComponent';
import {
   CmStudentFieldsFragment,
   CtmObjectiveMasteryFieldsFragment,
   CtmStudentObjectiveMasteryFieldsFragment,
   Objective,
   useClassTargetMasteryQuery,
} from '../../__generated__/types';

function SelectedLTStudentViewTable(classMissionMastery: any, selectedLTId: string | null) {
   const { data: targetMasteryData } = useClassTargetMasteryQuery({
      variables: {
         targetId: classMissionMastery.selectedLTId,
      },
   });

   if (!targetMasteryData) {
      return <div />;
   }

   // const history = useHistory();

   // const rowClicked = (userName: string) => {
   //    history.push({
   //       pathname: '/singleStudentMasteryOverview',
   //       state: { id: '', firstName: userName, lastName: ' ' },
   //    });
   // };

   const data: any[] = [];
   classMissionMastery?.classMissionMastery?.studentMissionMasteryList.map(
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

   // // TODO remove when names are populated
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
            {
               Header: 'Progress',
               accessor: 'row.progress',
            },
         ],
      },
   ];

   const objectiveGorup: any = {
      Header: 'Objectives',
      columns: [],
   };

   // Set handles the case of two objectives with the same name
   const objectiveSet = new Set();

   targetMasteryData.classTargetMastery.target.objectives.map((objective: any) => {
      if (!objectiveSet.has(objective.objectiveId)) {
         objectiveSet.add(objective.objectiveId);
         objectiveGorup.columns.push({
            Header: objective.objectiveName,
            accessor: `row.${objective.objectiveId}`,
            Cell: ({ value }: { value: any }) => {
               return <>{value.status} </>;
            },
         });
      }
   });
   tableColumns.push(objectiveGorup);

   // TODO This makes two massive assumptions:
   // One that classMissionMastery and classTargetMastery are in the exact same student order
   // Two a student either has entries for objective progress on all 5 objectives or none
   let index = 0;

   const colorMap = new Map();
   colorMap.set('NOT_MASTERED', 'rgb(234, 153, 153)');
   colorMap.set('MASTERED', 'rgb(182, 215, 168)');
   colorMap.set('NOT_GRADED', 'rgb(191, 191, 191)');
   colorMap.set('NEARLY_MASTERED', 'rgb(230, 230, 0)');
   targetMasteryData.classTargetMastery.studentObjectiveMasteryList.map(
      (studentObjectiveMastery: CtmStudentObjectiveMasteryFieldsFragment) => {
         if (studentObjectiveMastery.objectiveMasteryList.length === 0) {
            objectiveSet.forEach((objectiveId: any) => {
               data[index].row[objectiveId] = '';
            });
         } else {
            studentObjectiveMastery.objectiveMasteryList.map(
               (objectiveMastery: CtmObjectiveMasteryFieldsFragment) => {
                  data[index].row[objectiveMastery.objectiveId] = {
                     status: objectiveMastery.mastery,
                     style: {
                        backgroundColor: colorMap.get(objectiveMastery.mastery),
                     },
                  };
               }
            );
         }
         index++;
      }
   );

   return (
      <div>
         <div className="base-table">
            <TableComponent columns={tableColumns} data={data} />
         </div>
      </div>
   );
}

export default SelectedLTStudentViewTable;
