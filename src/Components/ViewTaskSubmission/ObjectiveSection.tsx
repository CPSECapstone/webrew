import { useLearningObjectivesQuery } from '../../__generated__/types';

function ObjectiveSection() {
   const { data: objectivesQuery } = useLearningObjectivesQuery({
      variables: {
         course: 'Biology',
      },
   });
   if (!objectivesQuery?.learningObjectives) {
      return <>Learning Objectives Undefined</>;
   }

   const { learningObjectives } = objectivesQuery;

   return (
      <div className="objectives">
         {learningObjectives.map((objective) => (
            <div className="objective" key={objective.id}>
               Learning Objective: {objective.description}
            </div>
         ))}
      </div>
   );
}

export default ObjectiveSection;
