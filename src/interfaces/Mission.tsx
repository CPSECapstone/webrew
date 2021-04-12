import { Task } from './Task';

export interface Mission {
   id: string;
   name: string;
   description: string;
   tasks: Task[];
}
