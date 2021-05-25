import { gql } from '@apollo/client';

export const GET_MISSIONS = gql`
   query getMissions($id: String!) {
      missions(course: $id) {
         id
         name
         description
      }
   }
`;

export const GET_ALL_MISSION_PROGRESS = gql`
   query getMissionsProgress($id: String!) {
      getAllMissionProgress(courseId: $id) {
         mission {
            id
            name
         }
         progress {
            taskId
            name
            submission {
               graded
            }
         }
         student
      }
   }
`;
