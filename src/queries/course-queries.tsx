import { gql } from '@apollo/client';

export const SAVE_COURSE = gql`
   mutation AddCourse($course: CourseInput!) {
      addCourse(course: $course) {
         id
         name
      }
   }
`;

// export const SAVE_COURSE = gql`
//    query addCourse {

//          "name" : "test
//          "instructor": "test inst"
//          "description": "test desc"
//          "missions": {
//             "name": "testmission"
//             "description": "test desc mission"
//             "tasks": []
//          }

//    }
// `;

// $course: {
//    name: String!
//    description: String!
//    instructor: String!
//    missions: []
// }) {
//    id
// }
