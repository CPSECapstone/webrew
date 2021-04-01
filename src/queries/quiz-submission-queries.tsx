import { gql } from '@apollo/client';

export const LIST_QUIZ_SUBMISSIONS = gql`
   query ListQuizSubmissionsByQuizId {
      quizSubmissions(quizId: "3f1e9fe5b43") {
      id
      student
      points
      }
   }
`;


export const GET_QUIZ_SUBMISSION = gql`
   query GetQuizSubmissionById {
      quizSubmission(id: "a9c8e50acae") {
      id
      student
      points
      }
   }
`;

export const SUBMIT_QUIZ = gql`
   mutation {
      submitQuiz(submission: {
         student: "Robb Stark"
      quiz: "8989d1faaef"
      choices: []
      }) {
         student
         quiz {
            name
            totalPoints
         }
         points
      }
   }
`;









