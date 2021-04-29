export declare type Task = {
   id: string;
   name: string;
   instructions: string;
   points: number;
   parentMissionId: string;
   parentMissionIndex: number;
   startAt: Date;
   endAt: Date;
   dueDate: Date;
   objectiveId: string;
   pages: Page[];
   requirements: RubricRequirement[];
};

export interface Page {
   blocks: TaskBlock[];
   skippable: boolean;
}

export interface TaskBlock {
   title: string;
}

export interface TextBlock extends TaskBlock {
   title: string;
   contents: string;
   fontSize: number;
}

export interface ImageBlock extends TaskBlock {
   title: string;
   imageUrl: string;
}

export interface VideoBlock extends TaskBlock {
   title: string;
   videoUrl: string;
}

export interface QuizBlock extends TaskBlock {
   title: string;
   blockId: string;
   requiredScore: number;
   points: number;
   questions: Question[];
}

export interface RubricRequirement {
   id: string;
   description: string;
   isComplete: boolean;
}

export interface TaskSubmissionResult {
   graded: boolean;
   pointsAwarded: number;
   pointsPossible: number;
   questionAndAnswers: QuestionAndAnswer[];
   teacherComment: string;
}

export interface QuestionAndAnswer {
   question: Question;
   answer: Answer;
}

export interface Question {
   id: string;
   description: string;
   points: number;
}

export interface FRQuestion {
   id: string;
   description: string;
   points: number;
   answer: string;
}

export interface MCQuestion {
   id: string;
   description: string;
   points: number;
   options: QuestionOption[];
   answers: number[];
}

export interface QuestionOption {
   id: number;
   description: string;
}

export interface Answer {
   questionId: string;
   pointsAwarded: number;
   answer: string;
}
