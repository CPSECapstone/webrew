import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Answer = {
  questionId?: Maybe<Scalars['String']>;
  pointsAwarded?: Maybe<Scalars['Int']>;
  /** Either the id of the chosen answer id or the provided free response */
  answer?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Course = {
  id: Scalars['String'];
  name: Scalars['String'];
  instructor: Scalars['String'];
  description: Scalars['String'];
  missions?: Maybe<Array<Maybe<Mission>>>;
};

export type CourseInput = {
  name: Scalars['String'];
  instructor: Scalars['String'];
  description: Scalars['String'];
};


export type FrQuestion = Question & {
  id: Scalars['String'];
  description: Scalars['String'];
  points: Scalars['Int'];
  answer: Scalars['String'];
  feedback?: Maybe<Scalars['String']>;
};

export type FrQuestionInput = {
  description: Scalars['String'];
  points: Scalars['Int'];
  answer: Scalars['String'];
};

/** Represents a students answer to a free response question */
export type FreeResponseAnswerInput = {
  /** The id of the task the question block is contained in */
  taskId: Scalars['String'];
  /** the id of the quiz block the question is contained in */
  questionBlockId: Scalars['String'];
  /** The id of the question block the student is answering */
  questionId: Scalars['String'];
  /** The string response provided by the student */
  answer: Scalars['String'];
};

export type ImageBlock = TaskBlock & {
  title?: Maybe<Scalars['String']>;
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  imageUrl: Scalars['String'];
};

export type ImageBlockInput = {
  taskId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  pageIndex: Scalars['Int'];
  blockIndex: Scalars['Int'];
  imageUrl: Scalars['String'];
};

export type LearningObjective = {
  id: Scalars['String'];
  name: Scalars['String'];
  course: Scalars['String'];
  description: Scalars['String'];
  tasks: Array<Task>;
};

export type LearningObjectiveInput = {
  name: Scalars['String'];
  course: Scalars['String'];
  description: Scalars['String'];
};

export type McQuestion = Question & {
  id: Scalars['String'];
  description: Scalars['String'];
  points: Scalars['Int'];
  options: Array<QuestionOption>;
  answers: Array<Scalars['Int']>;
  feedback?: Maybe<Scalars['String']>;
};

export type McQuestionInput = {
  description: Scalars['String'];
  points: Scalars['Int'];
  options: Array<Scalars['String']>;
  answers: Array<Scalars['Int']>;
};

export type Mission = {
  id: Scalars['String'];
  course: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  missionContent?: Maybe<Array<Maybe<MissionContent>>>;
};

export type MissionContent = Task | SubMission;

export type MissionInput = {
  course: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

/** Represents a students answer to a multiple choice question */
export type MultipleChoiceAnswerInput = {
  /** The id of the task the quiz block is contained in */
  taskId: Scalars['String'];
  /** the id of the quiz block the question is contained in */
  questionBlockId: Scalars['String'];
  /** The id of the question the student is answering */
  questionId: Scalars['String'];
  /** The id of the question option chosen by the student */
  answerId: Scalars['Int'];
};

export type Mutation = {
  updateUser?: Maybe<UpdateUserOutput>;
  addMission?: Maybe<Scalars['String']>;
  addSubMission?: Maybe<Scalars['String']>;
  addCourse?: Maybe<Course>;
  addTask?: Maybe<Scalars['String']>;
  addFrQuestion: Scalars['String'];
  addMcQuestion: Scalars['String'];
  /**
   * Should be called when a student has completed all rubric requirements and answered
   * all questions in the task. If the above requirements are not satisfied, this will return
   * an error. Tells the system that the task is ready for grading.
   *
   * Even on a successful submission, many fields may be null
   * as a Task may require manual grading by an instructor.
   */
  submitTask?: Maybe<TaskSubmissionResult>;
  /**
   * Saves completed rubric requirements linked to this task for the user
   * calling this function
   */
  submitTaskProgress?: Maybe<Scalars['String']>;
  /** Saves a students answer to a multiple choice question quiz block */
  saveMultipleChoiceProgress?: Maybe<Scalars['Boolean']>;
  /** Saves and a students answer to a free response question quiz block */
  saveFreeResponseProgress?: Maybe<Scalars['Boolean']>;
  addTextBlock: Scalars['String'];
  addImageBlock: Scalars['String'];
  addVideoBlock: Scalars['String'];
  addQuizBlock: Scalars['String'];
  addLearningObjective: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  updateUserInput?: Maybe<UpdateUserInput>;
};


export type MutationAddMissionArgs = {
  mission?: Maybe<MissionInput>;
};


export type MutationAddSubMissionArgs = {
  subMission?: Maybe<SubMissionInput>;
};


export type MutationAddCourseArgs = {
  course?: Maybe<CourseInput>;
};


export type MutationAddTaskArgs = {
  task?: Maybe<TaskInput>;
};


export type MutationAddFrQuestionArgs = {
  question: FrQuestionInput;
};


export type MutationAddMcQuestionArgs = {
  question: McQuestionInput;
};


export type MutationSubmitTaskArgs = {
  taskId?: Maybe<Scalars['String']>;
};


export type MutationSubmitTaskProgressArgs = {
  taskProgress?: Maybe<TaskProgressInput>;
};


export type MutationSaveMultipleChoiceProgressArgs = {
  mcBlockInput?: Maybe<MultipleChoiceAnswerInput>;
};


export type MutationSaveFreeResponseProgressArgs = {
  frBlockInput?: Maybe<FreeResponseAnswerInput>;
};


export type MutationAddTextBlockArgs = {
  textblock: TextBlockInput;
};


export type MutationAddImageBlockArgs = {
  imageblock: ImageBlockInput;
};


export type MutationAddVideoBlockArgs = {
  videoblock: VideoBlockInput;
};


export type MutationAddQuizBlockArgs = {
  quizblock: QuizBlockInput;
};


export type MutationAddLearningObjectiveArgs = {
  objective: LearningObjectiveInput;
};

export type Page = {
  blocks: Array<TaskBlock>;
  skippable?: Maybe<Scalars['Boolean']>;
};

export type PageInput = {
  skippable?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  getUser?: Maybe<User>;
  mission?: Maybe<Mission>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  subMission?: Maybe<SubMission>;
  _empty?: Maybe<Scalars['String']>;
  courses?: Maybe<Array<Maybe<Course>>>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
  questions: Array<Question>;
  /**
   * Returns an existing task submission or errors if it does not exist.
   * May be useful as a TaskSubmissionResult can change as a result of instructor actions.
   */
  retrieveTaskSubmission?: Maybe<TaskSubmissionResult>;
  /** Returns student's progress on the rubric requirements for the task if it exists. */
  retrieveTaskProgress?: Maybe<TaskProgress>;
  /** Returns student's task progress on the rubric requirements if it exists. */
  retrieveQuestionProgress: QuestionProgress;
  quizblock: QuizBlock;
  learningObjectives: Array<LearningObjective>;
};


export type QueryMissionArgs = {
  missionId?: Maybe<Scalars['String']>;
};


export type QueryMissionsArgs = {
  course?: Maybe<Scalars['String']>;
};


export type QuerySubMissionArgs = {
  subMissionId?: Maybe<Scalars['String']>;
};


export type QueryTaskArgs = {
  taskId?: Maybe<Scalars['String']>;
};


export type QueryTasksArgs = {
  subMissionId?: Maybe<Scalars['String']>;
};


export type QueryQuestionsArgs = {
  questionIds: Array<Scalars['String']>;
};


export type QueryRetrieveTaskSubmissionArgs = {
  taskId?: Maybe<Scalars['String']>;
};


export type QueryRetrieveTaskProgressArgs = {
  taskId?: Maybe<Scalars['String']>;
};


export type QueryRetrieveQuestionProgressArgs = {
  taskId?: Maybe<Scalars['String']>;
};


export type QueryQuizblockArgs = {
  taskId: Scalars['String'];
  blockId: Scalars['String'];
};


export type QueryLearningObjectivesArgs = {
  course: Scalars['String'];
};

export interface Question {
  id: Scalars['String'];
  description: Scalars['String'];
  points: Scalars['Int'];
  feedback?: Maybe<Scalars['String']>;
}

/** An answer to a question that has been graded either automatically or by the teacher */
export type QuestionAndAnswer = {
  /** The question, including its contents and point value */
  question: Question;
  /** The students answer to the question, including how many points were awarded. */
  answer?: Maybe<Answer>;
};

export type QuestionOption = {
  id: Scalars['Int'];
  description: Scalars['String'];
};

export type QuestionProgress = {
  /** The id of the task the user submitted progress towards. */
  taskId: Scalars['String'];
  /** Each recorded answer to the questions contained in the task. The points awarded will be null. */
  answers: Array<Answer>;
};

export type QuizBlock = TaskBlock & {
  title?: Maybe<Scalars['String']>;
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  requiredScore?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  questions: Array<Question>;
};

export type QuizBlockInput = {
  taskId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  pageIndex: Scalars['Int'];
  blockIndex: Scalars['Int'];
  requiredScore: Scalars['Int'];
  points: Scalars['Int'];
  questionIds: Array<Scalars['String']>;
};

export enum Role {
  Student = 'STUDENT',
  Instructor = 'INSTRUCTOR'
}

export type RubricRequirement = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isComplete: Scalars['Boolean'];
};

export type RubricRequirementInput = {
  description?: Maybe<Scalars['String']>;
};

export type SubMission = {
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  parentMissionId: Scalars['String'];
  parentMissionIndex: Scalars['Int'];
  objectiveId?: Maybe<Scalars['String']>;
  missionContent?: Maybe<Array<Maybe<MissionContent>>>;
};

export type SubMissionInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  parentMissionId: Scalars['String'];
  parentMissionIndex: Scalars['Int'];
};

export type Task = {
  id: Scalars['String'];
  name: Scalars['String'];
  instructions: Scalars['String'];
  points: Scalars['Int'];
  parentMissionId: Scalars['String'];
  parentMissionIndex: Scalars['Int'];
  startAt?: Maybe<Scalars['Date']>;
  endAt?: Maybe<Scalars['Date']>;
  dueDate?: Maybe<Scalars['Date']>;
  objectiveId?: Maybe<Scalars['String']>;
  pages: Array<Page>;
  requirements: Array<RubricRequirement>;
};

export interface TaskBlock {
  title?: Maybe<Scalars['String']>;
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
}

export type TaskInput = {
  name: Scalars['String'];
  instructions: Scalars['String'];
  points: Scalars['Int'];
  parentMissionId: Scalars['String'];
  parentMissionIndex: Scalars['Int'];
  startAt?: Maybe<Scalars['Date']>;
  endAt?: Maybe<Scalars['Date']>;
  dueDate?: Maybe<Scalars['Date']>;
  objectiveId?: Maybe<Scalars['String']>;
  pages: Array<Maybe<PageInput>>;
  requirements: Array<RubricRequirementInput>;
};

export type TaskProgress = {
  /** The id of the task the user submitted progress towards. */
  taskId: Scalars['String'];
  username: Scalars['String'];
  /** The ids of each requirement */
  finishedRequirementIds: Array<Scalars['String']>;
};

export type TaskProgressInput = {
  /** The id of the task the user is submitting progress towards. */
  taskId: Scalars['String'];
  /**
   * The id if each requirement contained within each
   * completed block
   */
  finishedRequirementIds: Array<Scalars['String']>;
};

/**
 * Created when all requirements for a task have been satisfied and a task has
 * been submitted. Many fields may be null pending grading by the teacher
 */
export type TaskSubmissionResult = {
  /** Will be true when the teacher has finalized their grading on the task */
  graded: Scalars['Boolean'];
  /**
   * The current amount of points awarded for completing this task.
   * May be different before and after graded is set based on a combination of
   * automatic scoring and teacher grading
   */
  pointsAwarded?: Maybe<Scalars['Int']>;
  pointsPossible?: Maybe<Scalars['Int']>;
  /**
   * Information on the student result
   * for each question as well as the question itself
   */
  questionAndAnswers?: Maybe<Array<QuestionAndAnswer>>;
  teacherComment?: Maybe<Scalars['String']>;
};

export type TextBlock = TaskBlock & {
  title?: Maybe<Scalars['String']>;
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  contents?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type TextBlockInput = {
  taskId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  pageIndex: Scalars['Int'];
  blockIndex: Scalars['Int'];
  contents: Scalars['String'];
  fontSize: Scalars['Int'];
};

export type UpdateUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UpdateUserOutput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type User = {
  id: Scalars['String'];
  role: Role;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type VideoBlock = TaskBlock & {
  title?: Maybe<Scalars['String']>;
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  videoUrl: Scalars['String'];
};

export type VideoBlockInput = {
  taskId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  pageIndex: Scalars['Int'];
  blockIndex: Scalars['Int'];
  videoUrl: Scalars['String'];
};

export type LearningObjectivesQueryVariables = Exact<{
  course: Scalars['String'];
}>;


export type LearningObjectivesQuery = (
  { __typename: 'Query' }
  & { learningObjectives: Array<(
    { __typename: 'LearningObjective' }
    & Pick<LearningObjective, 'id' | 'course' | 'name' | 'description'>
  )> }
);

export type QuizBlockQueryVariables = Exact<{
  taskId: Scalars['String'];
  blockId: Scalars['String'];
}>;


export type QuizBlockQuery = (
  { __typename: 'Query' }
  & { quizblock: (
    { __typename: 'QuizBlock' }
    & Pick<QuizBlock, 'blockId' | 'title' | 'blockIndex' | 'pageIndex' | 'requiredScore' | 'points'>
    & { questions: Array<(
      { __typename: 'FrQuestion' }
      & FrQuestionFieldsFragment
    ) | (
      { __typename: 'McQuestion' }
      & McQuestionFieldsFragment
    )> }
  ) }
);

export type McQuestionFieldsFragment = (
  { __typename: 'McQuestion' }
  & Pick<McQuestion, 'id' | 'description' | 'feedback' | 'points' | 'answers'>
  & { options: Array<(
    { __typename: 'QuestionOption' }
    & Pick<QuestionOption, 'id' | 'description'>
  )> }
);

export type FrQuestionFieldsFragment = (
  { __typename: 'FrQuestion' }
  & Pick<FrQuestion, 'id' | 'description' | 'feedback' | 'points' | 'answer'>
);

export type AnswerFieldsFragment = (
  { __typename: 'Answer' }
  & Pick<Answer, 'pointsAwarded' | 'questionId' | 'answer'>
);

export type TaskSubmissionResultQueryVariables = Exact<{
  taskId?: Maybe<Scalars['String']>;
}>;


export type TaskSubmissionResultQuery = (
  { __typename: 'Query' }
  & { retrieveTaskSubmission?: Maybe<(
    { __typename: 'TaskSubmissionResult' }
    & Pick<TaskSubmissionResult, 'graded' | 'pointsAwarded' | 'pointsPossible' | 'teacherComment'>
    & { questionAndAnswers?: Maybe<Array<(
      { __typename: 'QuestionAndAnswer' }
      & QuestionAndAnswerFieldsFragment
    )>> }
  )> }
);

export type QuestionAndAnswerFieldsFragment = (
  { __typename: 'QuestionAndAnswer' }
  & { question: (
    { __typename: 'FrQuestion' }
    & FrQuestionFieldsFragment
  ) | (
    { __typename: 'McQuestion' }
    & McQuestionFieldsFragment
  ), answer?: Maybe<(
    { __typename: 'Answer' }
    & AnswerFieldsFragment
  )> }
);

export const McQuestionFieldsFragmentDoc = gql`
    fragment McQuestionFields on McQuestion {
  id
  description
  feedback
  points
  options {
    id
    description
  }
  answers
}
    `;
export const FrQuestionFieldsFragmentDoc = gql`
    fragment FrQuestionFields on FrQuestion {
  id
  description
  feedback
  points
  answer
}
    `;
export const AnswerFieldsFragmentDoc = gql`
    fragment AnswerFields on Answer {
  pointsAwarded
  questionId
  answer
}
    `;
export const QuestionAndAnswerFieldsFragmentDoc = gql`
    fragment QuestionAndAnswerFields on QuestionAndAnswer {
  question {
    ... on McQuestion {
      ...McQuestionFields
    }
    ... on FrQuestion {
      ...FrQuestionFields
    }
  }
  answer {
    ...AnswerFields
  }
}
    ${McQuestionFieldsFragmentDoc}
${FrQuestionFieldsFragmentDoc}
${AnswerFieldsFragmentDoc}`;
export const LearningObjectivesDocument = gql`
    query LearningObjectives($course: String!) {
  learningObjectives(course: $course) {
    id
    course
    name
    description
  }
}
    `;

/**
 * __useLearningObjectivesQuery__
 *
 * To run a query within a React component, call `useLearningObjectivesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLearningObjectivesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLearningObjectivesQuery({
 *   variables: {
 *      course: // value for 'course'
 *   },
 * });
 */
export function useLearningObjectivesQuery(baseOptions: Apollo.QueryHookOptions<LearningObjectivesQuery, LearningObjectivesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LearningObjectivesQuery, LearningObjectivesQueryVariables>(LearningObjectivesDocument, options);
      }
export function useLearningObjectivesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LearningObjectivesQuery, LearningObjectivesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LearningObjectivesQuery, LearningObjectivesQueryVariables>(LearningObjectivesDocument, options);
        }
export type LearningObjectivesQueryHookResult = ReturnType<typeof useLearningObjectivesQuery>;
export type LearningObjectivesLazyQueryHookResult = ReturnType<typeof useLearningObjectivesLazyQuery>;
export type LearningObjectivesQueryResult = Apollo.QueryResult<LearningObjectivesQuery, LearningObjectivesQueryVariables>;
export const QuizBlockDocument = gql`
    query QuizBlock($taskId: String!, $blockId: String!) {
  quizblock(taskId: $taskId, blockId: $blockId) {
    blockId
    title
    blockIndex
    pageIndex
    requiredScore
    points
    questions {
      ... on McQuestion {
        ...McQuestionFields
      }
      ... on FrQuestion {
        ...FrQuestionFields
      }
    }
  }
}
    ${McQuestionFieldsFragmentDoc}
${FrQuestionFieldsFragmentDoc}`;

/**
 * __useQuizBlockQuery__
 *
 * To run a query within a React component, call `useQuizBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuizBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuizBlockQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      blockId: // value for 'blockId'
 *   },
 * });
 */
export function useQuizBlockQuery(baseOptions: Apollo.QueryHookOptions<QuizBlockQuery, QuizBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuizBlockQuery, QuizBlockQueryVariables>(QuizBlockDocument, options);
      }
export function useQuizBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuizBlockQuery, QuizBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuizBlockQuery, QuizBlockQueryVariables>(QuizBlockDocument, options);
        }
export type QuizBlockQueryHookResult = ReturnType<typeof useQuizBlockQuery>;
export type QuizBlockLazyQueryHookResult = ReturnType<typeof useQuizBlockLazyQuery>;
export type QuizBlockQueryResult = Apollo.QueryResult<QuizBlockQuery, QuizBlockQueryVariables>;
export const TaskSubmissionResultDocument = gql`
    query TaskSubmissionResult($taskId: String) {
  retrieveTaskSubmission(taskId: $taskId) {
    graded
    pointsAwarded
    pointsPossible
    questionAndAnswers {
      ...QuestionAndAnswerFields
    }
    teacherComment
  }
}
    ${QuestionAndAnswerFieldsFragmentDoc}`;

/**
 * __useTaskSubmissionResultQuery__
 *
 * To run a query within a React component, call `useTaskSubmissionResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskSubmissionResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskSubmissionResultQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskSubmissionResultQuery(baseOptions?: Apollo.QueryHookOptions<TaskSubmissionResultQuery, TaskSubmissionResultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskSubmissionResultQuery, TaskSubmissionResultQueryVariables>(TaskSubmissionResultDocument, options);
      }
export function useTaskSubmissionResultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskSubmissionResultQuery, TaskSubmissionResultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskSubmissionResultQuery, TaskSubmissionResultQueryVariables>(TaskSubmissionResultDocument, options);
        }
export type TaskSubmissionResultQueryHookResult = ReturnType<typeof useTaskSubmissionResultQuery>;
export type TaskSubmissionResultLazyQueryHookResult = ReturnType<typeof useTaskSubmissionResultLazyQuery>;
export type TaskSubmissionResultQueryResult = Apollo.QueryResult<TaskSubmissionResultQuery, TaskSubmissionResultQueryVariables>;