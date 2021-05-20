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

export type ClassMissionMastery = {
  mission: Mission;
  studentMissionMasteryList: Array<StudentMissionMastery>;
};

export type ClassTargetMastery = {
  target: Target;
  studentObjectiveMasteryList: Array<StudentObjectiveMastery>;
};

export type CourseContent = {
  courseInfo: CourseInfo;
  missions: Array<Mission>;
  targets: Array<Target>;
};

export type CourseInfo = {
  courseId: Scalars['String'];
  course: Scalars['String'];
  instructor: Scalars['String'];
  description: Scalars['String'];
};

export type CourseInput = {
  course: Scalars['String'];
  instructor: Scalars['String'];
  description: Scalars['String'];
};


export type FrBlock = TaskBlock & {
  title: Scalars['String'];
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  points: Scalars['Int'];
  stem: Scalars['String'];
  answer?: Maybe<Scalars['String']>;
};

export type FrBlockInput = {
  taskId: Scalars['String'];
  title: Scalars['String'];
  pageIndex: Scalars['Int'];
  blockIndex: Scalars['Int'];
  points: Scalars['Int'];
  stem: Scalars['String'];
  answer?: Maybe<Scalars['String']>;
};

export type FrQuestion = Question & {
  id: Scalars['String'];
  description: Scalars['String'];
  points: Scalars['Int'];
  answer?: Maybe<Scalars['String']>;
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

export type Goal = {
  id: Scalars['String'];
  title: Scalars['String'];
  dueDate: Scalars['Date'];
  completed: Scalars['Boolean'];
  completedDate?: Maybe<Scalars['Date']>;
  subGoals: Array<SubGoal>;
  category: Scalars['String'];
  favorited: Scalars['Boolean'];
  owner: Scalars['String'];
  assignee: Scalars['String'];
  pointValue?: Maybe<Scalars['Int']>;
};

export type GoalInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  dueDate: Scalars['Date'];
  completed: Scalars['Boolean'];
  completedDate?: Maybe<Scalars['Date']>;
  subGoals: Array<SubGoalInput>;
  category: Scalars['String'];
  favorited: Scalars['Boolean'];
  owner?: Maybe<Scalars['String']>;
  assignee?: Maybe<Scalars['String']>;
  pointValue?: Maybe<Scalars['Int']>;
};

export type ImageBlock = TaskBlock & {
  title: Scalars['String'];
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  imageUrl: Scalars['String'];
};

export type ImageBlockInput = {
  taskId: Scalars['String'];
  title: Scalars['String'];
  pageIndex: Scalars['Int'];
  blockIndex: Scalars['Int'];
  imageUrl: Scalars['String'];
};

export enum Mastery {
  NotGraded = 'NOT_GRADED',
  NotMastered = 'NOT_MASTERED',
  NearlyMastered = 'NEARLY_MASTERED',
  Mastered = 'MASTERED'
}

export type McBlock = TaskBlock & {
  title: Scalars['String'];
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  points: Scalars['Int'];
  stem: Scalars['String'];
  options: Array<Scalars['String']>;
  answers?: Maybe<Array<Scalars['Int']>>;
};

export type McBlockInput = {
  taskId: Scalars['String'];
  title: Scalars['String'];
  pageIndex: Scalars['Int'];
  blockIndex: Scalars['Int'];
  points: Scalars['Int'];
  stem: Scalars['String'];
  options: Array<Scalars['String']>;
  answers?: Maybe<Array<Scalars['Int']>>;
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

export type MissionProgress = {
  mission: Mission;
  progress: Array<TaskStats>;
  student: Scalars['String'];
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
  addMission: Scalars['String'];
  addSubMission: Scalars['String'];
  addCourse: Scalars['String'];
  addTask: Scalars['String'];
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
  submitTask: TaskSubmissionResult;
  /**
   * Saves completed rubric requirements linked to this task for the user
   * calling this function
   */
  submitTaskProgress: Scalars['String'];
  /** Saves a students answer to a multiple choice question quiz block */
  saveMultipleChoiceProgress: Scalars['Boolean'];
  /** Saves and a students answer to a free response question quiz block */
  saveFreeResponseProgress: Scalars['Boolean'];
  addTextBlock: Scalars['String'];
  addImageBlock: Scalars['String'];
  addVideoBlock: Scalars['String'];
  addQuizBlock: Scalars['String'];
  addFrBlock: Scalars['String'];
  addMcBlock: Scalars['String'];
  addTarget: Scalars['String'];
  addObjective: Scalars['String'];
  addProgress: Scalars['String'];
  editOrCreateGoal: Scalars['String'];
  deleteGoal: Scalars['String'];
  addStudent: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  updateUserInput?: Maybe<UpdateUserInput>;
};


export type MutationAddMissionArgs = {
  mission: MissionInput;
};


export type MutationAddSubMissionArgs = {
  subMission: SubMissionInput;
};


export type MutationAddCourseArgs = {
  course: CourseInput;
};


export type MutationAddTaskArgs = {
  task: TaskInput;
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


export type MutationAddFrBlockArgs = {
  frBlock: FrBlockInput;
};


export type MutationAddMcBlockArgs = {
  mcBlock: McBlockInput;
};


export type MutationAddTargetArgs = {
  target: TargetInput;
};


export type MutationAddObjectiveArgs = {
  objective: ObjectiveInput;
};


export type MutationAddProgressArgs = {
  progress: ProgressInput;
};


export type MutationEditOrCreateGoalArgs = {
  goal: GoalInput;
};


export type MutationDeleteGoalArgs = {
  id: Scalars['String'];
};


export type MutationAddStudentArgs = {
  student: StudentInput;
};

export type Objective = {
  objectiveId: Scalars['String'];
  objectiveName: Scalars['String'];
  description: Scalars['String'];
  targetId: Scalars['String'];
  targetName: Scalars['String'];
  course: Scalars['String'];
  tasks: Array<Task>;
};

export type ObjectiveInput = {
  objectiveName: Scalars['String'];
  description: Scalars['String'];
  targetId: Scalars['String'];
  targetName: Scalars['String'];
  course: Scalars['String'];
  taskIds: Array<Scalars['String']>;
};

export type ObjectiveMastery = {
  objectiveId: Scalars['String'];
  targetId: Scalars['String'];
  mastery: Scalars['String'];
};

export type ObjectiveProgress = {
  objectiveId: Scalars['String'];
  objectiveName: Scalars['String'];
  tasks: Array<TaskObjectiveProgress>;
};

export type Page = {
  blocks: Array<TaskBlock>;
  skippable?: Maybe<Scalars['Boolean']>;
};

export type PageInput = {
  skippable?: Maybe<Scalars['Boolean']>;
};

export type Progress = {
  taskId: Scalars['String'];
  status: Scalars['Boolean'];
};

export type ProgressInput = {
  userName: Scalars['String'];
  course: Scalars['String'];
  taskId: Scalars['String'];
  status: Scalars['Boolean'];
};

export type ProgressOverview = {
  userProgress: Array<UserProgress>;
  courseInfo: CourseInfo;
  missions: Array<Mission>;
  targets: Array<Target>;
};

export type ProgresssDeletionInput = {
  userName: Scalars['String'];
  course: Scalars['String'];
  taskId: Scalars['String'];
};

export type Query = {
  getUser?: Maybe<User>;
  mission?: Maybe<Mission>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  subMission?: Maybe<SubMission>;
  _empty?: Maybe<Scalars['String']>;
  courseInfo: CourseInfo;
  courseInfos: Array<CourseInfo>;
  courseContent: CourseContent;
  task: Task;
  tasks: Array<Task>;
  taskInfo: Task;
  tasksByCourse: Array<Task>;
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
  target: Target;
  targets: Array<Target>;
  objective: Objective;
  objectives: Array<Objective>;
  progressByCourse: Array<UserProgress>;
  userProgress: UserProgress;
  progressOverview: ProgressOverview;
  getAllMissionProgress: Array<MissionProgress>;
  getAllTargetProgress: Array<TargetProgress>;
  getTaskObjectiveProgress: Array<TaskObjectiveProgress>;
  getAllGoals: Array<Goal>;
  /** Instructor only: get a user's goal given the user and the goal id */
  getGoalById: Goal;
  student: Student;
  students: Array<Student>;
  classMissionMastery?: Maybe<ClassMissionMastery>;
  classTargetMastery: ClassTargetMastery;
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


export type QueryCourseInfoArgs = {
  courseId: Scalars['String'];
};


export type QueryCourseInfosArgs = {
  instructor: Scalars['String'];
};


export type QueryCourseContentArgs = {
  course: Scalars['String'];
};


export type QueryTaskArgs = {
  taskId?: Maybe<Scalars['String']>;
};


export type QueryTasksArgs = {
  subMissionId?: Maybe<Scalars['String']>;
};


export type QueryTaskInfoArgs = {
  taskId: Scalars['String'];
};


export type QueryTasksByCourseArgs = {
  course: Scalars['String'];
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


export type QueryTargetArgs = {
  targetId: Scalars['String'];
};


export type QueryTargetsArgs = {
  course: Scalars['String'];
};


export type QueryObjectiveArgs = {
  objectiveId: Scalars['String'];
};


export type QueryObjectivesArgs = {
  course: Scalars['String'];
};


export type QueryProgressByCourseArgs = {
  course: Scalars['String'];
};


export type QueryUserProgressArgs = {
  userName: Scalars['String'];
  course: Scalars['String'];
};


export type QueryProgressOverviewArgs = {
  course: Scalars['String'];
};


export type QueryGetAllMissionProgressArgs = {
  courseId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};


export type QueryGetAllTargetProgressArgs = {
  courseId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};


export type QueryGetTaskObjectiveProgressArgs = {
  taskId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};


export type QueryGetGoalByIdArgs = {
  id: Scalars['String'];
  user: Scalars['String'];
};


export type QueryStudentArgs = {
  studentId: Scalars['String'];
  course: Scalars['String'];
};


export type QueryStudentsArgs = {
  course: Scalars['String'];
};


export type QueryClassMissionMasteryArgs = {
  missionId: Scalars['String'];
};


export type QueryClassTargetMasteryArgs = {
  targetId: Scalars['String'];
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
  title: Scalars['String'];
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  requiredScore: Scalars['Int'];
  points: Scalars['Int'];
  questions: Array<Question>;
};

export type QuizBlockInput = {
  taskId: Scalars['String'];
  title: Scalars['String'];
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

export type Student = {
  studentId: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  course: Scalars['String'];
  section: Scalars['Int'];
  team?: Maybe<Scalars['String']>;
};

export type StudentInput = {
  studentId: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  course: Scalars['String'];
  section: Scalars['Int'];
  team?: Maybe<Scalars['String']>;
};

export type StudentMissionMastery = {
  student: Student;
  currentTaskId: Scalars['String'];
  currentTaskName: Scalars['String'];
  level: Scalars['Int'];
  progress: Scalars['Float'];
};

export type StudentMissionMasteryInput = {
  missionId: Scalars['String'];
  studentId: Scalars['String'];
  currentTaskId: Scalars['String'];
  level: Scalars['Int'];
  progress: Scalars['Float'];
};

export type StudentObjectiveMastery = {
  student: Student;
  objectiveMasteryList: Array<ObjectiveMastery>;
};

export type StudentObjectiveMasteryInput = {
  studentId: Scalars['String'];
  objectiveId: Scalars['String'];
  targetId: Scalars['String'];
  mastery: Scalars['String'];
};

export type SubGoal = {
  title: Scalars['String'];
  dueDate: Scalars['Date'];
  completed: Scalars['Boolean'];
  completedDate?: Maybe<Scalars['Date']>;
};

export type SubGoalInput = {
  title: Scalars['String'];
  dueDate: Scalars['Date'];
  completed: Scalars['Boolean'];
  completedDate?: Maybe<Scalars['Date']>;
};

export type SubMission = {
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  missionId: Scalars['String'];
  missionIndex: Scalars['Int'];
  objectiveId?: Maybe<Scalars['String']>;
  missionContent?: Maybe<Array<Maybe<MissionContent>>>;
};

export type SubMissionInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  missionId: Scalars['String'];
  missionIndex: Scalars['Int'];
};

export type Target = {
  targetId: Scalars['String'];
  targetName: Scalars['String'];
  description: Scalars['String'];
  subject: Scalars['String'];
  gradeLevel: Scalars['Int'];
  icon: Scalars['String'];
  standards: Scalars['String'];
  course: Scalars['String'];
  objectives: Array<Objective>;
};

export type TargetInput = {
  targetName: Scalars['String'];
  description: Scalars['String'];
  subject: Scalars['String'];
  gradeLevel: Scalars['Int'];
  icon: Scalars['String'];
  standards: Scalars['String'];
  course: Scalars['String'];
};

export type TargetProgress = {
  target: Target;
  objectives: Array<ObjectiveProgress>;
  student: Scalars['String'];
};

export type Task = {
  id: Scalars['String'];
  name: Scalars['String'];
  instructions: Scalars['String'];
  points: Scalars['Int'];
  startAt?: Maybe<Scalars['Date']>;
  endAt?: Maybe<Scalars['Date']>;
  dueDate?: Maybe<Scalars['Date']>;
  pages: Array<Page>;
  requirements: Array<RubricRequirement>;
  course: Scalars['String'];
  missionId: Scalars['String'];
  missionIndex: Scalars['Int'];
  subMissionId?: Maybe<Scalars['String']>;
  objectiveId?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
};

export interface TaskBlock {
  title: Scalars['String'];
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
}

export type TaskInput = {
  name: Scalars['String'];
  instructions: Scalars['String'];
  points: Scalars['Int'];
  startAt?: Maybe<Scalars['Date']>;
  endAt?: Maybe<Scalars['Date']>;
  dueDate?: Maybe<Scalars['Date']>;
  pages: Array<Maybe<PageInput>>;
  requirements: Array<RubricRequirementInput>;
  course: Scalars['String'];
  missionId: Scalars['String'];
  missionIndex: Scalars['Int'];
  subMissionId?: Maybe<Scalars['String']>;
  objectiveId?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
};

export type TaskObjectiveProgress = {
  task: Task;
  objective: Objective;
  mastery: Mastery;
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

export type TaskStats = {
  taskId: Scalars['String'];
  name: Scalars['String'];
  /** Null indicates that this task does not yet have an associated submission */
  submission?: Maybe<TaskSubmissionResult>;
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
  taskId: Scalars['String'];
};

export type TextBlock = TaskBlock & {
  title: Scalars['String'];
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  contents?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type TextBlockInput = {
  taskId: Scalars['String'];
  title: Scalars['String'];
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

export type UserProgress = {
  userName: Scalars['String'];
  progress: Array<Progress>;
};

export type VideoBlock = TaskBlock & {
  title: Scalars['String'];
  blockId: Scalars['String'];
  blockIndex: Scalars['Int'];
  pageIndex: Scalars['Int'];
  videoUrl: Scalars['String'];
};

export type VideoBlockInput = {
  taskId: Scalars['String'];
  title: Scalars['String'];
  pageIndex: Scalars['Int'];
  blockIndex: Scalars['Int'];
  videoUrl: Scalars['String'];
};

export type ClassMissionMasteryQueryVariables = Exact<{ [key: string]: never; }>;


export type ClassMissionMasteryQuery = (
  { __typename: 'Query' }
  & { classMissionMastery?: Maybe<(
    { __typename: 'ClassMissionMastery' }
    & { mission: (
      { __typename: 'Mission' }
      & CmMissionFieldsFragment
    ), studentMissionMasteryList: Array<(
      { __typename: 'StudentMissionMastery' }
      & CmStudentFieldsFragment
    )> }
  )> }
);

export type CmMissionFieldsFragment = (
  { __typename: 'Mission' }
  & Pick<Mission, 'name' | 'description'>
);

export type CmStudentFieldsFragment = (
  { __typename: 'StudentMissionMastery' }
  & Pick<StudentMissionMastery, 'currentTaskId' | 'currentTaskName' | 'level' | 'progress'>
  & { student: (
    { __typename: 'Student' }
    & Pick<Student, 'lastName' | 'firstName' | 'email' | 'team'>
  ) }
);

export type GetMissionProgressQueryVariables = Exact<{
  courseId: Scalars['String'];
  username: Scalars['String'];
}>;


export type GetMissionProgressQuery = (
  { __typename: 'Query' }
  & { getAllMissionProgress: Array<(
    { __typename: 'MissionProgress' }
    & Pick<MissionProgress, 'student'>
    & { mission: (
      { __typename: 'Mission' }
      & Pick<Mission, 'name' | 'description' | 'id' | 'course'>
    ), progress: Array<(
      { __typename: 'TaskStats' }
      & Pick<TaskStats, 'name' | 'taskId'>
      & { submission?: Maybe<(
        { __typename: 'TaskSubmissionResult' }
        & Pick<TaskSubmissionResult, 'graded' | 'pointsAwarded' | 'pointsPossible'>
      )> }
    )> }
  )> }
);

export type ObjectivesQueryVariables = Exact<{
  course: Scalars['String'];
}>;


export type ObjectivesQuery = (
  { __typename: 'Query' }
  & { objectives: Array<(
    { __typename: 'Objective' }
    & ObjectiveFieldsFragment
  )> }
);

export type ObjectiveFieldsFragment = (
  { __typename: 'Objective' }
  & Pick<Objective, 'objectiveId' | 'objectiveName' | 'description' | 'targetId' | 'targetName' | 'course'>
);

export type ProgressOverviewQueryVariables = Exact<{
  course: Scalars['String'];
}>;


export type ProgressOverviewQuery = (
  { __typename: 'Query' }
  & { progressOverview: (
    { __typename: 'ProgressOverview' }
    & { userProgress: Array<(
      { __typename: 'UserProgress' }
      & UserProgressFieldsFragment
    )>, courseInfo: (
      { __typename: 'CourseInfo' }
      & CourseInfoFieldsFragment
    ), missions: Array<(
      { __typename: 'Mission' }
      & MissionFieldsFragment
    )>, targets: Array<(
      { __typename: 'Target' }
      & TargetFieldsFragment
    )> }
  ) }
);

export type UserProgressFieldsFragment = (
  { __typename: 'UserProgress' }
  & Pick<UserProgress, 'userName'>
  & { progress: Array<(
    { __typename: 'Progress' }
    & ProgressFieldsFragment
  )> }
);

export type ProgressFieldsFragment = (
  { __typename: 'Progress' }
  & Pick<Progress, 'taskId' | 'status'>
);

export type CourseInfoFieldsFragment = (
  { __typename: 'CourseInfo' }
  & Pick<CourseInfo, 'courseId' | 'course' | 'instructor' | 'description'>
);

export type TargetFieldsFragment = (
  { __typename: 'Target' }
  & Pick<Target, 'targetName'>
  & { objectives: Array<(
    { __typename: 'Objective' }
    & ProgressObjectiveFieldsFragment
  )> }
);

export type MissionFieldsFragment = (
  { __typename: 'Mission' }
  & Pick<Mission, 'id' | 'name'>
  & { missionContent?: Maybe<Array<Maybe<(
    { __typename: 'Task' }
    & MissionContentFields_Task_Fragment
  ) | (
    { __typename: 'SubMission' }
    & MissionContentFields_SubMission_Fragment
  )>>> }
);

type MissionContentFields_Task_Fragment = (
  { __typename: 'Task' }
  & TaskFieldsFragment
);

type MissionContentFields_SubMission_Fragment = (
  { __typename: 'SubMission' }
  & Pick<SubMission, 'id' | 'name'>
);

export type MissionContentFieldsFragment = MissionContentFields_Task_Fragment | MissionContentFields_SubMission_Fragment;

export type ProgressObjectiveFieldsFragment = (
  { __typename: 'Objective' }
  & Pick<Objective, 'objectiveId' | 'objectiveName'>
  & { tasks: Array<(
    { __typename: 'Task' }
    & TaskFieldsFragment
  )> }
);

export type TaskFieldsFragment = (
  { __typename: 'Task' }
  & Pick<Task, 'id' | 'name'>
);

export type GetCoursesQueryVariables = Exact<{
  instructor: Scalars['String'];
}>;


export type GetCoursesQuery = (
  { __typename: 'Query' }
  & { courseInfos: Array<(
    { __typename: 'CourseInfo' }
    & CourseInfoFieldsFragment
  )> }
);

export type GetTargetProgressQueryVariables = Exact<{
  courseId: Scalars['String'];
  username: Scalars['String'];
}>;


export type GetTargetProgressQuery = (
  { __typename: 'Query' }
  & { getAllTargetProgress: Array<(
    { __typename: 'TargetProgress' }
    & Pick<TargetProgress, 'student'>
    & { target: (
      { __typename: 'Target' }
      & TargetProgressFieldsFragment
    ), objectives: Array<(
      { __typename: 'ObjectiveProgress' }
      & ObjectiveProgressFieldsFragment
    )> }
  )> }
);

export type TargetProgressFieldsFragment = (
  { __typename: 'Target' }
  & Pick<Target, 'targetName'>
);

export type ObjectiveProgressFieldsFragment = (
  { __typename: 'ObjectiveProgress' }
  & Pick<ObjectiveProgress, 'objectiveId' | 'objectiveName'>
  & { tasks: Array<(
    { __typename: 'TaskObjectiveProgress' }
    & TaskObjectiveProgressFieldsFragment
  )> }
);

export type TaskObjectiveProgressFieldsFragment = (
  { __typename: 'TaskObjectiveProgress' }
  & Pick<TaskObjectiveProgress, 'mastery'>
  & { task: (
    { __typename: 'Task' }
    & Pick<Task, 'name'>
  ) }
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

export type GetTaskByIdQueryVariables = Exact<{
  taskId: Scalars['String'];
}>;


export type GetTaskByIdQuery = (
  { __typename: 'Query' }
  & { task: (
    { __typename: 'Task' }
    & Pick<Task, 'id' | 'name' | 'instructions' | 'points' | 'startAt' | 'endAt' | 'dueDate' | 'missionId' | 'missionIndex' | 'subMissionId' | 'objectiveId' | 'targetId'>
    & { requirements: Array<(
      { __typename: 'RubricRequirement' }
      & Pick<RubricRequirement, 'id' | 'description'>
    )>, pages: Array<(
      { __typename: 'Page' }
      & PageFieldsFragment
    )> }
  ) }
);

export type PageFieldsFragment = (
  { __typename: 'Page' }
  & Pick<Page, 'skippable'>
  & { blocks: Array<(
    { __typename: 'FrBlock' }
    & FrBlockFieldsFragment
  ) | (
    { __typename: 'ImageBlock' }
    & ImageBlockFieldsFragment
  ) | (
    { __typename: 'McBlock' }
    & McBlockFieldsFragment
  ) | (
    { __typename: 'QuizBlock' }
    & QuizBlockFieldsFragment
  ) | (
    { __typename: 'TextBlock' }
    & TextBlockFieldsFragment
  ) | (
    { __typename: 'VideoBlock' }
    & VideoBlockFieldsFragment
  )> }
);

export type TextBlockFieldsFragment = (
  { __typename: 'TextBlock' }
  & Pick<TextBlock, 'title' | 'contents' | 'fontSize'>
);

export type VideoBlockFieldsFragment = (
  { __typename: 'VideoBlock' }
  & Pick<VideoBlock, 'title' | 'videoUrl'>
);

export type ImageBlockFieldsFragment = (
  { __typename: 'ImageBlock' }
  & Pick<ImageBlock, 'imageUrl'>
);

export type QuizBlockFieldsFragment = (
  { __typename: 'QuizBlock' }
  & Pick<QuizBlock, 'title' | 'requiredScore'>
  & { questions: Array<(
    { __typename: 'FrQuestion' }
    & FrQuestionFieldsFragment
  ) | (
    { __typename: 'McQuestion' }
    & McQuestionFieldsFragment
  )> }
);

export type McBlockFieldsFragment = (
  { __typename: 'McBlock' }
  & Pick<McBlock, 'title' | 'blockId' | 'blockIndex' | 'pageIndex' | 'points' | 'stem' | 'options' | 'answers'>
);

export type FrBlockFieldsFragment = (
  { __typename: 'FrBlock' }
  & Pick<FrBlock, 'title' | 'blockId' | 'blockIndex' | 'pageIndex' | 'points' | 'stem' | 'answer'>
);

export const CmMissionFieldsFragmentDoc = gql`
    fragment CMMissionFields on Mission {
  name
  description
}
    `;
export const CmStudentFieldsFragmentDoc = gql`
    fragment CMStudentFields on StudentMissionMastery {
  student {
    lastName
    firstName
    email
    team
  }
  currentTaskId
  currentTaskName
  level
  progress
}
    `;
export const ObjectiveFieldsFragmentDoc = gql`
    fragment ObjectiveFields on Objective {
  objectiveId
  objectiveName
  description
  targetId
  targetName
  course
}
    `;
export const ProgressFieldsFragmentDoc = gql`
    fragment ProgressFields on Progress {
  taskId
  status
}
    `;
export const UserProgressFieldsFragmentDoc = gql`
    fragment UserProgressFields on UserProgress {
  userName
  progress {
    ...ProgressFields
  }
}
    ${ProgressFieldsFragmentDoc}`;
export const CourseInfoFieldsFragmentDoc = gql`
    fragment CourseInfoFields on CourseInfo {
  courseId
  course
  instructor
  description
}
    `;
export const TaskFieldsFragmentDoc = gql`
    fragment TaskFields on Task {
  id
  name
}
    `;
export const ProgressObjectiveFieldsFragmentDoc = gql`
    fragment ProgressObjectiveFields on Objective {
  objectiveId
  objectiveName
  tasks {
    ...TaskFields
  }
}
    ${TaskFieldsFragmentDoc}`;
export const TargetFieldsFragmentDoc = gql`
    fragment TargetFields on Target {
  targetName
  objectives {
    ...ProgressObjectiveFields
  }
}
    ${ProgressObjectiveFieldsFragmentDoc}`;
export const MissionContentFieldsFragmentDoc = gql`
    fragment MissionContentFields on MissionContent {
  ... on Task {
    ...TaskFields
  }
  ... on SubMission {
    id
    name
  }
}
    ${TaskFieldsFragmentDoc}`;
export const MissionFieldsFragmentDoc = gql`
    fragment MissionFields on Mission {
  id
  name
  missionContent {
    ...MissionContentFields
  }
}
    ${MissionContentFieldsFragmentDoc}`;
export const TargetProgressFieldsFragmentDoc = gql`
    fragment TargetProgressFields on Target {
  targetName
}
    `;
export const TaskObjectiveProgressFieldsFragmentDoc = gql`
    fragment TaskObjectiveProgressFields on TaskObjectiveProgress {
  task {
    name
  }
  mastery
}
    `;
export const ObjectiveProgressFieldsFragmentDoc = gql`
    fragment ObjectiveProgressFields on ObjectiveProgress {
  objectiveId
  objectiveName
  tasks {
    ...TaskObjectiveProgressFields
  }
}
    ${TaskObjectiveProgressFieldsFragmentDoc}`;
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
export const TextBlockFieldsFragmentDoc = gql`
    fragment TextBlockFields on TextBlock {
  title
  contents
  fontSize
}
    `;
export const VideoBlockFieldsFragmentDoc = gql`
    fragment VideoBlockFields on VideoBlock {
  title
  videoUrl
}
    `;
export const QuizBlockFieldsFragmentDoc = gql`
    fragment QuizBlockFields on QuizBlock {
  title
  requiredScore
  questions {
    ... on McQuestion {
      ...McQuestionFields
    }
    ... on FrQuestion {
      ...FrQuestionFields
    }
  }
}
    ${McQuestionFieldsFragmentDoc}
${FrQuestionFieldsFragmentDoc}`;
export const ImageBlockFieldsFragmentDoc = gql`
    fragment ImageBlockFields on ImageBlock {
  imageUrl
}
    `;
export const McBlockFieldsFragmentDoc = gql`
    fragment McBlockFields on McBlock {
  title
  blockId
  blockIndex
  pageIndex
  points
  stem
  options
  answers
}
    `;
export const FrBlockFieldsFragmentDoc = gql`
    fragment FrBlockFields on FrBlock {
  title
  blockId
  blockIndex
  pageIndex
  points
  stem
  answer
}
    `;
export const PageFieldsFragmentDoc = gql`
    fragment PageFields on Page {
  __typename
  blocks {
    __typename
    ... on TextBlock {
      ...TextBlockFields
    }
    ... on VideoBlock {
      ...VideoBlockFields
    }
    ... on QuizBlock {
      ...QuizBlockFields
    }
    ... on ImageBlock {
      ...ImageBlockFields
    }
    ... on McBlock {
      ...McBlockFields
    }
    ... on FrBlock {
      ...FrBlockFields
    }
  }
  skippable
}
    ${TextBlockFieldsFragmentDoc}
${VideoBlockFieldsFragmentDoc}
${QuizBlockFieldsFragmentDoc}
${ImageBlockFieldsFragmentDoc}
${McBlockFieldsFragmentDoc}
${FrBlockFieldsFragmentDoc}`;
export const ClassMissionMasteryDocument = gql`
    query ClassMissionMastery {
  classMissionMastery(missionId: "4df2cfa5710") {
    mission {
      ...CMMissionFields
    }
    studentMissionMasteryList {
      ...CMStudentFields
    }
  }
}
    ${CmMissionFieldsFragmentDoc}
${CmStudentFieldsFragmentDoc}`;

/**
 * __useClassMissionMasteryQuery__
 *
 * To run a query within a React component, call `useClassMissionMasteryQuery` and pass it any options that fit your needs.
 * When your component renders, `useClassMissionMasteryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClassMissionMasteryQuery({
 *   variables: {
 *   },
 * });
 */
export function useClassMissionMasteryQuery(baseOptions?: Apollo.QueryHookOptions<ClassMissionMasteryQuery, ClassMissionMasteryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClassMissionMasteryQuery, ClassMissionMasteryQueryVariables>(ClassMissionMasteryDocument, options);
      }
export function useClassMissionMasteryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClassMissionMasteryQuery, ClassMissionMasteryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClassMissionMasteryQuery, ClassMissionMasteryQueryVariables>(ClassMissionMasteryDocument, options);
        }
export type ClassMissionMasteryQueryHookResult = ReturnType<typeof useClassMissionMasteryQuery>;
export type ClassMissionMasteryLazyQueryHookResult = ReturnType<typeof useClassMissionMasteryLazyQuery>;
export type ClassMissionMasteryQueryResult = Apollo.QueryResult<ClassMissionMasteryQuery, ClassMissionMasteryQueryVariables>;
export const GetMissionProgressDocument = gql`
    query GetMissionProgress($courseId: String!, $username: String!) {
  getAllMissionProgress(courseId: $courseId, username: $username) {
    student
    mission {
      name
      description
      id
      course
    }
    progress {
      name
      taskId
      submission {
        graded
        pointsAwarded
        pointsPossible
      }
    }
  }
}
    `;

/**
 * __useGetMissionProgressQuery__
 *
 * To run a query within a React component, call `useGetMissionProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMissionProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMissionProgressQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetMissionProgressQuery(baseOptions: Apollo.QueryHookOptions<GetMissionProgressQuery, GetMissionProgressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMissionProgressQuery, GetMissionProgressQueryVariables>(GetMissionProgressDocument, options);
      }
export function useGetMissionProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMissionProgressQuery, GetMissionProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMissionProgressQuery, GetMissionProgressQueryVariables>(GetMissionProgressDocument, options);
        }
export type GetMissionProgressQueryHookResult = ReturnType<typeof useGetMissionProgressQuery>;
export type GetMissionProgressLazyQueryHookResult = ReturnType<typeof useGetMissionProgressLazyQuery>;
export type GetMissionProgressQueryResult = Apollo.QueryResult<GetMissionProgressQuery, GetMissionProgressQueryVariables>;
export const ObjectivesDocument = gql`
    query Objectives($course: String!) {
  objectives(course: $course) {
    ...ObjectiveFields
  }
}
    ${ObjectiveFieldsFragmentDoc}`;

/**
 * __useObjectivesQuery__
 *
 * To run a query within a React component, call `useObjectivesQuery` and pass it any options that fit your needs.
 * When your component renders, `useObjectivesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useObjectivesQuery({
 *   variables: {
 *      course: // value for 'course'
 *   },
 * });
 */
export function useObjectivesQuery(baseOptions: Apollo.QueryHookOptions<ObjectivesQuery, ObjectivesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ObjectivesQuery, ObjectivesQueryVariables>(ObjectivesDocument, options);
      }
export function useObjectivesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ObjectivesQuery, ObjectivesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ObjectivesQuery, ObjectivesQueryVariables>(ObjectivesDocument, options);
        }
export type ObjectivesQueryHookResult = ReturnType<typeof useObjectivesQuery>;
export type ObjectivesLazyQueryHookResult = ReturnType<typeof useObjectivesLazyQuery>;
export type ObjectivesQueryResult = Apollo.QueryResult<ObjectivesQuery, ObjectivesQueryVariables>;
export const ProgressOverviewDocument = gql`
    query ProgressOverview($course: String!) {
  progressOverview(course: $course) {
    userProgress {
      ...UserProgressFields
    }
    courseInfo {
      ...CourseInfoFields
    }
    missions {
      ...MissionFields
    }
    targets {
      ...TargetFields
    }
  }
}
    ${UserProgressFieldsFragmentDoc}
${CourseInfoFieldsFragmentDoc}
${MissionFieldsFragmentDoc}
${TargetFieldsFragmentDoc}`;

/**
 * __useProgressOverviewQuery__
 *
 * To run a query within a React component, call `useProgressOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useProgressOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProgressOverviewQuery({
 *   variables: {
 *      course: // value for 'course'
 *   },
 * });
 */
export function useProgressOverviewQuery(baseOptions: Apollo.QueryHookOptions<ProgressOverviewQuery, ProgressOverviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProgressOverviewQuery, ProgressOverviewQueryVariables>(ProgressOverviewDocument, options);
      }
export function useProgressOverviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProgressOverviewQuery, ProgressOverviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProgressOverviewQuery, ProgressOverviewQueryVariables>(ProgressOverviewDocument, options);
        }
export type ProgressOverviewQueryHookResult = ReturnType<typeof useProgressOverviewQuery>;
export type ProgressOverviewLazyQueryHookResult = ReturnType<typeof useProgressOverviewLazyQuery>;
export type ProgressOverviewQueryResult = Apollo.QueryResult<ProgressOverviewQuery, ProgressOverviewQueryVariables>;
export const GetCoursesDocument = gql`
    query GetCourses($instructor: String!) {
  courseInfos(instructor: $instructor) {
    ...CourseInfoFields
  }
}
    ${CourseInfoFieldsFragmentDoc}`;

/**
 * __useGetCoursesQuery__
 *
 * To run a query within a React component, call `useGetCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesQuery({
 *   variables: {
 *      instructor: // value for 'instructor'
 *   },
 * });
 */
export function useGetCoursesQuery(baseOptions: Apollo.QueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
      }
export function useGetCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
        }
export type GetCoursesQueryHookResult = ReturnType<typeof useGetCoursesQuery>;
export type GetCoursesLazyQueryHookResult = ReturnType<typeof useGetCoursesLazyQuery>;
export type GetCoursesQueryResult = Apollo.QueryResult<GetCoursesQuery, GetCoursesQueryVariables>;
export const GetTargetProgressDocument = gql`
    query GetTargetProgress($courseId: String!, $username: String!) {
  getAllTargetProgress(courseId: $courseId, username: $username) {
    student
    target {
      ...TargetProgressFields
    }
    objectives {
      ...ObjectiveProgressFields
    }
  }
}
    ${TargetProgressFieldsFragmentDoc}
${ObjectiveProgressFieldsFragmentDoc}`;

/**
 * __useGetTargetProgressQuery__
 *
 * To run a query within a React component, call `useGetTargetProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTargetProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTargetProgressQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetTargetProgressQuery(baseOptions: Apollo.QueryHookOptions<GetTargetProgressQuery, GetTargetProgressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTargetProgressQuery, GetTargetProgressQueryVariables>(GetTargetProgressDocument, options);
      }
export function useGetTargetProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTargetProgressQuery, GetTargetProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTargetProgressQuery, GetTargetProgressQueryVariables>(GetTargetProgressDocument, options);
        }
export type GetTargetProgressQueryHookResult = ReturnType<typeof useGetTargetProgressQuery>;
export type GetTargetProgressLazyQueryHookResult = ReturnType<typeof useGetTargetProgressLazyQuery>;
export type GetTargetProgressQueryResult = Apollo.QueryResult<GetTargetProgressQuery, GetTargetProgressQueryVariables>;
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
export const GetTaskByIdDocument = gql`
    query GetTaskById($taskId: String!) {
  task(taskId: $taskId) {
    id
    requirements {
      id
      description
    }
    name
    instructions
    points
    startAt
    endAt
    dueDate
    missionId
    missionIndex
    subMissionId
    objectiveId
    targetId
    pages {
      ...PageFields
    }
  }
}
    ${PageFieldsFragmentDoc}`;

/**
 * __useGetTaskByIdQuery__
 *
 * To run a query within a React component, call `useGetTaskByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskByIdQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useGetTaskByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTaskByIdQuery, GetTaskByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(GetTaskByIdDocument, options);
      }
export function useGetTaskByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskByIdQuery, GetTaskByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaskByIdQuery, GetTaskByIdQueryVariables>(GetTaskByIdDocument, options);
        }
export type GetTaskByIdQueryHookResult = ReturnType<typeof useGetTaskByIdQuery>;
export type GetTaskByIdLazyQueryHookResult = ReturnType<typeof useGetTaskByIdLazyQuery>;
export type GetTaskByIdQueryResult = Apollo.QueryResult<GetTaskByIdQuery, GetTaskByIdQueryVariables>;