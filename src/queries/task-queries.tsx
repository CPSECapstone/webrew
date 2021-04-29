import { gql } from '@apollo/client';

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

export const GET_TASK_INFORMATION = gql`
   query GetTaskById($taskId: String!) {
      task(taskId: $taskId) {
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
