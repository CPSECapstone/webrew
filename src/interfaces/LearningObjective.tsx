import { Task } from './Task';

export interface LearningObjective {
   tasks: Task[];
   id: string;
   name: string;
   course: string;
   description: string;
}
