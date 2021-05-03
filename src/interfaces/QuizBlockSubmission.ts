export interface StudentAnswer {
   questionId: string;
   result: boolean;
   choices: number[];
}

export interface QuizBlockSubmission {
   id: string;
   student: string;
   points: number;
   studentAnswers: StudentAnswer[];
}
