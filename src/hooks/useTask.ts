import { gql, useQuery } from '@apollo/client';
import { Task } from '../interfaces/Task';

const GET_TASK_BY_ID = gql`
   query GetTaskById {
      task(taskId: "90e0c730e56") {
         id
         requirements {
            id
            description
         }
         name
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
                     ... on FRQuestion {
                        id
                        description
                        answer
                     }
                     ... on MCQuestion {
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

function useTask() {
   const { loading, error, data } = useQuery<TaskData>(GET_TASK_BY_ID);
   return {
      loading,
      error,
      task: data?.task,
   };
}

export default useTask;
