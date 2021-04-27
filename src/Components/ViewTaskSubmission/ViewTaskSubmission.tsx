import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_LEARNING_OBJECTIVE } from '../../queries/LearningObjectiveQueries';
import { LearningObjective } from '../../interfaces/LearningObjective';
import { LearningObjectives } from '../../interfaces/LearningObjectives';
import { Question, Option, QuizBlockData } from '../../interfaces/QuizBlock';
import { QuizBlockSubmissionData } from '../../interfaces/QuizBlockSubmission';
import { GET_QUIZBLOCK } from '../../queries/quizblock';
import { GET_QUIZBLOCK_SUBMISSION } from '../../queries/quizblockSubmission';
import './ViewTaskSubmission.css';

function ViewTaskSubmission() {
   const { data: quizblockData } = useQuery<QuizBlockData>(GET_QUIZBLOCK);
   const { data: quizblockSubmissionData } = useQuery<QuizBlockSubmissionData>(
      GET_QUIZBLOCK_SUBMISSION
   );
   // const { data: learningObjectives } = useQuery<LearningObjectives>(GET_LEARNING_OBJECTIVE);

   // if (!learningObjectives) {
   //    return <>Learning Objective Undefined</>;
   // }
   console.log(quizblockData);
   console.log(quizblockSubmissionData);
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
         <div className="objective">Learning Objective: {objective.description}</div>
      ));
   }

   function renderQuestionOptions(question: Question, answer: boolean) {
      return question.options.map((option: Option) => {
         return (
            <FormControlLabel
               value={option.description}
               disabled
               control={<Radio checked={answer} />}
               label={option.description}
            />
         );
      });
   }

   function renderFeedback(question: Question, answer: boolean) {
      const feedback = answer
         ? `That's right! ${question.feedback}`
         : `Not quite. ${question.feedback}`;
      return feedback;
   }

   function renderQuestions(questions: Question[]) {
      return questions.map((question) => {
         return (
            <div className="question">
               <div className="question-desc">{question.description}</div>
               <RadioGroup>{renderQuestionOptions(question, true)}</RadioGroup>
               <div className="feedback">{renderFeedback(question, true)}</div>
            </div>
         );
      });
   }

   return (
      <div className="view-task-submission">
         {/* <div className="objectives">{renderLearningObjectives(learningObjectives)}</div> */}
         <div className="quizblock">
            <div>{quizblock.title}</div>
            <div>Total Points: {quizblock.points}</div>
            <div>Required Score: {quizblock.requiredScore}</div>
            {renderQuestions(quizblock.questions)}
         </div>
      </div>
   );
}

export default ViewTaskSubmission;
