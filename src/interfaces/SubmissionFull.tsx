import { Question } from './Question';
import { Submisison } from './Submission';

export interface SubmissionFull {
   quizSubmission: {
      submission: Submisison;
      questions: Question[];
      quiz: {
         name: string;
         instructions: string;
      };
   };
}
