import { makeVar } from '@apollo/client';
import { QuizBlockSubmission } from '../interfaces/QuizBlockSubmission';
import {
   FrQuestion,
   ImageBlock,
   McQuestion,
   Page,
   Question,
   QuestionOption,
   QuizBlock,
   RubricRequirement,
   Task,
   TaskBlock,
   TextBlock,
   VideoBlock,
} from '../__generated__/types';

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

const mockTextBlock: TextBlock = {
   title: 'How they disappeared',
   blockId: 'fakeblockidtext',
   pageIndex: 0,
   blockIndex: 0,
   contents: 'They were taken out by a large meteor!',
};

const mockImageBlock: ImageBlock = {
   title: 'Picture of a Velociraptor',
   blockId: 'fakeblockidimage',
   pageIndex: 0,
   blockIndex: 1,
   imageUrl: 'https://google.com/',
};

const mockVideoBlock: VideoBlock = {
   title: 'T-Rex being murked!',
   blockId: 'fakeblockidvideo',
   pageIndex: 1,
   blockIndex: 0,
   videoUrl: 'https://youtube.com',
};

const mockOptionOne: QuestionOption = {
   id: 0,
   description: 'Webrew',
};

const mockOptionTwo: QuestionOption = {
   id: 1,
   description: 'Ambiguous Android',
};

const mockOptionThree: QuestionOption = {
   id: 2,
   description: 'Hydro',
};

const mockOptionFour: QuestionOption = {
   id: 3,
   description: 'All of us!',
};

const mockOptions: QuestionOption[] = [
   mockOptionOne,
   mockOptionTwo,
   mockOptionThree,
   mockOptionFour,
];

const mockAnswers: number[] = [3];

const mockQOne: McQuestion = {
   id: 'fakemcqid',
   description: 'Which team is the best?',
   points: 50,
   options: mockOptions,
   answers: mockAnswers,
};

const mockQTwo: FrQuestion = {
   id: 'fakefrqtwo',
   description: 'Who is the coolest professor ever?',
   points: 50,
   answer: 'Dr. Janzen',
};

const mockQList: Question[] = [mockQOne, mockQTwo];

const mockQuizBlock: QuizBlock = {
   title: 'Final Assessment',
   blockId: 'fakeblockidquiz',
   pageIndex: 1,
   blockIndex: 1,
   requiredScore: 75,
   points: 100,
   questions: mockQList,
};

const mockBlockList: TaskBlock[] = [mockTextBlock, mockImageBlock];

const mockBlockListTwo: TaskBlock[] = [mockVideoBlock, mockQuizBlock];

const mockPageOne: Page = {
   blocks: mockBlockList,
};

const mockPageTwo: Page = {
   blocks: mockBlockListTwo,
};

const mockPageList: Page[] = [mockPageOne, mockPageTwo];

const mockRequirement: RubricRequirement = {
   id: 'fakerubricid',
   description: 'This is a fake requirement!',
   isComplete: false,
};

const mockReqList: RubricRequirement[] = [mockRequirement];

const mockTask: Task = {
   id: 'fd87f78s',
   name: 'Dinosaur Task',
   instructions: 'Complete the intro and quiz to complete the task.',
   points: 100,
   parentMissionId: 'fakemissionid',
   parentMissionIndex: 0,
   pages: mockPageList,
   requirements: mockReqList,
};

export const quizblockSubmissionVar = makeVar<QuizBlockSubmission>(quizblockSubmission);

export const quizblockSubmissionsVar = makeVar<QuizBlockSubmission[]>(quizblockSubmissions);

export const mockTaskVar = makeVar<Task>(mockTask);
