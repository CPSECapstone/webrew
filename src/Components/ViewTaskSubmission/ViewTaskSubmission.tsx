import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_LEARNING_OBJECTIVE } from '../../queries/LearningObjectiveQueries';
import { LearningObjectives } from '../../interfaces/LearningObjectives';
import { Question, Option, QuizBlockData } from '../../interfaces/QuizBlock';
import {
   QuizBlockSubmission,
   QuizBlockSubmissionData,
   StudentAnswer,
} from '../../interfaces/QuizBlockSubmission';
import { GET_QUIZBLOCK } from '../../queries/quizblock';
import { GET_QUIZBLOCK_SUBMISSION } from '../../queries/quizblockSubmission';
import './ViewTaskSubmission.css';

function ViewTaskSubmission() {
   const { data: quizblockData } = useQuery<QuizBlockData>(GET_QUIZBLOCK);
   const { data: quizblockSubmissionData } = useQuery<QuizBlockSubmissionData>(
      GET_QUIZBLOCK_SUBMISSION
   );
   const { data: learningObjectives } = useQuery<LearningObjectives>(GET_LEARNING_OBJECTIVE);

   if (!learningObjectives) {
      return <>Learning Objective Undefined</>;
   }
   if (!quizblockData) {
      return <p>quizblock undefined</p>;
   }
   if (!quizblockSubmissionData) {
      return <p>quizblockSubmission undefined</p>;
   }

   const { quizblock } = quizblockData;
   const { quizblockSubmission } = quizblockSubmissionData;

   function renderLearningObjectives(objectives: LearningObjectives) {
      return objectives.learningObjectives.map((objective) => (
         <div className="objective" key={objective.id}>
            Learning Objective: {objective.description}
         </div>
      ));
   }

   function renderQuestionOptions(question: Question, answer: StudentAnswer) {
      return question.options.map((option: Option, index: number) => {
         return (
            <FormControlLabel
               key={option.id}
               value={option.description}
               disabled
               control={<Radio checked={answer.choices[0] === index} />}
               label={option.description}
            />
         );
      });
   }

   function renderFeedback(question: Question, answer: StudentAnswer) {
      const feedback = answer.result
         ? `That's right! ${question.feedback}`
         : `Not quite. ${question.feedback}`;
      return feedback;
   }

   function renderQuestions(questions: Question[], submission: QuizBlockSubmission) {
      const answerMap = new Map<string, StudentAnswer>();
      submission.studentAnswers.forEach((answer) => {
         answerMap.set(answer.questionId, answer);
      });

      const defaulAnswer: StudentAnswer = {
         questionId: 'question',
         result: false,
         choices: [0],
      };

      return questions.map((question) => {
         const answer = answerMap.get(question.id) || defaulAnswer;
         return (
            <div className="question" key={question.id}>
               <div className="question-desc">{question.description}</div>
               <RadioGroup>{renderQuestionOptions(question, answer)}</RadioGroup>
               <div className="feedback">{renderFeedback(question, answer)}</div>
            </div>
         );
      });
   }

   return (
      <div className="view-task-submission">
         <div className="objectives">{renderLearningObjectives(learningObjectives)}</div>
         <div className="quizblock">
            <div>{quizblock.title}</div>
            <div>Total Points: {quizblock.points}</div>
            <div>Required Score: {quizblock.requiredScore}</div>
            {renderQuestions(quizblock.questions, quizblockSubmission)}
         </div>
      </div>
   );
}

export default ViewTaskSubmission;
