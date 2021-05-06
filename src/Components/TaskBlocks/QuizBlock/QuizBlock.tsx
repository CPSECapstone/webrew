import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Radio } from '@material-ui/core';
import {
   QuestionOption,
   McQuestionFieldsFragment,
   FrQuestionFieldsFragment,
} from '../../../__generated__/types';
import '../TaskBlock.css';

function renderQuestionOptions(question: McQuestionFieldsFragment) {
   const correctChoices = new Set<number>(question.answers);

   return question.options.map((option: QuestionOption) => {
      const styleName = correctChoices.has(option.id) ? 'option-correct' : '';

      return (
         <FormControlLabel
            value={option.description}
            disabled
            className={styleName}
            control={<Radio />}
            label={option.description}
            key={option.id}
         />
      );
   });
}

type QuestionFieldsFragment = McQuestionFieldsFragment | FrQuestionFieldsFragment;

function renderQuestions(questions: Array<QuestionFieldsFragment>) {
   return questions.map((question: QuestionFieldsFragment, index: number) => {
      // #render multiple choice question
      switch (question.__typename) {
         case 'FrQuestion': {
            return (
               <div className="col-12" key={question.id}>
                  <p className="question-desc">
                     <span className="question-index">{index + 1}</span>
                     {question.description}
                  </p>
                  <InputGroup className="mb-3">
                     <FormControl aria-label="Type your answer here." />
                  </InputGroup>
               </div>
            );
         }
         case 'McQuestion': {
            const mcQ = question;
            return (
               <div className="col-12" key={mcQ.id}>
                  <p className="question-desc">
                     <span className="question-index">{index + 1}</span>
                     {mcQ.description}
                  </p>
                  <RadioGroup>{renderQuestionOptions(mcQ)}</RadioGroup>
               </div>
            );
         }
         default:
            return <></>;
      }
   });
}

function QuizBlock({
   title,
   questions,
   reqScore,
}: {
   title: string;
   questions: QuestionFieldsFragment[];
   reqScore: number;
}) {
   return (
      <div className="row">
         <div className="col-md-12 py-3 my-2">
            <h2 className="text-left">
               <b>{title}</b>
            </h2>
            <p className="text-left">Required Score: {reqScore}</p>
            <div className="row">{renderQuestions(questions)}</div>
         </div>
      </div>
   );
}

export default QuizBlock;
