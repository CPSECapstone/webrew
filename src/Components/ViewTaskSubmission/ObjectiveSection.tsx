import { LearningObjective } from '../../interfaces/LearningObjective';

type Props = {
   objectives: LearningObjective[];
};

const ObjectiveSection = ({ objectives }: Props) => {
   return (
      <div className="objectives">
         {objectives.map((objective) => (
            <div className="objective" key={objective.id}>
               Learning Objective: {objective.description}
            </div>
         ))}
      </div>
   );
};

export default ObjectiveSection;
