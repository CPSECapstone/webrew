import { makeVar } from '@apollo/client';
import { QuizBlock } from '../interfaces/QuizBlock';
import { QuizBlockSubmission } from '../interfaces/QuizBlockSubmission';

const quizblock: QuizBlock = {
   id: 'quizblock1',
   title: 'Week 1 Quiz',
   blockIndex: 0,
   pageIndex: 1,
   requiredScore: 72,
   points: 100,
   questions: [
      {
         id: 'question0',
         points: 4,
         description: 'During photosynthesis green plants absorb',
         options: [
            { id: 0, description: 'oxygen' },
            { id: 1, description: 'nitrogen' },
            { id: 2, description: 'carbon monoxide' },
            { id: 3, description: 'carbon dioxide' },
         ],
         feedback: 'feeback0',
         answers: [3],
      },
      {
         id: 'question1',
         points: 4,
         description: 'Ginger is a stem and not a root because',
         options: [
            { id: 0, description: 'It lacks chlorophyll' },
            { id: 1, description: 'It stores food material' },
            { id: 2, description: 'It has notes and internodes' },
            { id: 3, description: 'It grows horizontally in the soil' },
         ],
         feedback: 'feeback1',
         answers: [3],
      },
      {
         id: 'question2',
         points: 4,
         description: '__produces CO2 and water',
         options: [
            { id: 0, description: 'Pollination' },
            { id: 1, description: 'Reduction' },
            { id: 2, description: 'A combustion reaction' },
         ],
         feedback: 'feeback2',
         answers: [2],
      },
   ],
};

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

export const quizblockVar = makeVar<QuizBlock>(quizblock);

export const quizblockSubmissionVar = makeVar<QuizBlockSubmission>(quizblockSubmission);

export const quizblockSubmissionsVar = makeVar<QuizBlockSubmission[]>(quizblockSubmissions);
