import { ObjectiveFieldsFragment, useObjectivesQuery } from '../../__generated__/types';

function ObjectiveSection() {
   const { data: objectivesQuery } = useObjectivesQuery({
      variables: {
         course: 'Biology',
      },
   });
   if (!objectivesQuery?.objectives) {
      return <>Learning Objectives Undefined</>;
   }

   const { objectives } = objectivesQuery;

   return (
      <div className="objectives">
         {objectives.map((objective: ObjectiveFieldsFragment) => (
            <div className="objective" key={objective.objectiveId}>
               Learning Objective: {objective.description}
            </div>
         ))}
      </div>
   );
}

export default ObjectiveSection;
