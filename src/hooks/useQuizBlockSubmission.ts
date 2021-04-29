import { gql, useQuery } from '@apollo/client';
import { QuizBlockSubmission } from '../interfaces/QuizBlockSubmission';

const GET_QUIZBLOCK_SUBMISSION = gql`
   query GetQuizBlockSubmission {
      quizblockSubmission @client {
         id
         student
         points
         studentAnswers {
            questionId
            result
            choices
         }
      }
   }
`;

type QuizBlockSubmissionData = {
   quizblockSubmission: QuizBlockSubmission;
};

function useQuizBlockSubmission() {
   const { loading, error, data } = useQuery<QuizBlockSubmissionData>(GET_QUIZBLOCK_SUBMISSION);
   return {
      loading,
      error,
      quizblockSubmission: data?.quizblockSubmission,
   };
}

export default useQuizBlockSubmission;
