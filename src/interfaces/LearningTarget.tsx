import { Objective } from '../__generated__/types';

export interface LearningTarget {
   id: string;
   name: string;
   type: string;
   course: string;
   objectives: Objective[];
}
