import { gql, useQuery } from '@apollo/client';
import { QuizBlockSubmission } from '../interfaces/QuizBlockSubmission';

const LIST_QUIZBLOCK_SUBMISSIONS = gql`
   query ListQuizBlockSubmissions {
      quizblockSubmissions @client {
         id
         student
         points
      }
   }
`;

type QuizBlockSubmissionsData = {
   quizblockSubmissions: QuizBlockSubmission[];
};

function useQuizBlockSubmissions() {
   const { loading, error, data } = useQuery<QuizBlockSubmissionsData>(LIST_QUIZBLOCK_SUBMISSIONS);
   return {
      loading,
      error,
      quizblockSubmissions: data?.quizblockSubmissions,
   };
}

export default useQuizBlockSubmissions;
