import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { QuestionOption } from '../../../__generated__/types';

function renderQuestionOptions(options: QuestionOption[], answers: number[]) {
   const correctChoices = new Set<number>(answers);

   return options.map((option: QuestionOption, index: number) => {
      const styleName = `${correctChoices.has(option.id) ? 'option-correct ' : ''}option col-md-12`;

      return (
         <div className="row my-2">
            <div className={styleName}>
               <input type="radio" value={index} id={`${option.id}`} name="radio" />
               <label htmlFor={`${option.id}`}>{option.description}</label>
            </div>
         </div>
      );
   });
}

function McBlock({
   title,
   question,
   options,
   answers,
   cssKey,
}: {
   title: string;
   question: string;
   options: QuestionOption[];
   answers: number[];
   cssKey: number;
}) {
   return (
      <div className={`${cssKey % 2 === 1 ? 'white ' : 'gray '}row`}>
         <div className="col-md-6 text-center py-5 mx-auto">
            <h3 className="text-left mb-3">{title}</h3>
            <div className="question-container p-4 shadow w-100">
               <p className="text-left">{question}</p>
               <br />
               <div className="mx-4">{renderQuestionOptions(options, answers)}</div>
            </div>
         </div>
      </div>
   );
}

export default McBlock;
