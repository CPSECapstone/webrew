import { StudentAnswer } from './StudentAnswer';

export interface Submisison {
   id: string;
   student: string;
   points: number;
   studentAnswers: StudentAnswer[];
}
