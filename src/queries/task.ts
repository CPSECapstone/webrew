import { gql } from '@apollo/client';

export const GET_QUESTIONS = gql`
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
