import { TaskBlock } from './QuizBlock';

export declare type Task = {
   id: string;
   name: string;
   instructions: string;
   points: number;
   parentMissionId: string;
   parentMissionIndex: number;
   startAt?: Date;
   endAt?: Date;
   dueDate?: Date;
   objectiveId?: string;
   pages: Array<Page>;
   requirements: Array<RubricRequirement>;
};

type Page = {
   blocks: Array<TaskBlock>;
   skippable?: boolean;
};

type RubricRequirement = {
   id: string;
   description: string;
   isComplete: boolean;
};
