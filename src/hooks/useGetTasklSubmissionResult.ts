import { gql, useQuery } from '@apollo/client';
import { TaskSubmissionResult } from '../__generated__/types';

export const GET_TASK_SUBMISSION_RESULT = gql`
   query RetrieveTaskSubmission($taskId: String!) {
      retrieveTaskSubmission(taskId: $taskId) {
         graded
         pointsAwarded
         pointsPossible
         teacherComment
         questionAndAnswers {
            answer {
               answer
               questionId
               pointsAwarded
            }
            question {
               id
               points
               description
            }
         }
      }
   }
`;

type TaskSubmissionResultData = {
   taskSubmissionResult: TaskSubmissionResult;
};

function useGetTaskSubmissionResult(taskId: string) {
   const { loading, error, data } = useQuery<TaskSubmissionResultData>(GET_TASK_SUBMISSION_RESULT, {
      variables: { taskId },
   });
   return {
      loading,
      error,
      taskSubmissionResult: data?.taskSubmissionResult,
   };
}

export default useGetTaskSubmissionResult;
