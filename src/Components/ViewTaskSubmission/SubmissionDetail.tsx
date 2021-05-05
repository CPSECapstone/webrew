import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from '@material-ui/core';
import { QuizBlockSubmission, StudentAnswer } from '../../interfaces/QuizBlockSubmission';
import {
   QuizBlockQuery,
   QuestionOption,
   McQuestionFieldsFragment,
   FrQuestionFieldsFragment,
} from '../../__generated__/types';

function renderQuestionOptions(question: McQuestionFieldsFragment, studentAnswer: StudentAnswer) {
   const correctChoices = new Set<number>(question.answers);

   return question.options.map((option: QuestionOption) => {
      const studentChoices = new Set<number>(studentAnswer.choices);

      let styleName = correctChoices.has(option.id) ? 'option-correct' : '';
      if (studentChoices.has(option.id) && !correctChoices.has(option.id)) {
         styleName = 'option-incorrect';
      }

      return (
         <FormControlLabel
            value={option.description}
            disabled
            className={styleName}
            control={<Radio checked={studentChoices.has(option.id)} />}
            label={option.description}
         />
      );
   });
}

type QuestionFieldsFragment = McQuestionFieldsFragment | FrQuestionFieldsFragment;

function renderQuestions(
   questions: Array<QuestionFieldsFragment>,
   submission: QuizBlockSubmission
) {
   const answerMap = new Map<string, StudentAnswer>();
   submission.studentAnswers.forEach((answer) => {
      answerMap.set(answer.questionId, answer);
   });

   const defaultAnswer: StudentAnswer = {
      questionId: 'question',
      result: false,
      choices: [0],
   };

   return questions.map((question: QuestionFieldsFragment, index: number) => {
      // #render multiple choice question
      if (question.__typename === 'McQuestion') {
         const answer = answerMap.get(question.id) || defaultAnswer;
         const feedback = answer.result ? "That's right!" : 'Not quite.';

         return (
            <div className="question" key={question.id}>
               <p className="question-desc">
                  <span className="question-index">{index + 1}</span>
                  {question.description}
               </p>
               <RadioGroup>{renderQuestionOptions(question, answer)}</RadioGroup>
               <p className="feedback">{feedback}</p>
            </div>
         );
      }

      return <p>Unknown Question Type `${question.__typename}`</p>;
   });
}

type Props = {
   quizblockQuery: QuizBlockQuery;
   quizblockSubmission: QuizBlockSubmission;
};

function SubmissionDetail({ quizblockQuery, quizblockSubmission }: Props) {
   const { quizblock } = quizblockQuery;

   return (
      <div className="quizblock">
         <div className="quizblock-header">
            <h2>Submission Details</h2>
            <h3 className="quizblock-title">{quizblock.title}</h3>
            <p className="quizblock-points">Total Points: {quizblock.points}</p>
            <p>Required Score: {quizblock.requiredScore}</p>
            <p>
               <span className="student-name">Student Name:</span>
               {quizblockSubmission.student}
            </p>
            <p>
               The student got
               <span className="student-points">{quizblockSubmission.points}</span>
               {` out of ${quizblock.points}.`}
            </p>
         </div>
         <div className="quizblock-body">
            {renderQuestions(quizblock.questions, quizblockSubmission)}
         </div>
      </div>
   );
}

export default SubmissionDetail;
