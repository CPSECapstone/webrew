import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from '@material-ui/core';
import { Question, Option, QuizBlock } from '../../interfaces/QuizBlock';
import { QuizBlockSubmission, StudentAnswer } from '../../interfaces/QuizBlockSubmission';

function renderQuestionOptions(question: Question, studentAnswer: StudentAnswer) {
   const correctChoices = new Set<number>(question.answers);

   return question.options.map((option: Option) => {
      const studentChoices = new Set<number>(studentAnswer.choices);
      let styleName = correctChoices.has(option.id) ? 'option-correct' : '';
      if (studentChoices.has(option.id) && !correctChoices.has(option.id)) {
         styleName = 'option-incorrect';
      }

      return (
         <FormControlLabel
            key={option.id}
            value={option.description}
            disabled
            className={styleName}
            control={<Radio checked={studentChoices.has(option.id)} />}
            label={option.description}
         />
      );
   });
}

function renderQuestions(questions: Question[], submission: QuizBlockSubmission) {
   const answerMap = new Map<string, StudentAnswer>();
   submission.studentAnswers.forEach((answer) => {
      answerMap.set(answer.questionId, answer);
   });

   const defaultAnswer: StudentAnswer = {
      questionId: 'question',
      result: false,
      choices: [0],
   };

   return questions.map((question, index) => {
      const answer = answerMap.get(question.id) || defaultAnswer;
      const feedback = answer.result
         ? `That's right! ${question.feedback}`
         : `Not quite. ${question.feedback}`;
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
   });
}

type Props = {
   quizblock: QuizBlock;
   quizblockSubmission: QuizBlockSubmission;
};

function SubmissionDetail({ quizblock, quizblockSubmission }: Props) {
   return (
      <div className="quizblock">
         <h2>Submission Details</h2>
         <h3 className="quizblock-title">{quizblock.title}</h3>
         <p className="quizblock-points">Total Points: {quizblock.points}</p>
         <p>Required Score: {quizblock.requiredScore}</p>
         {renderQuestions(quizblock.questions, quizblockSubmission)}
      </div>
   );
}

export default SubmissionDetail;
