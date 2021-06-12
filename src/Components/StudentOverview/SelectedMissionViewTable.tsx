/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/destructuring-assignment */
import {
   GetMissionProgressForEnrolledQuery,
   Maybe,
   Student,
   useGetMissionProgressForEnrolledQuery,
} from '../../__generated__/types';
import TableComponent from '../TableComponent/TableComponent';

export interface TaskColumnGroup {
   Header: string;
   columns: {
      Header: string;
      accessor: string;
   }[];
}

export interface MissionStudentViewRow {
   row: {
      name: string;
      studentId: string;
      [task: string]: string;
   };
}

export interface RowTaskData {
   taskName: string;
   taskId: string;
}

export interface RowStudentData {
   firstName?: Maybe<string>;
   studentId: string;
}

/**
 * Create a column, along with row accessors, for each task contained in the mission
 */
export function generateTaskColumnGroup(mission: {
   name: string;
   missionContent: { name: string; id: string }[];
}): TaskColumnGroup {
   // eslint-disable-next-line array-callback-return
   const tasks: { name: string; id: string }[] = mission.missionContent.filter((content) => {
      // TODO: workaround to ignore sub-missions
      if ('name' in content && 'id' in content) {
         // is a task
         return content;
      }
   });

   return {
      Header: `${mission.name} Tasks`,
      columns: tasks.map((content: { name: string; id: string }) => {
         return { Header: content.name, accessor: `row.${content.id}` };
      }),
   };
}

export function generateStudentRows(
   studentProgressQuery: GetMissionProgressForEnrolledQuery,
   students: Partial<Student>[]
): MissionStudentViewRow[] {
   return studentProgressQuery.getAllEnrolledStudentMissionProgress.map((studentProgress) => {
      const student = students.find((s) => {
         return s.studentId === studentProgress.student;
      });

      const displayName =
         student && student.firstName && student.lastName
            ? `${student.firstName} ${student.lastName}`
            : 'NULL STUDENT';

      const base: MissionStudentViewRow = {
         row: {
            name: displayName,
            studentId: studentProgress.student,
         },
      };

      studentProgress.progress.forEach((taskStats) => {
         // Either display the grade or just a blank string
         base.row[`${taskStats.taskId}`] = `${
            taskStats.submission ? taskStats.submission.pointsAwarded : ''
         }`;
      });

      return base;
   });
}

function SelectedMissionViewTable(data: { mission: any; students: any }) {
   const { data: studentProgress } = useGetMissionProgressForEnrolledQuery({
      variables: {
         courseId: 'Integrated Science', // TODO: pass in currently selected course
         missionId: data.mission.id,
      },
   });

   const tableColumns: any = [
      {
         Header: 'Student Information',
         columns: [
            {
               Header: 'Student',
               accessor: 'row.name',
            },
         ],
      },
   ];

   if (!studentProgress) {
      return <div />;
   }

   const taskColumnGroup = generateTaskColumnGroup(data.mission);
   const tableData: MissionStudentViewRow[] = generateStudentRows(studentProgress, data.students);
   tableColumns.push(taskColumnGroup);

   return (
      <div>
         <div className="base-table">
            <TableComponent columns={tableColumns} data={tableData} />
         </div>
      </div>
   );
}

export default SelectedMissionViewTable;
