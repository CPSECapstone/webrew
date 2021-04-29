import { gql } from '@apollo/client';

export const GET_QUIZBLOCK_SUBMISSION = gql`
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

export const LIST_QUIZBLOCK_SUBMISSIONS = gql`
   query ListQuizBlockSubmissions {
      quizblockSubmissions @client {
         id
         student
         points
      }
   }
`;
