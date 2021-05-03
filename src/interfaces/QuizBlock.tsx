export interface TaskBlock {
   title: string;
   blockId: string;
   blockIndex: number;
   pageIndex: number;
}

export interface Option {
   id: number;
   description: string;
}

export interface Question {
   id: string;
   description: string;
   feedback: string;
   points: number;
   answers: number[];
   options: Option[];
}

export interface QuizBlock {
   id: string;
   title: string;
   blockIndex: number;
   pageIndex: number;
   requiredScore: number;
   points: number;
   questions: Question[];
}

export interface QuizBlockData {
   quizblock: QuizBlock;
}
