import { gql } from '@apollo/client';

export const EDIT_GRADE = gql`
   mutation editTaskGrade($taskGradeInput: TaskSubmissionGradeInput!) {
      gradeTaskSubmission(grade: $taskGradeInput) {
         taskId
      }
   }
`;
