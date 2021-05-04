import { makeVar } from '@apollo/client';
import { QuizBlockSubmission } from '../interfaces/QuizBlockSubmission';

const quizblockSubmissions: QuizBlockSubmission[] = [
   {
      id: 'a9c8e50acae',
      student: 'Tyrion Lannister',
      points: 100,
      studentAnswers: [],
   },
   {
      id: 'a9c8e50aca1',
      student: 'Gregor Clegane',
      points: 100,
      studentAnswers: [],
   },
   {
      id: 'a9c8e50aca2',
      student: 'Lancel Lannister ',
      points: 100,
      studentAnswers: [],
   },
];

const quizblockSubmission: QuizBlockSubmission = {
   id: 'submission1',
   student: 'Tyrion Lannister',
   points: 100,
   studentAnswers: [
      {
         questionId: 'question0',
         result: true,
         choices: [1],
      },
      {
         questionId: 'question1',
         result: false,
         choices: [2],
      },
      {
         questionId: 'question2',
         result: true,
         choices: [2],
      },
   ],
};

export const quizblockSubmissionVar = makeVar<QuizBlockSubmission>(quizblockSubmission);

export const quizblockSubmissionsVar = makeVar<QuizBlockSubmission[]>(quizblockSubmissions);
