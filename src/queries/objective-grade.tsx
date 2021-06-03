import { gql } from '@apollo/client';

export const EDIT_OBJECTIVE_GRADE = gql`
   mutation editObjectiveGrade($objectiveGradeInput: ObjectiveTaskMasteryInput!) {
      gradeObjectiveTaskMastery(grade: $objectiveGradeInput) {
         taskId
         mastery
      }
   }
`;
