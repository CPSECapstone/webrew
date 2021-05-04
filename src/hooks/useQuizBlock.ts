import { gql, useQuery } from '@apollo/client';
import { QuizBlock } from '../interfaces/QuizBlock';

const GET_QUIZBLOCK = gql`
   query GetQuizBlockById {
      quizblock @client {
         id
         title
         blockIndex
         pageIndex
         requiredScore
         points
         questions {
            id
            description
            feedback
            points
            options {
               id
               description
            }
            answers
         }
      }
   }
`;

type QuizBlockData = {
   quizblock: QuizBlock;
};

function useQuizBlock() {
   const { loading, error, data } = useQuery<QuizBlockData>(GET_QUIZBLOCK);
   return {
      loading,
      error,
      quizblock: data?.quizblock,
   };
}

export default useQuizBlock;
