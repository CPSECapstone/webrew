import { AnswerFieldsFragment, QuestionOption } from '../../../__generated__/types';

function renderQuestionOptions(
   options: QuestionOption[],
   answers: number[],
   studentAnswers: string
) {
   const correctChoices = new Set<number>(answers);
   const studentAnswerParsed = parseInt(studentAnswers, 10);

   return options.map((option: QuestionOption, index: number) => {
      let styleName = 'option col-md-12';

      if (correctChoices.has(option.id)) {
         styleName += ' option-correct';
      }
      if (studentAnswerParsed === option.id) {
         styleName += ' selected-option';
      }

      return (
         <div className="row my-2">
            <div className={styleName}>
               <input type="radio" value={index} id={`${option.id}`} name="radio" disabled />
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
   studentAnswer,
   points,
}: {
   title: string;
   question: string;
   options: QuestionOption[];
   answers: number[];
   cssKey: number;
   points: number;
   studentAnswer: AnswerFieldsFragment | undefined;
}) {
   return (
      <div className={`${cssKey % 2 === 1 ? 'white ' : 'gray '}row`}>
         <div className="col-md-6 text-center py-5 mx-auto">
            <h3 className="text-left mb-3">{title}</h3>
            <div className="question-container p-4 shadow w-100">
               <p className="text-left">{question}</p>
               <span className="text-left">
                  {`${studentAnswer?.pointsAwarded ? studentAnswer.pointsAwarded : 0} / ${points}`}
               </span>
               <span />
               <br />
               <div className="mx-4">
                  {renderQuestionOptions(
                     options,
                     answers,
                     studentAnswer?.answer ? studentAnswer.answer : '-1'
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default McBlock;
