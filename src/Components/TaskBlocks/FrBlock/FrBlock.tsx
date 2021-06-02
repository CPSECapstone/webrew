import { InputGroup, FormControl } from 'react-bootstrap';
import { AnswerFieldsFragment } from '../../../__generated__/types';

function FrBlock({
   title,
   question,
   answer,
   cssKey,
   studentAnswer,
   points,
}: {
   title: string;
   question: string;
   answer: string;
   cssKey: number;
   studentAnswer: AnswerFieldsFragment | undefined;
   points: number;
}) {
   return (
      <div className={`${cssKey % 2 === 1 ? 'white ' : 'gray '}row`}>
         <div className="col-md-6 text-center py-5 mx-auto">
            <h3 className="text-left mb-3">{title}</h3>
            <InputGroup className="mb-3">
               <div className="question-container p-4 shadow w-100">
                  <p className="text-left">{question}</p>
                  <span>
                     {`${
                        studentAnswer?.pointsAwarded ? studentAnswer.pointsAwarded : 0
                     } / ${points}`}
                  </span>
                  <br />
                  <FormControl
                     value={studentAnswer?.answer ? studentAnswer.answer : ''}
                     disabled
                     as="textarea"
                     rows={3}
                  />
               </div>
            </InputGroup>
         </div>
      </div>
   );
}

export default FrBlock;
