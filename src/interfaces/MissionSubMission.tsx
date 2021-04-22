import { Task } from './Task';

export interface MissionSubMission {
   id: string;
   name: string;
   description: string;
   tasks: Task[];
}
