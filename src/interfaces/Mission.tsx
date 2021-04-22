import { MissionSubMission } from './MissionSubMission';

export interface Mission {
   id: string;
   name: string;
   description: string;
   subMissions: MissionSubMission[];
}
