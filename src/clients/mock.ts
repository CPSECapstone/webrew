import { makeVar } from '@apollo/client';
import { QuizBlockSubmission } from '../interfaces/QuizBlockSubmission';
import {
   Answer,
   FrQuestion,
   ImageBlock,
   McQuestion,
   Page,
   Question,
   QuestionAndAnswer,
   QuestionOption,
   QuizBlock,
   RubricRequirement,
   Task,
   TaskBlock,
   TaskSubmissionResult,
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

export const mockTask: Task = {
   id: 'fd87f78s',
   name: 'Dinosaur Task',
   instructions: 'Complete the intro and quiz to complete the task.',
   points: 100,
   missionId: 'fakemissionid',
   missionIndex: 0,
   course: 'Biology',
   pages: mockPageList,
   requirements: mockReqList,
};

const ansone: Answer = {
   questionId: 'fakemcqid',
   pointsAwarded: 50,
   answer: 'All of us!',
};

const anstwo: Answer = {
   questionId: 'fakefrqid',
   pointsAwarded: 50,
   answer: 'Dr. Janzen',
};

const qandaone: QuestionAndAnswer = {
   question: mockQOne,
   answer: ansone,
};

const qandatwo: QuestionAndAnswer = {
   question: mockQTwo,
   answer: anstwo,
};

const mockQandAList: QuestionAndAnswer[] = [qandaone, qandatwo];

export const mockTaskSubmissionResult: TaskSubmissionResult = {
   graded: true,
   pointsAwarded: 100,
   pointsPossible: 100,
   questionAndAnswers: mockQandAList,
   teacherComment: 'Great Job!!',
};

export const quizblockSubmissionVar = makeVar<QuizBlockSubmission>(quizblockSubmission);

export const quizblockSubmissionsVar = makeVar<QuizBlockSubmission[]>(quizblockSubmissions);

export const mockTaskVar = makeVar<Task>(mockTask);

export const MOCK_LOBJ_NAMES = ['Objective 1', 'Objective 2'];

export const MOCK_LOBJ_MASTERY = [
   {
      name: 'Ryan Fay',
      learningObjectives: [
         {
            objectiveName: 'Objective 1',
            percentage: 1,
         },
         {
            objectiveName: 'Objective 2',
            percentage: 0.9,
         },
      ],
   },
   {
      name: 'Robert Middleton',
      learningObjectives: [
         {
            objectiveName: 'Objective 1',
            percentage: 0.6,
         },
         {
            objectiveName: 'Objective 2',
            percentage: 0.7,
         },
      ],
   },
   {
      name: 'Darian Nguyen',
      learningObjectives: [
         {
            objectiveName: 'Objective 1',
            percentage: 0.24,
         },
         {
            objectiveName: 'Objective 2',
            percentage: 0.14,
         },
      ],
   },
];
