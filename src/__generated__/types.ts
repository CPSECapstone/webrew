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

export type Activity = {
  studentId: Scalars['String'];
  course: Scalars['String'];
  note: Scalars['String'];
  activityDate: Scalars['Date'];
  pointChange: Scalars['Int'];
};

export type Answer = {
  questionId?: Maybe<Scalars['String']>;
  pointsAwarded?: Maybe<Scalars['Int']>;
  /** Either the id of the chosen answer id or the provided free response */
  answer?: Maybe<Scalars['String']>;
  graded: Scalars['Boolean'];
  teacherComment?: Maybe<Scalars['String']>;
};

export type AnswerGrade = {
  student: Scalars['String'];
  questionId: Scalars['String'];
  pointsAwarded: Scalars['Int'];
  teacherComment?: Maybe<Scalars['String']>;
};

export type AnswerGradeInput = {
  student: Scalars['String'];
  questionId: Scalars['String'];
  pointsAwarded: Scalars['Int'];
  teacherComment?: Maybe<Scalars['String']>;
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
  courseName: Scalars['String'];
  instructorId: Scalars['String'];
};

export type CourseInput = {
  courseName: Scalars['String'];
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

export type MarketListing = {
  id: Scalars['String'];
  listingName: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  course: Scalars['String'];
  listedDate: Scalars['Date'];
  price: Scalars['Int'];
  stock?: Maybe<Scalars['Int']>;
  timesPurchased: Scalars['Int'];
};

export type MarketListingInput = {
  listingName: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  stock?: Maybe<Scalars['Int']>;
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
  missionContent: Array<MissionContent>;
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
  /** Creates a new course associated with the instructor caller */
  createCourse: CourseInfo;
  /**
   * Callable by both instructor and student roles, but with different
   * values overridden by the authentication header.
   *
   * If called by student: overrides the student input
   *
   * If called by an instructor: overrides the instructor input
   */
  addStudent: Student;
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
  wipeAllProgress: Scalars['String'];
  editOrCreateGoal: Scalars['String'];
  deleteGoal: Scalars['String'];
  gradeTaskSubmission: TaskSubmissionGrade;
  gradeAnswer: AnswerGrade;
  gradeObjectiveTaskMastery: ObjectiveTaskMastery;
  removeStudent: Scalars['String'];
  blockStudentPurchases: Student;
  setStudentAdmin: Student;
  refundPurchase: Scalars['Boolean'];
  fulfillPurchase: Receipt;
  purchase: Receipt;
  editMarketListing: MarketListing;
  addMarketListing: MarketListing;
  removeMarketListing: Scalars['String'];
  awardStudentPoints: Student;
  awardStudentsPoints: Array<Student>;
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


export type MutationCreateCourseArgs = {
  course: CourseInput;
};


export type MutationAddStudentArgs = {
  student: StudentInput;
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
  taskId: Scalars['String'];
};


export type MutationSubmitTaskProgressArgs = {
  taskProgress: TaskProgressInput;
};


export type MutationSaveMultipleChoiceProgressArgs = {
  mcBlockInput: MultipleChoiceAnswerInput;
};


export type MutationSaveFreeResponseProgressArgs = {
  frBlockInput: FreeResponseAnswerInput;
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


export type MutationWipeAllProgressArgs = {
  username: Scalars['String'];
};


export type MutationEditOrCreateGoalArgs = {
  goal: GoalInput;
};


export type MutationDeleteGoalArgs = {
  id: Scalars['String'];
};


export type MutationGradeTaskSubmissionArgs = {
  grade: TaskSubmissionGradeInput;
};


export type MutationGradeAnswerArgs = {
  grade: AnswerGradeInput;
};


export type MutationGradeObjectiveTaskMasteryArgs = {
  grade: ObjectiveTaskMasteryInput;
};


export type MutationRemoveStudentArgs = {
  course: Scalars['String'];
  student: Scalars['String'];
};


export type MutationBlockStudentPurchasesArgs = {
  course: Scalars['String'];
  student: Scalars['String'];
  blocked: Scalars['Boolean'];
};


export type MutationSetStudentAdminArgs = {
  course: Scalars['String'];
  student: Scalars['String'];
  admin: Scalars['Boolean'];
};


export type MutationRefundPurchaseArgs = {
  course: Scalars['String'];
  receiptId: Scalars['String'];
};


export type MutationFulfillPurchaseArgs = {
  course: Scalars['String'];
  receiptId: Scalars['String'];
  fulfilled: Scalars['Boolean'];
};


export type MutationPurchaseArgs = {
  course: Scalars['String'];
  listingId: Scalars['String'];
  quantity: Scalars['Int'];
  note: Scalars['String'];
};


export type MutationEditMarketListingArgs = {
  course: Scalars['String'];
  id: Scalars['String'];
  listing: MarketListingInput;
};


export type MutationAddMarketListingArgs = {
  course: Scalars['String'];
  listing: MarketListingInput;
};


export type MutationRemoveMarketListingArgs = {
  course: Scalars['String'];
  id: Scalars['String'];
};


export type MutationAwardStudentPointsArgs = {
  courseId: Scalars['String'];
  student: Scalars['String'];
  points: Scalars['Int'];
};


export type MutationAwardStudentsPointsArgs = {
  courseId: Scalars['String'];
  studentIds: Array<Scalars['String']>;
  points: Scalars['Int'];
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

export type ObjectiveTaskMastery = {
  student: Scalars['String'];
  taskId: Scalars['String'];
  objectiveId: Scalars['String'];
  mastery: Mastery;
};

export type ObjectiveTaskMasteryInput = {
  student: Scalars['String'];
  taskId: Scalars['String'];
  objectiveId: Scalars['String'];
  mastery: Mastery;
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
  getUser: User;
  mission: Mission;
  missions: Array<Mission>;
  subMission?: Maybe<SubMission>;
  course: CourseInfo;
  /** Returns info on all courses associated with the user */
  courses: Array<CourseInfo>;
  /** DEPRECATED */
  courseContent: CourseContent;
  /** Returns information on a specific student associated with a course. */
  student: Student;
  /** Returns all students enrolled in a course */
  students: Array<Student>;
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
  taskSubmissionSummary: TaskSubmissionSummary;
  quizblock: QuizBlock;
  target: Target;
  targets: Array<Target>;
  _empty?: Maybe<Scalars['String']>;
  objective: Objective;
  objectives: Array<Objective>;
  progressByCourse: Array<UserProgress>;
  userProgress: UserProgress;
  progressOverview: ProgressOverview;
  getAllEnrolledStudentMissionProgress: Array<MissionProgress>;
  getMissionProgress: MissionProgress;
  getAllMissionProgress: Array<MissionProgress>;
  getAllTargetProgress: Array<TargetProgress>;
  getTaskObjectiveProgress: Array<TaskObjectiveProgress>;
  getAllGoals: Array<Goal>;
  /** Instructor only: get a user's goal given the user and the goal id */
  getGoalById: Goal;
  classMissionMastery: ClassMissionMastery;
  classTargetMastery: ClassTargetMastery;
  marketListings: Array<MarketListing>;
  /**
   * If the student field is null or this API is called by a student, it will only return that student's purchases.
   * Otherwise, it will return all for that course.
   *
   * Will only return the most recent N purchased passed into the fetch parameter
   */
  recentPurchases: Array<Receipt>;
  recentActivity: Array<Activity>;
  unfulfilledPurchases: Array<Receipt>;
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


export type QueryCourseArgs = {
  courseId: Scalars['String'];
  instructorId: Scalars['String'];
};


export type QueryCourseContentArgs = {
  course: Scalars['String'];
};


export type QueryStudentArgs = {
  studentId?: Maybe<Scalars['String']>;
  courseId: Scalars['String'];
};


export type QueryStudentsArgs = {
  courseId: Scalars['String'];
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
  taskId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};


export type QueryRetrieveTaskProgressArgs = {
  taskId: Scalars['String'];
};


export type QueryRetrieveQuestionProgressArgs = {
  taskId: Scalars['String'];
};


export type QueryTaskSubmissionSummaryArgs = {
  course: Scalars['String'];
  taskId: Scalars['String'];
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


export type QueryGetAllEnrolledStudentMissionProgressArgs = {
  courseId: Scalars['String'];
  missionId: Scalars['String'];
};


export type QueryGetMissionProgressArgs = {
  missionId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
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


export type QueryClassMissionMasteryArgs = {
  missionId: Scalars['String'];
};


export type QueryClassTargetMasteryArgs = {
  targetId: Scalars['String'];
};


export type QueryMarketListingsArgs = {
  course: Scalars['String'];
};


export type QueryRecentPurchasesArgs = {
  course: Scalars['String'];
  student?: Maybe<Scalars['String']>;
  fetch: Scalars['Int'];
};


export type QueryRecentActivityArgs = {
  course: Scalars['String'];
  student?: Maybe<Scalars['String']>;
  fetch: Scalars['Int'];
};


export type QueryUnfulfilledPurchasesArgs = {
  course: Scalars['String'];
  student?: Maybe<Scalars['String']>;
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

/**
 * The student and listing objects contained in the receipt will reflect
 * the updated values as a result of the purchase.
 */
export type Receipt = {
  studentId: Scalars['String'];
  listingName: Scalars['String'];
  listingId: Scalars['String'];
  student: Student;
  listing: MarketListing;
  receiptId: Scalars['String'];
  course: Scalars['String'];
  note: Scalars['String'];
  purchaseDate: Scalars['Date'];
  pointsSpent: Scalars['Int'];
  quantity: Scalars['Int'];
  fulfilled: Scalars['Boolean'];
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
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  courseId: Scalars['String'];
  instructorId: Scalars['String'];
  courseName: Scalars['String'];
  points: Scalars['Int'];
  totalPointsAwarded: Scalars['Int'];
  totalPointsSpent: Scalars['Int'];
  purchaseBlocked: Scalars['Boolean'];
  admin: Scalars['Boolean'];
};

export type StudentInput = {
  studentId: Scalars['String'];
  courseId: Scalars['String'];
  instructorId: Scalars['String'];
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

export type StudentTaskSubmissionResult = {
  studentName: Scalars['String'];
  studentId: Scalars['String'];
  /**
   * Todo
   * The pointsAwarded is calculated on fly when a single task submission is queried. Here we are querying a list of task submission, the pointsAwarded would not be accurate since we are not recalcuated it.
   */
  pointsAwarded?: Maybe<Scalars['Int']>;
  graded: Scalars['Boolean'];
  teacherComment?: Maybe<Scalars['String']>;
  submitted: Scalars['Boolean'];
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
  username: Scalars['String'];
  /** Null indicates that this task does not yet have an associated submission */
  submission?: Maybe<TaskSubmissionResult>;
};

export type TaskSubmissionGrade = {
  taskId: Scalars['String'];
  student: Scalars['String'];
  teacherComment?: Maybe<Scalars['String']>;
  /**
   * This is only for the points that aren't directly associated to a question answer.
   * If this exceeds the total point worth of the task minus the points accounted for by questions,
   * it will give the student extra credit.
   */
  pointsAwarded: Scalars['Int'];
};

export type TaskSubmissionGradeInput = {
  taskId: Scalars['String'];
  student: Scalars['String'];
  teacherComment?: Maybe<Scalars['String']>;
  /**
   * This is only for the points that aren't directly associated to a question answer.
   * If this exceeds the total point worth of the task minus the points accounted for by questions,
   * it will give the student extra credit.
   */
  pointsAwarded: Scalars['Int'];
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

export type TaskSubmissionSummary = {
  task: Task;
  results: Array<StudentTaskSubmissionResult>;
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
  name: Scalars['String'];
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


export type ClassMissionMasteryQuery = { __typename: 'Query', classMissionMastery: { __typename: 'ClassMissionMastery', mission: (
      { __typename: 'Mission' }
      & CmMissionFieldsFragment
    ), studentMissionMasteryList: Array<(
      { __typename: 'StudentMissionMastery' }
      & CmStudentFieldsFragment
    )> } };

export type CmMissionFieldsFragment = { __typename: 'Mission', name: string, description: string };

export type CmStudentFieldsFragment = { __typename: 'StudentMissionMastery', currentTaskId: string, currentTaskName: string, level: number, progress: number, student: { __typename: 'Student', studentId: string, lastName: string, firstName: string } };

export type MarketListingsQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type MarketListingsQuery = { __typename: 'Query', marketListings: Array<(
    { __typename: 'MarketListing' }
    & ListingFieldsFragment
  )> };

export type AddListingMutationVariables = Exact<{
  course: Scalars['String'];
  input: MarketListingInput;
}>;


export type AddListingMutation = { __typename: 'Mutation', addMarketListing: (
    { __typename: 'MarketListing' }
    & ListingFieldsFragment
  ) };

export type EditListingMutationVariables = Exact<{
  course: Scalars['String'];
  id: Scalars['String'];
  input: MarketListingInput;
}>;


export type EditListingMutation = { __typename: 'Mutation', editMarketListing: (
    { __typename: 'MarketListing' }
    & ListingFieldsFragment
  ) };

export type DeleteListingMutationVariables = Exact<{
  course: Scalars['String'];
  id: Scalars['String'];
}>;


export type DeleteListingMutation = { __typename: 'Mutation', removeMarketListing: string };

export type DeleteStudentMutationVariables = Exact<{
  courseId: Scalars['String'];
  studentId: Scalars['String'];
}>;


export type DeleteStudentMutation = { __typename: 'Mutation', removeStudent: string };

export type ListingFieldsFragment = { __typename: 'MarketListing', id: string, listingName: string, description: string, image: string, course: string, listedDate: any, price: number, stock?: Maybe<number>, timesPurchased: number };

export type AddStudentMutationVariables = Exact<{
  student: StudentInput;
}>;


export type AddStudentMutation = { __typename: 'Mutation', addStudent: (
    { __typename: 'Student' }
    & StudentInfoFragment
  ) };

export type AwardStudentsPointsMutationVariables = Exact<{
  studentIds: Array<Scalars['String']> | Scalars['String'];
  courseId: Scalars['String'];
  points: Scalars['Int'];
}>;


export type AwardStudentsPointsMutation = { __typename: 'Mutation', awardStudentsPoints: Array<(
    { __typename: 'Student' }
    & StudentInfoFragment
  )> };

export type StudentInfoFragment = { __typename: 'Student', firstName: string, lastName: string, points: number, totalPointsSpent: number, totalPointsAwarded: number, studentId: string, purchaseBlocked: boolean, admin: boolean };

export type ActivityInfoFragment = { __typename: 'Activity', studentId: string, activityDate: any, note: string, pointChange: number };

export type StudentsQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type StudentsQuery = { __typename: 'Query', students: Array<(
    { __typename: 'Student' }
    & StudentInfoFragment
  )> };

export type StudentQueryVariables = Exact<{
  courseId: Scalars['String'];
  studentId: Scalars['String'];
}>;


export type StudentQuery = { __typename: 'Query', student: (
    { __typename: 'Student' }
    & StudentInfoFragment
  ) };

export type ReceiptInfoFragment = { __typename: 'Receipt', studentId: string, fulfilled: boolean, listingName: string, listingId: string, course: string, note: string, purchaseDate: any, pointsSpent: number, receiptId: string, quantity: number, student: { __typename: 'Student', firstName: string, points: number, lastName: string } };

export type PurchaseMutationVariables = Exact<{
  course: Scalars['String'];
  listingId: Scalars['String'];
  quantity: Scalars['Int'];
  note: Scalars['String'];
}>;


export type PurchaseMutation = { __typename: 'Mutation', purchase: (
    { __typename: 'Receipt' }
    & ReceiptInfoFragment
  ) };

export type UnfulfilledQueryVariables = Exact<{
  course: Scalars['String'];
}>;


export type UnfulfilledQuery = { __typename: 'Query', unfulfilledPurchases: Array<(
    { __typename: 'Receipt' }
    & ReceiptInfoFragment
  )> };

export type RecentQueryVariables = Exact<{
  course: Scalars['String'];
  fetch: Scalars['Int'];
}>;


export type RecentQuery = { __typename: 'Query', recentPurchases: Array<(
    { __typename: 'Receipt' }
    & ReceiptInfoFragment
  )> };

export type FulfillMutationVariables = Exact<{
  receiptId: Scalars['String'];
  course: Scalars['String'];
  fulfilled: Scalars['Boolean'];
}>;


export type FulfillMutation = { __typename: 'Mutation', fulfillPurchase: (
    { __typename: 'Receipt' }
    & ReceiptInfoFragment
  ) };

export type RefundMutationVariables = Exact<{
  receiptId: Scalars['String'];
  course: Scalars['String'];
}>;


export type RefundMutation = { __typename: 'Mutation', refundPurchase: boolean };

export type BlockPurchasesMutationVariables = Exact<{
  courseId: Scalars['String'];
  studentId: Scalars['String'];
  blocked: Scalars['Boolean'];
}>;


export type BlockPurchasesMutation = { __typename: 'Mutation', blockStudentPurchases: (
    { __typename: 'Student' }
    & StudentInfoFragment
  ) };

export type SetStudentAdminMutationVariables = Exact<{
  courseId: Scalars['String'];
  studentId: Scalars['String'];
  admin: Scalars['Boolean'];
}>;


export type SetStudentAdminMutation = { __typename: 'Mutation', setStudentAdmin: (
    { __typename: 'Student' }
    & StudentInfoFragment
  ) };

export type StudentInfoQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type StudentInfoQuery = { __typename: 'Query', student: (
    { __typename: 'Student' }
    & StudentInfoFragment
  ) };

export type RecentActivityQueryVariables = Exact<{
  courseId: Scalars['String'];
  fetch: Scalars['Int'];
}>;


export type RecentActivityQuery = { __typename: 'Query', recentActivity: Array<(
    { __typename: 'Activity' }
    & ActivityInfoFragment
  )> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename: 'Query', getUser: { __typename: 'User', id: string, name: string, email?: Maybe<string>, role: Role } };

export type TaskListQueryVariables = Exact<{
  course: Scalars['String'];
}>;


export type TaskListQuery = { __typename: 'Query', tasksByCourse: Array<(
    { __typename: 'Task' }
    & TaskListTaskFieldsFragment
  )> };

export type TaskListTaskFieldsFragment = { __typename: 'Task', id: string, name: string, instructions: string };

export type TaskSubmissionSummaryQueryVariables = Exact<{
  course: Scalars['String'];
  taskId: Scalars['String'];
}>;


export type TaskSubmissionSummaryQuery = { __typename: 'Query', taskSubmissionSummary: { __typename: 'TaskSubmissionSummary', task: (
      { __typename: 'Task' }
      & SummaryTaskFieldsFragment
    ), results: Array<(
      { __typename: 'StudentTaskSubmissionResult' }
      & SummaryStudentResultFieldsFragment
    )> } };

export type SummaryTaskFieldsFragment = { __typename: 'Task', id: string, name: string, instructions: string, points: number };

export type SummaryStudentResultFieldsFragment = { __typename: 'StudentTaskSubmissionResult', studentId: string, studentName: string, submitted: boolean, graded: boolean, pointsAwarded?: Maybe<number>, teacherComment?: Maybe<string> };

export type ClassTargetMasteryQueryVariables = Exact<{
  targetId: Scalars['String'];
}>;


export type ClassTargetMasteryQuery = { __typename: 'Query', classTargetMastery: { __typename: 'ClassTargetMastery', target: (
      { __typename: 'Target' }
      & CtmTargetFieldFragment
    ), studentObjectiveMasteryList: Array<(
      { __typename: 'StudentObjectiveMastery' }
      & CtmStudentObjectiveMasteryFieldsFragment
    )> } };

export type CtmTargetFieldFragment = { __typename: 'Target', targetId: string, targetName: string, objectives: Array<(
    { __typename: 'Objective' }
    & CtmObjectiveFieldFragment
  )> };

export type CtmObjectiveFieldFragment = { __typename: 'Objective', objectiveId: string, objectiveName: string };

export type CtmStudentObjectiveMasteryFieldsFragment = { __typename: 'StudentObjectiveMastery', student: { __typename: 'Student', studentId: string }, objectiveMasteryList: Array<(
    { __typename: 'ObjectiveMastery' }
    & CtmObjectiveMasteryFieldsFragment
  )> };

export type CtmObjectiveMasteryFieldsFragment = { __typename: 'ObjectiveMastery', objectiveId: string, mastery: string };

export type GetMissionProgressForEnrolledQueryVariables = Exact<{
  courseId: Scalars['String'];
  missionId: Scalars['String'];
}>;


export type GetMissionProgressForEnrolledQuery = { __typename: 'Query', getAllEnrolledStudentMissionProgress: Array<{ __typename: 'MissionProgress', student: string, progress: Array<{ __typename: 'TaskStats', name: string, taskId: string, submission?: Maybe<{ __typename: 'TaskSubmissionResult', pointsAwarded?: Maybe<number>, pointsPossible?: Maybe<number>, graded: boolean, teacherComment?: Maybe<string> }> }> }> };

export type GetObjectiveByIdQueryVariables = Exact<{
  objectiveId: Scalars['String'];
}>;


export type GetObjectiveByIdQuery = { __typename: 'Query', objective: { __typename: 'Objective', objectiveId: string, objectiveName: string, description: string, targetId: string, targetName: string, course: string } };

export type GetStudentsByCourseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsByCourseQuery = { __typename: 'Query', students: Array<{ __typename: 'Student', studentId: string, firstName: string, lastName: string }> };

export type GetTaskObjectiveProgressQueryVariables = Exact<{
  taskId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
}>;


export type GetTaskObjectiveProgressQuery = { __typename: 'Query', getTaskObjectiveProgress: Array<{ __typename: 'TaskObjectiveProgress', mastery: Mastery, task: { __typename: 'Task', id: string, name: string }, objective: { __typename: 'Objective', objectiveId: string, objectiveName: string, description: string } }> };

export type GetMissionProgressQueryVariables = Exact<{
  courseId: Scalars['String'];
  username: Scalars['String'];
}>;


export type GetMissionProgressQuery = { __typename: 'Query', getAllMissionProgress: Array<{ __typename: 'MissionProgress', student: string, mission: { __typename: 'Mission', name: string, description: string, id: string, course: string }, progress: Array<{ __typename: 'TaskStats', name: string, taskId: string, username: string, submission?: Maybe<{ __typename: 'TaskSubmissionResult', graded: boolean, pointsAwarded?: Maybe<number>, pointsPossible?: Maybe<number> }> }> }> };

export type MissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type MissionsQuery = { __typename: 'Query', missions: Array<{ __typename: 'Mission', name: string, id: string, missionContent: Array<{ __typename: 'Task', name: string, id: string } | { __typename: 'SubMission' }> }> };

export type ObjectivesQueryVariables = Exact<{
  course: Scalars['String'];
}>;


export type ObjectivesQuery = { __typename: 'Query', objectives: Array<(
    { __typename: 'Objective' }
    & ObjectiveFieldsFragment
  )> };

export type ObjectiveFieldsFragment = { __typename: 'Objective', objectiveId: string, objectiveName: string, description: string, targetId: string, targetName: string, course: string };

export type ProgressOverviewQueryVariables = Exact<{
  course: Scalars['String'];
}>;


export type ProgressOverviewQuery = { __typename: 'Query', progressOverview: { __typename: 'ProgressOverview', userProgress: Array<(
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
    )> } };

export type UserProgressFieldsFragment = { __typename: 'UserProgress', userName: string, progress: Array<(
    { __typename: 'Progress' }
    & ProgressFieldsFragment
  )> };

export type ProgressFieldsFragment = { __typename: 'Progress', taskId: string, status: boolean };

export type CourseInfoFieldsFragment = { __typename: 'CourseInfo', courseId: string, courseName: string, instructorId: string };

export type TargetFieldsFragment = { __typename: 'Target', targetName: string, objectives: Array<(
    { __typename: 'Objective' }
    & ProgressObjectiveFieldsFragment
  )> };

export type MissionFieldsFragment = { __typename: 'Mission', id: string, name: string, missionContent: Array<(
    { __typename: 'Task' }
    & MissionContentFields_Task_Fragment
  ) | (
    { __typename: 'SubMission' }
    & MissionContentFields_SubMission_Fragment
  )> };

type MissionContentFields_Task_Fragment = (
  { __typename: 'Task' }
  & TaskFieldsFragment
);

type MissionContentFields_SubMission_Fragment = { __typename: 'SubMission', id: string, name: string };

export type MissionContentFieldsFragment = MissionContentFields_Task_Fragment | MissionContentFields_SubMission_Fragment;

export type ProgressObjectiveFieldsFragment = { __typename: 'Objective', objectiveId: string, objectiveName: string, tasks: Array<(
    { __typename: 'Task' }
    & TaskFieldsFragment
  )> };

export type TaskFieldsFragment = { __typename: 'Task', id: string, name: string };

export type GetCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = { __typename: 'Query', courses: Array<(
    { __typename: 'CourseInfo' }
    & CourseInfoFieldsFragment
  )> };

export type GetTargetProgressQueryVariables = Exact<{
  courseId: Scalars['String'];
  username: Scalars['String'];
}>;


export type GetTargetProgressQuery = { __typename: 'Query', getAllTargetProgress: Array<{ __typename: 'TargetProgress', student: string, target: (
      { __typename: 'Target' }
      & TargetProgressFieldsFragment
    ), objectives: Array<(
      { __typename: 'ObjectiveProgress' }
      & ObjectiveProgressFieldsFragment
    )> }> };

export type TargetProgressFieldsFragment = { __typename: 'Target', targetName: string };

export type ObjectiveProgressFieldsFragment = { __typename: 'ObjectiveProgress', objectiveId: string, objectiveName: string, tasks: Array<(
    { __typename: 'TaskObjectiveProgress' }
    & TaskObjectiveProgressFieldsFragment
  )> };

export type TaskObjectiveProgressFieldsFragment = { __typename: 'TaskObjectiveProgress', mastery: Mastery, task: { __typename: 'Task', name: string, id: string } };

export type EditTaskGradeMutationVariables = Exact<{
  taskGradeInput: TaskSubmissionGradeInput;
}>;


export type EditTaskGradeMutation = { __typename: 'Mutation', gradeTaskSubmission: { __typename: 'TaskSubmissionGrade', taskId: string } };

export type QuizBlockQueryVariables = Exact<{
  taskId: Scalars['String'];
  blockId: Scalars['String'];
}>;


export type QuizBlockQuery = { __typename: 'Query', quizblock: { __typename: 'QuizBlock', blockId: string, title: string, blockIndex: number, pageIndex: number, requiredScore: number, points: number, questions: Array<(
      { __typename: 'FrQuestion' }
      & FrQuestionFieldsFragment
    ) | (
      { __typename: 'McQuestion' }
      & McQuestionFieldsFragment
    )> } };

export type McQuestionFieldsFragment = { __typename: 'McQuestion', id: string, description: string, feedback?: Maybe<string>, points: number, answers: Array<number>, options: Array<{ __typename: 'QuestionOption', id: number, description: string }> };

export type FrQuestionFieldsFragment = { __typename: 'FrQuestion', id: string, description: string, feedback?: Maybe<string>, points: number, answer?: Maybe<string> };

export type AnswerFieldsFragment = { __typename: 'Answer', pointsAwarded?: Maybe<number>, questionId?: Maybe<string>, answer?: Maybe<string>, graded: boolean, teacherComment?: Maybe<string> };

export type TaskSubmissionResultQueryVariables = Exact<{
  taskId: Scalars['String'];
  username: Scalars['String'];
}>;


export type TaskSubmissionResultQuery = { __typename: 'Query', retrieveTaskSubmission?: Maybe<{ __typename: 'TaskSubmissionResult', graded: boolean, pointsAwarded?: Maybe<number>, pointsPossible?: Maybe<number>, teacherComment?: Maybe<string>, taskId: string, questionAndAnswers?: Maybe<Array<(
      { __typename: 'QuestionAndAnswer' }
      & QuestionAndAnswerFieldsFragment
    )>> }> };

export type QuestionAndAnswerFieldsFragment = { __typename: 'QuestionAndAnswer', question: (
    { __typename: 'FrQuestion' }
    & FrQuestionFieldsFragment
  ) | (
    { __typename: 'McQuestion' }
    & McQuestionFieldsFragment
  ), answer?: Maybe<(
    { __typename: 'Answer' }
    & AnswerFieldsFragment
  )> };

export type GetTaskByIdQueryVariables = Exact<{
  taskId: Scalars['String'];
}>;


export type GetTaskByIdQuery = { __typename: 'Query', task: { __typename: 'Task', id: string, name: string, instructions: string, points: number, startAt?: Maybe<any>, endAt?: Maybe<any>, dueDate?: Maybe<any>, missionId: string, missionIndex: number, subMissionId?: Maybe<string>, objectiveId?: Maybe<string>, targetId?: Maybe<string>, requirements: Array<{ __typename: 'RubricRequirement', id: string, description?: Maybe<string>, isComplete: boolean }>, pages: Array<(
      { __typename: 'Page' }
      & PageFieldsFragment
    )> } };

export type PageFieldsFragment = { __typename: 'Page', skippable?: Maybe<boolean>, blocks: Array<(
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
  )> };

export type TextBlockFieldsFragment = { __typename: 'TextBlock', title: string, contents?: Maybe<string>, fontSize?: Maybe<number> };

export type VideoBlockFieldsFragment = { __typename: 'VideoBlock', title: string, videoUrl: string };

export type ImageBlockFieldsFragment = { __typename: 'ImageBlock', imageUrl: string, title: string };

export type QuizBlockFieldsFragment = { __typename: 'QuizBlock', title: string, requiredScore: number, questions: Array<(
    { __typename: 'FrQuestion' }
    & FrQuestionFieldsFragment
  ) | (
    { __typename: 'McQuestion' }
    & McQuestionFieldsFragment
  )> };

export type McBlockFieldsFragment = { __typename: 'McBlock', title: string, blockId: string, blockIndex: number, pageIndex: number, points: number, stem: string, options: Array<string>, answers?: Maybe<Array<number>> };

export type FrBlockFieldsFragment = { __typename: 'FrBlock', title: string, blockId: string, blockIndex: number, pageIndex: number, points: number, stem: string, answer?: Maybe<string> };

export type CreateCourseMutationVariables = Exact<{
  course: CourseInput;
}>;


export type CreateCourseMutation = { __typename: 'Mutation', createCourse: { __typename: 'CourseInfo', courseId: string, courseName: string, instructorId: string } };

export const CmMissionFieldsFragmentDoc = gql`
    fragment CMMissionFields on Mission {
  name
  description
}
    `;
export const CmStudentFieldsFragmentDoc = gql`
    fragment CMStudentFields on StudentMissionMastery {
  student {
    studentId
    lastName
    firstName
  }
  currentTaskId
  currentTaskName
  level
  progress
}
    `;
export const ListingFieldsFragmentDoc = gql`
    fragment ListingFields on MarketListing {
  id
  listingName
  description
  image
  course
  listedDate
  price
  stock
  timesPurchased
}
    `;
export const StudentInfoFragmentDoc = gql`
    fragment StudentInfo on Student {
  firstName
  lastName
  points
  totalPointsSpent
  totalPointsAwarded
  studentId
  purchaseBlocked
  admin
}
    `;
export const ActivityInfoFragmentDoc = gql`
    fragment ActivityInfo on Activity {
  studentId
  activityDate
  note
  pointChange
}
    `;
export const ReceiptInfoFragmentDoc = gql`
    fragment ReceiptInfo on Receipt {
  studentId
  fulfilled
  listingName
  listingId
  course
  note
  purchaseDate
  pointsSpent
  receiptId
  quantity
  student {
    firstName
    points
    lastName
  }
}
    `;
export const TaskListTaskFieldsFragmentDoc = gql`
    fragment TaskListTaskFields on Task {
  id
  name
  instructions
}
    `;
export const SummaryTaskFieldsFragmentDoc = gql`
    fragment SummaryTaskFields on Task {
  id
  name
  instructions
  points
}
    `;
export const SummaryStudentResultFieldsFragmentDoc = gql`
    fragment SummaryStudentResultFields on StudentTaskSubmissionResult {
  studentId
  studentName
  submitted
  graded
  pointsAwarded
  teacherComment
}
    `;
export const CtmObjectiveFieldFragmentDoc = gql`
    fragment CTMObjectiveField on Objective {
  objectiveId
  objectiveName
}
    `;
export const CtmTargetFieldFragmentDoc = gql`
    fragment CTMTargetField on Target {
  targetId
  targetName
  objectives {
    ...CTMObjectiveField
  }
}
    ${CtmObjectiveFieldFragmentDoc}`;
export const CtmObjectiveMasteryFieldsFragmentDoc = gql`
    fragment CTMObjectiveMasteryFields on ObjectiveMastery {
  objectiveId
  mastery
}
    `;
export const CtmStudentObjectiveMasteryFieldsFragmentDoc = gql`
    fragment CTMStudentObjectiveMasteryFields on StudentObjectiveMastery {
  student {
    studentId
  }
  objectiveMasteryList {
    ...CTMObjectiveMasteryFields
  }
}
    ${CtmObjectiveMasteryFieldsFragmentDoc}`;
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
  courseName
  instructorId
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
    id
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
  graded
  teacherComment
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
  title
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
export const MarketListingsDocument = gql`
    query MarketListings($courseId: String!) {
  marketListings(course: $courseId) {
    ...ListingFields
  }
}
    ${ListingFieldsFragmentDoc}`;

/**
 * __useMarketListingsQuery__
 *
 * To run a query within a React component, call `useMarketListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketListingsQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useMarketListingsQuery(baseOptions: Apollo.QueryHookOptions<MarketListingsQuery, MarketListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketListingsQuery, MarketListingsQueryVariables>(MarketListingsDocument, options);
      }
export function useMarketListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketListingsQuery, MarketListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketListingsQuery, MarketListingsQueryVariables>(MarketListingsDocument, options);
        }
export type MarketListingsQueryHookResult = ReturnType<typeof useMarketListingsQuery>;
export type MarketListingsLazyQueryHookResult = ReturnType<typeof useMarketListingsLazyQuery>;
export type MarketListingsQueryResult = Apollo.QueryResult<MarketListingsQuery, MarketListingsQueryVariables>;
export const AddListingDocument = gql`
    mutation AddListing($course: String!, $input: MarketListingInput!) {
  addMarketListing(course: $course, listing: $input) {
    ...ListingFields
  }
}
    ${ListingFieldsFragmentDoc}`;
export type AddListingMutationFn = Apollo.MutationFunction<AddListingMutation, AddListingMutationVariables>;

/**
 * __useAddListingMutation__
 *
 * To run a mutation, you first call `useAddListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addListingMutation, { data, loading, error }] = useAddListingMutation({
 *   variables: {
 *      course: // value for 'course'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddListingMutation(baseOptions?: Apollo.MutationHookOptions<AddListingMutation, AddListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddListingMutation, AddListingMutationVariables>(AddListingDocument, options);
      }
export type AddListingMutationHookResult = ReturnType<typeof useAddListingMutation>;
export type AddListingMutationResult = Apollo.MutationResult<AddListingMutation>;
export type AddListingMutationOptions = Apollo.BaseMutationOptions<AddListingMutation, AddListingMutationVariables>;
export const EditListingDocument = gql`
    mutation EditListing($course: String!, $id: String!, $input: MarketListingInput!) {
  editMarketListing(course: $course, id: $id, listing: $input) {
    ...ListingFields
  }
}
    ${ListingFieldsFragmentDoc}`;
export type EditListingMutationFn = Apollo.MutationFunction<EditListingMutation, EditListingMutationVariables>;

/**
 * __useEditListingMutation__
 *
 * To run a mutation, you first call `useEditListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editListingMutation, { data, loading, error }] = useEditListingMutation({
 *   variables: {
 *      course: // value for 'course'
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditListingMutation(baseOptions?: Apollo.MutationHookOptions<EditListingMutation, EditListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditListingMutation, EditListingMutationVariables>(EditListingDocument, options);
      }
export type EditListingMutationHookResult = ReturnType<typeof useEditListingMutation>;
export type EditListingMutationResult = Apollo.MutationResult<EditListingMutation>;
export type EditListingMutationOptions = Apollo.BaseMutationOptions<EditListingMutation, EditListingMutationVariables>;
export const DeleteListingDocument = gql`
    mutation DeleteListing($course: String!, $id: String!) {
  removeMarketListing(course: $course, id: $id)
}
    `;
export type DeleteListingMutationFn = Apollo.MutationFunction<DeleteListingMutation, DeleteListingMutationVariables>;

/**
 * __useDeleteListingMutation__
 *
 * To run a mutation, you first call `useDeleteListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListingMutation, { data, loading, error }] = useDeleteListingMutation({
 *   variables: {
 *      course: // value for 'course'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteListingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteListingMutation, DeleteListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteListingMutation, DeleteListingMutationVariables>(DeleteListingDocument, options);
      }
export type DeleteListingMutationHookResult = ReturnType<typeof useDeleteListingMutation>;
export type DeleteListingMutationResult = Apollo.MutationResult<DeleteListingMutation>;
export type DeleteListingMutationOptions = Apollo.BaseMutationOptions<DeleteListingMutation, DeleteListingMutationVariables>;
export const DeleteStudentDocument = gql`
    mutation DeleteStudent($courseId: String!, $studentId: String!) {
  removeStudent(course: $courseId, student: $studentId)
}
    `;
export type DeleteStudentMutationFn = Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>;

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useDeleteStudentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStudentMutation, DeleteStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
      }
export type DeleteStudentMutationHookResult = ReturnType<typeof useDeleteStudentMutation>;
export type DeleteStudentMutationResult = Apollo.MutationResult<DeleteStudentMutation>;
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const AddStudentDocument = gql`
    mutation AddStudent($student: StudentInput!) {
  addStudent(student: $student) {
    ...StudentInfo
  }
}
    ${StudentInfoFragmentDoc}`;
export type AddStudentMutationFn = Apollo.MutationFunction<AddStudentMutation, AddStudentMutationVariables>;

/**
 * __useAddStudentMutation__
 *
 * To run a mutation, you first call `useAddStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStudentMutation, { data, loading, error }] = useAddStudentMutation({
 *   variables: {
 *      student: // value for 'student'
 *   },
 * });
 */
export function useAddStudentMutation(baseOptions?: Apollo.MutationHookOptions<AddStudentMutation, AddStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStudentMutation, AddStudentMutationVariables>(AddStudentDocument, options);
      }
export type AddStudentMutationHookResult = ReturnType<typeof useAddStudentMutation>;
export type AddStudentMutationResult = Apollo.MutationResult<AddStudentMutation>;
export type AddStudentMutationOptions = Apollo.BaseMutationOptions<AddStudentMutation, AddStudentMutationVariables>;
export const AwardStudentsPointsDocument = gql`
    mutation AwardStudentsPoints($studentIds: [String!]!, $courseId: String!, $points: Int!) {
  awardStudentsPoints(
    studentIds: $studentIds
    courseId: $courseId
    points: $points
  ) {
    ...StudentInfo
  }
}
    ${StudentInfoFragmentDoc}`;
export type AwardStudentsPointsMutationFn = Apollo.MutationFunction<AwardStudentsPointsMutation, AwardStudentsPointsMutationVariables>;

/**
 * __useAwardStudentsPointsMutation__
 *
 * To run a mutation, you first call `useAwardStudentsPointsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAwardStudentsPointsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [awardStudentsPointsMutation, { data, loading, error }] = useAwardStudentsPointsMutation({
 *   variables: {
 *      studentIds: // value for 'studentIds'
 *      courseId: // value for 'courseId'
 *      points: // value for 'points'
 *   },
 * });
 */
export function useAwardStudentsPointsMutation(baseOptions?: Apollo.MutationHookOptions<AwardStudentsPointsMutation, AwardStudentsPointsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AwardStudentsPointsMutation, AwardStudentsPointsMutationVariables>(AwardStudentsPointsDocument, options);
      }
export type AwardStudentsPointsMutationHookResult = ReturnType<typeof useAwardStudentsPointsMutation>;
export type AwardStudentsPointsMutationResult = Apollo.MutationResult<AwardStudentsPointsMutation>;
export type AwardStudentsPointsMutationOptions = Apollo.BaseMutationOptions<AwardStudentsPointsMutation, AwardStudentsPointsMutationVariables>;
export const StudentsDocument = gql`
    query Students($courseId: String!) {
  students(courseId: $courseId) {
    ...StudentInfo
  }
}
    ${StudentInfoFragmentDoc}`;

/**
 * __useStudentsQuery__
 *
 * To run a query within a React component, call `useStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useStudentsQuery(baseOptions: Apollo.QueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
      }
export function useStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
        }
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>;
export type StudentsQueryResult = Apollo.QueryResult<StudentsQuery, StudentsQueryVariables>;
export const StudentDocument = gql`
    query Student($courseId: String!, $studentId: String!) {
  student(courseId: $courseId, studentId: $studentId) {
    ...StudentInfo
  }
}
    ${StudentInfoFragmentDoc}`;

/**
 * __useStudentQuery__
 *
 * To run a query within a React component, call `useStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useStudentQuery(baseOptions: Apollo.QueryHookOptions<StudentQuery, StudentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentQuery, StudentQueryVariables>(StudentDocument, options);
      }
export function useStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentQuery, StudentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentQuery, StudentQueryVariables>(StudentDocument, options);
        }
export type StudentQueryHookResult = ReturnType<typeof useStudentQuery>;
export type StudentLazyQueryHookResult = ReturnType<typeof useStudentLazyQuery>;
export type StudentQueryResult = Apollo.QueryResult<StudentQuery, StudentQueryVariables>;
export const PurchaseDocument = gql`
    mutation Purchase($course: String!, $listingId: String!, $quantity: Int!, $note: String!) {
  purchase(
    course: $course
    listingId: $listingId
    quantity: $quantity
    note: $note
  ) {
    ...ReceiptInfo
  }
}
    ${ReceiptInfoFragmentDoc}`;
export type PurchaseMutationFn = Apollo.MutationFunction<PurchaseMutation, PurchaseMutationVariables>;

/**
 * __usePurchaseMutation__
 *
 * To run a mutation, you first call `usePurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [purchaseMutation, { data, loading, error }] = usePurchaseMutation({
 *   variables: {
 *      course: // value for 'course'
 *      listingId: // value for 'listingId'
 *      quantity: // value for 'quantity'
 *      note: // value for 'note'
 *   },
 * });
 */
export function usePurchaseMutation(baseOptions?: Apollo.MutationHookOptions<PurchaseMutation, PurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PurchaseMutation, PurchaseMutationVariables>(PurchaseDocument, options);
      }
export type PurchaseMutationHookResult = ReturnType<typeof usePurchaseMutation>;
export type PurchaseMutationResult = Apollo.MutationResult<PurchaseMutation>;
export type PurchaseMutationOptions = Apollo.BaseMutationOptions<PurchaseMutation, PurchaseMutationVariables>;
export const UnfulfilledDocument = gql`
    query Unfulfilled($course: String!) {
  unfulfilledPurchases(course: $course) {
    ...ReceiptInfo
  }
}
    ${ReceiptInfoFragmentDoc}`;

/**
 * __useUnfulfilledQuery__
 *
 * To run a query within a React component, call `useUnfulfilledQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnfulfilledQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnfulfilledQuery({
 *   variables: {
 *      course: // value for 'course'
 *   },
 * });
 */
export function useUnfulfilledQuery(baseOptions: Apollo.QueryHookOptions<UnfulfilledQuery, UnfulfilledQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UnfulfilledQuery, UnfulfilledQueryVariables>(UnfulfilledDocument, options);
      }
export function useUnfulfilledLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UnfulfilledQuery, UnfulfilledQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UnfulfilledQuery, UnfulfilledQueryVariables>(UnfulfilledDocument, options);
        }
export type UnfulfilledQueryHookResult = ReturnType<typeof useUnfulfilledQuery>;
export type UnfulfilledLazyQueryHookResult = ReturnType<typeof useUnfulfilledLazyQuery>;
export type UnfulfilledQueryResult = Apollo.QueryResult<UnfulfilledQuery, UnfulfilledQueryVariables>;
export const RecentDocument = gql`
    query Recent($course: String!, $fetch: Int!) {
  recentPurchases(course: $course, fetch: $fetch) {
    ...ReceiptInfo
  }
}
    ${ReceiptInfoFragmentDoc}`;

/**
 * __useRecentQuery__
 *
 * To run a query within a React component, call `useRecentQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentQuery({
 *   variables: {
 *      course: // value for 'course'
 *      fetch: // value for 'fetch'
 *   },
 * });
 */
export function useRecentQuery(baseOptions: Apollo.QueryHookOptions<RecentQuery, RecentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentQuery, RecentQueryVariables>(RecentDocument, options);
      }
export function useRecentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentQuery, RecentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentQuery, RecentQueryVariables>(RecentDocument, options);
        }
export type RecentQueryHookResult = ReturnType<typeof useRecentQuery>;
export type RecentLazyQueryHookResult = ReturnType<typeof useRecentLazyQuery>;
export type RecentQueryResult = Apollo.QueryResult<RecentQuery, RecentQueryVariables>;
export const FulfillDocument = gql`
    mutation Fulfill($receiptId: String!, $course: String!, $fulfilled: Boolean!) {
  fulfillPurchase(receiptId: $receiptId, course: $course, fulfilled: $fulfilled) {
    ...ReceiptInfo
  }
}
    ${ReceiptInfoFragmentDoc}`;
export type FulfillMutationFn = Apollo.MutationFunction<FulfillMutation, FulfillMutationVariables>;

/**
 * __useFulfillMutation__
 *
 * To run a mutation, you first call `useFulfillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFulfillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fulfillMutation, { data, loading, error }] = useFulfillMutation({
 *   variables: {
 *      receiptId: // value for 'receiptId'
 *      course: // value for 'course'
 *      fulfilled: // value for 'fulfilled'
 *   },
 * });
 */
export function useFulfillMutation(baseOptions?: Apollo.MutationHookOptions<FulfillMutation, FulfillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FulfillMutation, FulfillMutationVariables>(FulfillDocument, options);
      }
export type FulfillMutationHookResult = ReturnType<typeof useFulfillMutation>;
export type FulfillMutationResult = Apollo.MutationResult<FulfillMutation>;
export type FulfillMutationOptions = Apollo.BaseMutationOptions<FulfillMutation, FulfillMutationVariables>;
export const RefundDocument = gql`
    mutation Refund($receiptId: String!, $course: String!) {
  refundPurchase(course: $course, receiptId: $receiptId)
}
    `;
export type RefundMutationFn = Apollo.MutationFunction<RefundMutation, RefundMutationVariables>;

/**
 * __useRefundMutation__
 *
 * To run a mutation, you first call `useRefundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refundMutation, { data, loading, error }] = useRefundMutation({
 *   variables: {
 *      receiptId: // value for 'receiptId'
 *      course: // value for 'course'
 *   },
 * });
 */
export function useRefundMutation(baseOptions?: Apollo.MutationHookOptions<RefundMutation, RefundMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefundMutation, RefundMutationVariables>(RefundDocument, options);
      }
export type RefundMutationHookResult = ReturnType<typeof useRefundMutation>;
export type RefundMutationResult = Apollo.MutationResult<RefundMutation>;
export type RefundMutationOptions = Apollo.BaseMutationOptions<RefundMutation, RefundMutationVariables>;
export const BlockPurchasesDocument = gql`
    mutation BlockPurchases($courseId: String!, $studentId: String!, $blocked: Boolean!) {
  blockStudentPurchases(course: $courseId, student: $studentId, blocked: $blocked) {
    ...StudentInfo
  }
}
    ${StudentInfoFragmentDoc}`;
export type BlockPurchasesMutationFn = Apollo.MutationFunction<BlockPurchasesMutation, BlockPurchasesMutationVariables>;

/**
 * __useBlockPurchasesMutation__
 *
 * To run a mutation, you first call `useBlockPurchasesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockPurchasesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockPurchasesMutation, { data, loading, error }] = useBlockPurchasesMutation({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      studentId: // value for 'studentId'
 *      blocked: // value for 'blocked'
 *   },
 * });
 */
export function useBlockPurchasesMutation(baseOptions?: Apollo.MutationHookOptions<BlockPurchasesMutation, BlockPurchasesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BlockPurchasesMutation, BlockPurchasesMutationVariables>(BlockPurchasesDocument, options);
      }
export type BlockPurchasesMutationHookResult = ReturnType<typeof useBlockPurchasesMutation>;
export type BlockPurchasesMutationResult = Apollo.MutationResult<BlockPurchasesMutation>;
export type BlockPurchasesMutationOptions = Apollo.BaseMutationOptions<BlockPurchasesMutation, BlockPurchasesMutationVariables>;
export const SetStudentAdminDocument = gql`
    mutation SetStudentAdmin($courseId: String!, $studentId: String!, $admin: Boolean!) {
  setStudentAdmin(course: $courseId, student: $studentId, admin: $admin) {
    ...StudentInfo
  }
}
    ${StudentInfoFragmentDoc}`;
export type SetStudentAdminMutationFn = Apollo.MutationFunction<SetStudentAdminMutation, SetStudentAdminMutationVariables>;

/**
 * __useSetStudentAdminMutation__
 *
 * To run a mutation, you first call `useSetStudentAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetStudentAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setStudentAdminMutation, { data, loading, error }] = useSetStudentAdminMutation({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      studentId: // value for 'studentId'
 *      admin: // value for 'admin'
 *   },
 * });
 */
export function useSetStudentAdminMutation(baseOptions?: Apollo.MutationHookOptions<SetStudentAdminMutation, SetStudentAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetStudentAdminMutation, SetStudentAdminMutationVariables>(SetStudentAdminDocument, options);
      }
export type SetStudentAdminMutationHookResult = ReturnType<typeof useSetStudentAdminMutation>;
export type SetStudentAdminMutationResult = Apollo.MutationResult<SetStudentAdminMutation>;
export type SetStudentAdminMutationOptions = Apollo.BaseMutationOptions<SetStudentAdminMutation, SetStudentAdminMutationVariables>;
export const StudentInfoDocument = gql`
    query StudentInfo($courseId: String!) {
  student(courseId: $courseId) {
    ...StudentInfo
  }
}
    ${StudentInfoFragmentDoc}`;

/**
 * __useStudentInfoQuery__
 *
 * To run a query within a React component, call `useStudentInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentInfoQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useStudentInfoQuery(baseOptions: Apollo.QueryHookOptions<StudentInfoQuery, StudentInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentInfoQuery, StudentInfoQueryVariables>(StudentInfoDocument, options);
      }
export function useStudentInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentInfoQuery, StudentInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentInfoQuery, StudentInfoQueryVariables>(StudentInfoDocument, options);
        }
export type StudentInfoQueryHookResult = ReturnType<typeof useStudentInfoQuery>;
export type StudentInfoLazyQueryHookResult = ReturnType<typeof useStudentInfoLazyQuery>;
export type StudentInfoQueryResult = Apollo.QueryResult<StudentInfoQuery, StudentInfoQueryVariables>;
export const RecentActivityDocument = gql`
    query RecentActivity($courseId: String!, $fetch: Int!) {
  recentActivity(course: $courseId, fetch: $fetch) {
    ...ActivityInfo
  }
}
    ${ActivityInfoFragmentDoc}`;

/**
 * __useRecentActivityQuery__
 *
 * To run a query within a React component, call `useRecentActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentActivityQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      fetch: // value for 'fetch'
 *   },
 * });
 */
export function useRecentActivityQuery(baseOptions: Apollo.QueryHookOptions<RecentActivityQuery, RecentActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentActivityQuery, RecentActivityQueryVariables>(RecentActivityDocument, options);
      }
export function useRecentActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentActivityQuery, RecentActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentActivityQuery, RecentActivityQueryVariables>(RecentActivityDocument, options);
        }
export type RecentActivityQueryHookResult = ReturnType<typeof useRecentActivityQuery>;
export type RecentActivityLazyQueryHookResult = ReturnType<typeof useRecentActivityLazyQuery>;
export type RecentActivityQueryResult = Apollo.QueryResult<RecentActivityQuery, RecentActivityQueryVariables>;
export const UserDocument = gql`
    query User {
  getUser {
    id
    name
    email
    role
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const TaskListDocument = gql`
    query TaskList($course: String!) {
  tasksByCourse(course: $course) {
    ...TaskListTaskFields
  }
}
    ${TaskListTaskFieldsFragmentDoc}`;

/**
 * __useTaskListQuery__
 *
 * To run a query within a React component, call `useTaskListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskListQuery({
 *   variables: {
 *      course: // value for 'course'
 *   },
 * });
 */
export function useTaskListQuery(baseOptions: Apollo.QueryHookOptions<TaskListQuery, TaskListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskListQuery, TaskListQueryVariables>(TaskListDocument, options);
      }
export function useTaskListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskListQuery, TaskListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskListQuery, TaskListQueryVariables>(TaskListDocument, options);
        }
export type TaskListQueryHookResult = ReturnType<typeof useTaskListQuery>;
export type TaskListLazyQueryHookResult = ReturnType<typeof useTaskListLazyQuery>;
export type TaskListQueryResult = Apollo.QueryResult<TaskListQuery, TaskListQueryVariables>;
export const TaskSubmissionSummaryDocument = gql`
    query TaskSubmissionSummary($course: String!, $taskId: String!) {
  taskSubmissionSummary(course: $course, taskId: $taskId) {
    task {
      ...SummaryTaskFields
    }
    results {
      ...SummaryStudentResultFields
    }
  }
}
    ${SummaryTaskFieldsFragmentDoc}
${SummaryStudentResultFieldsFragmentDoc}`;

/**
 * __useTaskSubmissionSummaryQuery__
 *
 * To run a query within a React component, call `useTaskSubmissionSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskSubmissionSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskSubmissionSummaryQuery({
 *   variables: {
 *      course: // value for 'course'
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskSubmissionSummaryQuery(baseOptions: Apollo.QueryHookOptions<TaskSubmissionSummaryQuery, TaskSubmissionSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskSubmissionSummaryQuery, TaskSubmissionSummaryQueryVariables>(TaskSubmissionSummaryDocument, options);
      }
export function useTaskSubmissionSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskSubmissionSummaryQuery, TaskSubmissionSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskSubmissionSummaryQuery, TaskSubmissionSummaryQueryVariables>(TaskSubmissionSummaryDocument, options);
        }
export type TaskSubmissionSummaryQueryHookResult = ReturnType<typeof useTaskSubmissionSummaryQuery>;
export type TaskSubmissionSummaryLazyQueryHookResult = ReturnType<typeof useTaskSubmissionSummaryLazyQuery>;
export type TaskSubmissionSummaryQueryResult = Apollo.QueryResult<TaskSubmissionSummaryQuery, TaskSubmissionSummaryQueryVariables>;
export const ClassTargetMasteryDocument = gql`
    query ClassTargetMastery($targetId: String!) {
  classTargetMastery(targetId: $targetId) {
    target {
      ...CTMTargetField
    }
    studentObjectiveMasteryList {
      ...CTMStudentObjectiveMasteryFields
    }
  }
}
    ${CtmTargetFieldFragmentDoc}
${CtmStudentObjectiveMasteryFieldsFragmentDoc}`;

/**
 * __useClassTargetMasteryQuery__
 *
 * To run a query within a React component, call `useClassTargetMasteryQuery` and pass it any options that fit your needs.
 * When your component renders, `useClassTargetMasteryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClassTargetMasteryQuery({
 *   variables: {
 *      targetId: // value for 'targetId'
 *   },
 * });
 */
export function useClassTargetMasteryQuery(baseOptions: Apollo.QueryHookOptions<ClassTargetMasteryQuery, ClassTargetMasteryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClassTargetMasteryQuery, ClassTargetMasteryQueryVariables>(ClassTargetMasteryDocument, options);
      }
export function useClassTargetMasteryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClassTargetMasteryQuery, ClassTargetMasteryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClassTargetMasteryQuery, ClassTargetMasteryQueryVariables>(ClassTargetMasteryDocument, options);
        }
export type ClassTargetMasteryQueryHookResult = ReturnType<typeof useClassTargetMasteryQuery>;
export type ClassTargetMasteryLazyQueryHookResult = ReturnType<typeof useClassTargetMasteryLazyQuery>;
export type ClassTargetMasteryQueryResult = Apollo.QueryResult<ClassTargetMasteryQuery, ClassTargetMasteryQueryVariables>;
export const GetMissionProgressForEnrolledDocument = gql`
    query GetMissionProgressForEnrolled($courseId: String!, $missionId: String!) {
  getAllEnrolledStudentMissionProgress(courseId: $courseId, missionId: $missionId) {
    student
    progress {
      name
      taskId
      submission {
        pointsAwarded
        pointsPossible
        graded
        teacherComment
      }
    }
  }
}
    `;

/**
 * __useGetMissionProgressForEnrolledQuery__
 *
 * To run a query within a React component, call `useGetMissionProgressForEnrolledQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMissionProgressForEnrolledQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMissionProgressForEnrolledQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      missionId: // value for 'missionId'
 *   },
 * });
 */
export function useGetMissionProgressForEnrolledQuery(baseOptions: Apollo.QueryHookOptions<GetMissionProgressForEnrolledQuery, GetMissionProgressForEnrolledQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMissionProgressForEnrolledQuery, GetMissionProgressForEnrolledQueryVariables>(GetMissionProgressForEnrolledDocument, options);
      }
export function useGetMissionProgressForEnrolledLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMissionProgressForEnrolledQuery, GetMissionProgressForEnrolledQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMissionProgressForEnrolledQuery, GetMissionProgressForEnrolledQueryVariables>(GetMissionProgressForEnrolledDocument, options);
        }
export type GetMissionProgressForEnrolledQueryHookResult = ReturnType<typeof useGetMissionProgressForEnrolledQuery>;
export type GetMissionProgressForEnrolledLazyQueryHookResult = ReturnType<typeof useGetMissionProgressForEnrolledLazyQuery>;
export type GetMissionProgressForEnrolledQueryResult = Apollo.QueryResult<GetMissionProgressForEnrolledQuery, GetMissionProgressForEnrolledQueryVariables>;
export const GetObjectiveByIdDocument = gql`
    query GetObjectiveById($objectiveId: String!) {
  objective(objectiveId: $objectiveId) {
    objectiveId
    objectiveName
    description
    targetId
    targetName
    course
  }
}
    `;

/**
 * __useGetObjectiveByIdQuery__
 *
 * To run a query within a React component, call `useGetObjectiveByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetObjectiveByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetObjectiveByIdQuery({
 *   variables: {
 *      objectiveId: // value for 'objectiveId'
 *   },
 * });
 */
export function useGetObjectiveByIdQuery(baseOptions: Apollo.QueryHookOptions<GetObjectiveByIdQuery, GetObjectiveByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetObjectiveByIdQuery, GetObjectiveByIdQueryVariables>(GetObjectiveByIdDocument, options);
      }
export function useGetObjectiveByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetObjectiveByIdQuery, GetObjectiveByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetObjectiveByIdQuery, GetObjectiveByIdQueryVariables>(GetObjectiveByIdDocument, options);
        }
export type GetObjectiveByIdQueryHookResult = ReturnType<typeof useGetObjectiveByIdQuery>;
export type GetObjectiveByIdLazyQueryHookResult = ReturnType<typeof useGetObjectiveByIdLazyQuery>;
export type GetObjectiveByIdQueryResult = Apollo.QueryResult<GetObjectiveByIdQuery, GetObjectiveByIdQueryVariables>;
export const GetStudentsByCourseDocument = gql`
    query GetStudentsByCourse {
  students(courseId: "Integrated Science") {
    studentId
    firstName
    lastName
  }
}
    `;

/**
 * __useGetStudentsByCourseQuery__
 *
 * To run a query within a React component, call `useGetStudentsByCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsByCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsByCourseQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsByCourseQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsByCourseQuery, GetStudentsByCourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsByCourseQuery, GetStudentsByCourseQueryVariables>(GetStudentsByCourseDocument, options);
      }
export function useGetStudentsByCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsByCourseQuery, GetStudentsByCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsByCourseQuery, GetStudentsByCourseQueryVariables>(GetStudentsByCourseDocument, options);
        }
export type GetStudentsByCourseQueryHookResult = ReturnType<typeof useGetStudentsByCourseQuery>;
export type GetStudentsByCourseLazyQueryHookResult = ReturnType<typeof useGetStudentsByCourseLazyQuery>;
export type GetStudentsByCourseQueryResult = Apollo.QueryResult<GetStudentsByCourseQuery, GetStudentsByCourseQueryVariables>;
export const GetTaskObjectiveProgressDocument = gql`
    query GetTaskObjectiveProgress($taskId: String!, $username: String) {
  getTaskObjectiveProgress(taskId: $taskId, username: $username) {
    task {
      id
      name
    }
    objective {
      objectiveId
      objectiveName
      description
    }
    mastery
  }
}
    `;

/**
 * __useGetTaskObjectiveProgressQuery__
 *
 * To run a query within a React component, call `useGetTaskObjectiveProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskObjectiveProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskObjectiveProgressQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetTaskObjectiveProgressQuery(baseOptions: Apollo.QueryHookOptions<GetTaskObjectiveProgressQuery, GetTaskObjectiveProgressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaskObjectiveProgressQuery, GetTaskObjectiveProgressQueryVariables>(GetTaskObjectiveProgressDocument, options);
      }
export function useGetTaskObjectiveProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskObjectiveProgressQuery, GetTaskObjectiveProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaskObjectiveProgressQuery, GetTaskObjectiveProgressQueryVariables>(GetTaskObjectiveProgressDocument, options);
        }
export type GetTaskObjectiveProgressQueryHookResult = ReturnType<typeof useGetTaskObjectiveProgressQuery>;
export type GetTaskObjectiveProgressLazyQueryHookResult = ReturnType<typeof useGetTaskObjectiveProgressLazyQuery>;
export type GetTaskObjectiveProgressQueryResult = Apollo.QueryResult<GetTaskObjectiveProgressQuery, GetTaskObjectiveProgressQueryVariables>;
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
      username
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
export const MissionsDocument = gql`
    query Missions {
  missions(course: "Integrated Science") {
    name
    id
    missionContent {
      ... on Task {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useMissionsQuery__
 *
 * To run a query within a React component, call `useMissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMissionsQuery(baseOptions?: Apollo.QueryHookOptions<MissionsQuery, MissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MissionsQuery, MissionsQueryVariables>(MissionsDocument, options);
      }
export function useMissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MissionsQuery, MissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MissionsQuery, MissionsQueryVariables>(MissionsDocument, options);
        }
export type MissionsQueryHookResult = ReturnType<typeof useMissionsQuery>;
export type MissionsLazyQueryHookResult = ReturnType<typeof useMissionsLazyQuery>;
export type MissionsQueryResult = Apollo.QueryResult<MissionsQuery, MissionsQueryVariables>;
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
    query GetCourses {
  courses {
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
 *   },
 * });
 */
export function useGetCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
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
export const EditTaskGradeDocument = gql`
    mutation editTaskGrade($taskGradeInput: TaskSubmissionGradeInput!) {
  gradeTaskSubmission(grade: $taskGradeInput) {
    taskId
  }
}
    `;
export type EditTaskGradeMutationFn = Apollo.MutationFunction<EditTaskGradeMutation, EditTaskGradeMutationVariables>;

/**
 * __useEditTaskGradeMutation__
 *
 * To run a mutation, you first call `useEditTaskGradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTaskGradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTaskGradeMutation, { data, loading, error }] = useEditTaskGradeMutation({
 *   variables: {
 *      taskGradeInput: // value for 'taskGradeInput'
 *   },
 * });
 */
export function useEditTaskGradeMutation(baseOptions?: Apollo.MutationHookOptions<EditTaskGradeMutation, EditTaskGradeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTaskGradeMutation, EditTaskGradeMutationVariables>(EditTaskGradeDocument, options);
      }
export type EditTaskGradeMutationHookResult = ReturnType<typeof useEditTaskGradeMutation>;
export type EditTaskGradeMutationResult = Apollo.MutationResult<EditTaskGradeMutation>;
export type EditTaskGradeMutationOptions = Apollo.BaseMutationOptions<EditTaskGradeMutation, EditTaskGradeMutationVariables>;
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
    query TaskSubmissionResult($taskId: String!, $username: String!) {
  retrieveTaskSubmission(taskId: $taskId, username: $username) {
    graded
    pointsAwarded
    pointsPossible
    questionAndAnswers {
      ...QuestionAndAnswerFields
    }
    teacherComment
    taskId
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
 *      username: // value for 'username'
 *   },
 * });
 */
export function useTaskSubmissionResultQuery(baseOptions: Apollo.QueryHookOptions<TaskSubmissionResultQuery, TaskSubmissionResultQueryVariables>) {
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
      isComplete
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
export const CreateCourseDocument = gql`
    mutation CreateCourse($course: CourseInput!) {
  createCourse(course: $course) {
    courseId
    courseName
    instructorId
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      course: // value for 'course'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;