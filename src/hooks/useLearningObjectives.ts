import { gql, useQuery } from '@apollo/client';
import { LearningObjective } from '../interfaces/LearningObjective';

const GET_LEARNING_OBJECTIVE = gql`
   query {
      learningObjectives(course: "Math") {
         id
         course
         name
         description
      }
   }
`;

type LearningObjectivesData = {
   learningObjectives: LearningObjective[];
};

function useLearningObjectives() {
   const { loading, error, data } = useQuery<LearningObjectivesData>(GET_LEARNING_OBJECTIVE);
   console.dir(data);
   return {
      loading,
      error,
      learningObjectives: data?.learningObjectives,
   };
}

export default useLearningObjectives;
