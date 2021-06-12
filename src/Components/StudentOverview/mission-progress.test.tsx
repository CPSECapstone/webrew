import { Student } from '../../__generated__/types';
import {
   generateStudentRows,
   generateTaskColumnGroup,
   MissionStudentViewRow,
   RowTaskData,
   TaskColumnGroup,
} from './SelectedMissionViewTable';

test('Generate Task Column', () => {
   const input = {
      name: 'Mission 1',
      missionContent: [
         {
            name: 'Task 1',
            id: 'TASK#1',
         },
         {
            name: 'Task 2',
            id: 'TASK#2',
         },
      ],
   };

   const expectedRes: TaskColumnGroup = {
      Header: 'Mission 1 Tasks',
      columns: [
         {
            Header: 'Task 1',
            accessor: 'row.TASK#1',
         },
         {
            Header: 'Task 2',
            accessor: 'row.TASK#2',
         },
      ],
   };
   expect(generateTaskColumnGroup(input)).toStrictEqual(expectedRes);
});

test('Generate Mission Progress Chart Data', () => {
   const students = [
      {
         firstName: 'Suzy',
         studentId: 'STUDENT#SUZY',
      },
      {
         studentId: 'STUDENT#BOB',
      },
   ];

   const taskData: RowTaskData[] = [
      {
         taskName: 'Task 1',
         taskId: 'TASK#1',
      },
      {
         taskName: 'Task 2',
         taskId: 'TASK#2',
      },
   ];

   const expectedRes: MissionStudentViewRow[] = [
      {
         row: {
            name: 'Suzy',
            studentId: 'STUDENT#SUZY',
            'TASK#1': '22',
            'TASK#2': '22',
         },
      },
      {
         row: {
            name: 'STUDENT#BOB',
            studentId: 'STUDENT#BOB',
            'TASK#1': '22',
            'TASK#2': '22',
         },
      },
   ];
   expect(generateStudentRows(students, taskData)).toStrictEqual(expectedRes);
});