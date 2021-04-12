import { gql } from '@apollo/client';

export const SAVE_COURSE = gql`
   mutation AddCourse($course: CourseInput!) {
      addCourse(course: $course) {
         id
         name
      }
   }
`;
