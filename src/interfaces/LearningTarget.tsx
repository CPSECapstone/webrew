import { LearningObjective } from './LearningObjective';

export interface LearningTarget {
   id: string;
   name: string;
   type: string;
   course: string;
   objectives: LearningObjective[];
}
