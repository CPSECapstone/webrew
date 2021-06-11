/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Maybe, useGetStudentsByCourseQuery } from '../../__generated__/types';
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
export function generateTaskColumnGroup(
   missionName: string,
   tasks: RowTaskData[]
): TaskColumnGroup {
   return {
      Header: `${missionName} Tasks`,
      columns: tasks.map((taskInfo) => {
         return { Header: taskInfo.taskName, accessor: `row.${taskInfo.taskId}` };
      }),
   };
}

export function generateStudentRows(
   students: RowStudentData[],
   tasks: RowTaskData[]
): MissionStudentViewRow[] {
   return students.map((student) => {
      const base: MissionStudentViewRow = {
         row: {
            name: student.firstName ? student.firstName : student.studentId,
            studentId: student.studentId,
         },
      };

      tasks.forEach((task) => {
         base.row[`${task.taskId}`] = '22'; // TODO pass in grades
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

interface SelectedMissionData {
   selectedMissionID: string;
}

function SelectedMissionViewTable(selectedMissionData: SelectedMissionData) {
   console.log(selectedMissionData);
   const { data: students } = useGetStudentsByCourseQuery();

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

   if (!students) {
      return <div />;
   }

   const taskColumnGroup = generateTaskColumnGroup(
      selectedMissionData.selectedMissionID,
      mockTasks
   );
   const tableData: MissionStudentViewRow[] = generateStudentRows(students.students, mockTasks);
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
