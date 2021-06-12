import { GetMissionProgressForEnrolledQuery } from '../../__generated__/types';
import {
   generateStudentRows,
   generateTaskColumnGroup,
   MissionStudentViewRow,
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
         lastName: 'Soozington',
         studentId: 'STUDENT#SUZY',
      },
      {
         studentId: 'STUDENT#BOB',
      },
   ];

   const studentProgressQuery: GetMissionProgressForEnrolledQuery = {
      __typename: 'Query',
      getAllEnrolledStudentMissionProgress: [
         {
            __typename: 'MissionProgress',
            student: 'STUDENT#SUZY',
            progress: [
               {
                  __typename: 'TaskStats',
                  taskId: 'TASK#1',
                  name: 'Task 1',
                  submission: {
                     __typename: 'TaskSubmissionResult',
                     pointsAwarded: 6,
                     pointsPossible: 10,
                     graded: true,
                  },
               },
               {
                  __typename: 'TaskStats',
                  taskId: 'TASK#2',
                  name: 'Task 2',
                  submission: {
                     __typename: 'TaskSubmissionResult',
                     pointsAwarded: 24,
                     pointsPossible: 25,
                     graded: false,
                  },
               },
            ],
         },

         {
            __typename: 'MissionProgress',
            student: 'STUDENT#BOB',
            progress: [
               {
                  __typename: 'TaskStats',
                  taskId: 'TASK#1',
                  name: 'Task 1',
                  submission: {
                     __typename: 'TaskSubmissionResult',
                     pointsAwarded: 2,
                     pointsPossible: 10,
                     graded: false,
                  },
               },
               {
                  __typename: 'TaskStats',
                  taskId: 'TASK#2',
                  name: 'Task 2',
                  submission: {
                     __typename: 'TaskSubmissionResult',
                     pointsAwarded: 11,
                     pointsPossible: 25,
                     graded: true,
                  },
               },
            ],
         },
      ],
   };

   const expectedRes: MissionStudentViewRow[] = [
      {
         row: {
            name: 'Suzy Soozington',
            studentId: 'STUDENT#SUZY',
            'TASK#1': '6',
            'TASK#2': '24',
         },
      },
      {
         row: {
            name: 'NULL STUDENT',
            studentId: 'STUDENT#BOB',
            'TASK#1': '2',
            'TASK#2': '11',
         },
      },
   ];
   expect(generateStudentRows(studentProgressQuery, students)).toStrictEqual(expectedRes);
});
