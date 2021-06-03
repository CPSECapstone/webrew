import { gql } from '@apollo/client';

export const TASK_OBJECTIVE_PROGRESS = gql`
   query GetTaskObjectiveProgress($taskId: String!, $username: String) {
      getTaskObjectiveProgress(taskId: $taskId, username: $username) {
         task {
            id
            name
         }
         objective {
            objectiveId
            objectiveName
            description
         }
         mastery
      }
   }
`;
