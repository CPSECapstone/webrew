import { LearningObjectives } from '../../interfaces/LearningObjectives';

type ObjectiveSectionProps = {
   objectives: LearningObjectives;
};

function ObjectiveSection({ objectives }: ObjectiveSectionProps) {
   return (
      <div className="objectives">
         {objectives.learningObjectives.map((objective) => (
            <div className="objective" key={objective.id}>
               Learning Objective: {objective.description}
            </div>
         ))}
      </div>
   );
}

export default ObjectiveSection;
