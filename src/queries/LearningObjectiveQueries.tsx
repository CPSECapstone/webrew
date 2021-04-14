import { gql } from '@apollo/client';

export const GET_LEARNING_OBJECTIVE = gql`
   query {
      learningObjectives(course: "Math") {
         id
         course
         name
         description
      }
   }
`;

export const ADD_LEARNING_OBJECTIVE = gql`
   mutation {
      addLearningObjective(objective: { course: "", name: "", description: "" })
   }
`;
