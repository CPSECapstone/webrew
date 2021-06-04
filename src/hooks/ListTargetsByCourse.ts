/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { gql } from '@apollo/client';

export const LIST_TARGETS_BY_COURSE = gql`
   query ListTargetsByCourse {
      targets(course: "Integrated Science") {
         targetId
         targetName
         description
         subject
         gradeLevel
         icon
         standards
         course
      }
   }
`;
