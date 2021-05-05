import { gql, useQuery } from '@apollo/client';
import { Task } from '../__generated__/types';

export const GET_TASK_INFORMATION = gql`
   query GetTaskById($taskId: String!) {
      task(taskId: $taskId) {
         id
         requirements {
            id
            description
         }
         name
         course
         instructions
         points
         startAt
         endAt
         dueDate
         missionId
         missionIndex
         subMissionId
         objectiveId
         targetId
         pages {
            skippable
            blocks {
               title
               __typename
               ... on ImageBlock {
                  imageUrl
               }
               ... on TextBlock {
                  contents
                  fontSize
               }
               ... on VideoBlock {
                  videoUrl
               }
               ... on QuizBlock {
                  requiredScore
                  questions {
                     __typename
                     ... on FrQuestion {
                        id
                        description
                        answer
                     }
                     ... on McQuestion {
                        id
                        description
                        options {
                           id
                           description
                        }
                        answers
                     }
                  }
               }
            }
         }
      }
   }
`;

type TaskData = {
   task: Task;
};

function useGetTaskById(taskId: string) {
   const { loading, error, data } = useQuery<TaskData>(GET_TASK_INFORMATION, {
      variables: { taskId },
   });
   return {
      loading,
      error,
      task: data?.task,
   };
}

export default useGetTaskById;
