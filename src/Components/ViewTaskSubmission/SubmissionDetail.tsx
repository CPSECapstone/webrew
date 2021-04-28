import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from '@material-ui/core';
import { Question, Option, QuizBlock } from '../../interfaces/QuizBlock';
import { QuizBlockSubmission, StudentAnswer } from '../../interfaces/QuizBlockSubmission';

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
      const feedback = answer.result
         ? `That's right! ${question.feedback}`
         : `Not quite. ${question.feedback}`;
      return (
         <div className="question" key={question.id}>
            <div className="question-desc">{question.description}</div>
            <RadioGroup>{renderQuestionOptions(question, answer)}</RadioGroup>
            <div className="feedback">{feedback}</div>
         </div>
      );
   });
}

type SubmissionDetailProps = {
   quizblock: QuizBlock;
   quizblockSubmission: QuizBlockSubmission;
};

const SubmissionDetail = ({ quizblock, quizblockSubmission }: SubmissionDetailProps) => {
   return (
      <div className="quizblock">
         <h2>Submission Details</h2>
         <h3 className="quizblock-title">{quizblock.title}</h3>
         <p className="quizblock-points">Total Points: {quizblock.points}</p>
         <p>Required Score: {quizblock.requiredScore}</p>
         {renderQuestions(quizblock.questions, quizblockSubmission)}
      </div>
   );
};

export default SubmissionDetail;
