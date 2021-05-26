import { InputGroup, FormControl } from 'react-bootstrap';

function FrBlock({
   title,
   question,
   answer,
   cssKey,
}: {
   title: string;
   question: string;
   answer: string;
   cssKey: number;
}) {
   return (
      <div className={`${cssKey % 2 === 1 ? 'white ' : 'gray '}row`}>
         <div className="col-md-6 text-center py-5 mx-auto">
            <h3 className="text-left mb-3">{title}</h3>
            <InputGroup className="mb-3">
               <div className="question-container p-4 shadow w-100">
                  <p className="text-left">{question}</p>
                  <br />
                  <FormControl value={answer} disabled />
               </div>
            </InputGroup>
         </div>
      </div>
   );
}

export default FrBlock;
