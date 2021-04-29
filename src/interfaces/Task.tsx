export interface Task {
   id: string;
   name: string;
   description: string;
   link: string;
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
