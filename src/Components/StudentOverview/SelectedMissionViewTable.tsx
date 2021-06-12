/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
   GetMissionProgressForEnrolledQuery,
   GetMissionProgressForEnrolledQueryResult,
   Maybe,
   Mission,
   MissionContent,
   MissionProgress,
   QueryGetAllEnrolledStudentMissionProgressArgs,
   TaskStats,
   useGetMissionProgressForEnrolledQuery,
   useGetStudentsByCourseQuery,
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
export function generateTaskColumnGroup(mission: any): TaskColumnGroup {
   // eslint-disable-next-line array-callback-return
   const tasks: { name: string; id: string }[] = mission.missionContent.filter((content: any) => {
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
   studentProgressQuery: GetMissionProgressForEnrolledQuery
): MissionStudentViewRow[] {
   return studentProgressQuery.getAllEnrolledStudentMissionProgress.map((studentProgress) => {
      const base: MissionStudentViewRow = {
         row: {
            name: studentProgress.student,
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

const mockTasks = [
   {
      taskName: 'Task 1',
      taskId: 'TASK#1',
   },
   {
      taskName: 'Task 2',
      taskId: 'TASK#2',
   },
];

function SelectedMissionViewTable(missionWrapper: any) {
   console.log(missionWrapper);

   const { data: studentProgress } = useGetMissionProgressForEnrolledQuery({
      variables: {
         courseId: 'Integrated Science', // TODO: pass in currently selected course
         missionId: missionWrapper.mission.id,
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

   const taskColumnGroup = generateTaskColumnGroup(missionWrapper.mission);
   const tableData: MissionStudentViewRow[] = generateStudentRows(studentProgress);
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
