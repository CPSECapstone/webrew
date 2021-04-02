import { gql } from '@apollo/client';


export const GET_QUESTIONS = gql`
    query ListQuizQuestionsByQuizId {
        questions(quizId: "3f1e9fe5b43") {
        id
        quizId
            description
        options {
            id
            description
            }
            answers
        points
        }
    }
`;

export const GET_QUIZ = gql`
   query GetQuizById {
    quiz(quizId: "3f1e9fe5b43") {
      id
      course
        name
      instructions
    }
  }

`;

export const GET_ANSWERS = gql`
    query ListQuizAnswerssByQuizId {
        quizAnswers(quizId: "3f1e9fe5b43") {
        id
        quizId
        choices
        }
    }
`;

