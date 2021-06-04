import { gql } from '@apollo/client';

export const EDIT_GRADE = gql`
   mutation editTaskGrade($taskGradeInput: TaskSubmissionGradeInput!) {
      gradeTaskSubmission(grade: $taskGradeInput) {
         taskId
      }
   }
`;

export const EDIT_QUESTION_GRADE = gql`
   mutation editAnswerGrade($answerGradeInput: AnswerGradeInput!) {
      gradeAnswer(grade: $answerGradeInput) {
         questionId
      }
   }
`;
