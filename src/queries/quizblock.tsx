import { gql } from '@apollo/client';

export const GET_QUIZBLOCK = gql`
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
