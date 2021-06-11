import React from 'react';
import { generateTaskColumnGroup, TaskColumnGroup } from './MissionStudentViewTable';

test('Generate Task Column', () => {
   const input: { taskName: string; taskId: string }[] = [
      {
         taskName: 'Task 1',
         taskId: 'TASK#1',
      },
      {
         taskName: 'Task 2',
         taskId: 'TASK#2',
      },
   ];
   const expectedRes: TaskColumnGroup = {
      header: 'Mission 1 Tasks',
      columns: [
         {
            Header: 'Task 1',
            accessor: 'TASK#1',
         },
         {
            Header: 'Task 2',
            accessor: 'TASK#2',
         },
      ],
   };
   expect(generateTaskColumnGroup('Mission 1', input)).toStrictEqual(expectedRes);
});
