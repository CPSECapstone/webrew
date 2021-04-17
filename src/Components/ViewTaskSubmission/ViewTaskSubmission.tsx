import styled from 'styled-components';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_QUIZ_SUBMISSION_FULL } from '../../queries/quiz-submission-queries';
import { Question } from '../../interfaces/Question';
import { SubmissionFull } from '../../interfaces/SubmissionFull';
import { Option } from '../../interfaces/Option';

const QuizDiv = styled.div`
   height: 300px;
   width: 600px;
   //background-color: grey;
   margin-top: 10px;
`;

const CenterDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

const QuestionDiv = styled.div`
   font-size: 20px;
`;

function ViewTaskSubmission() {
   const { data: quiz } = useQuery<SubmissionFull>(GET_QUIZ_SUBMISSION_FULL);

   if (!quiz) {
      return <div>Quiz Is Undefined</div>;
   }

   return (
      <CenterDiv>
         {quiz.quizSubmission.questions.map((question: Question) => (
            <QuizDiv>
               <QuestionDiv>
                  {quiz.quizSubmission.submission.studentAnswers.findIndex(
                     (x) => x.questionId === question.id && x.result
                  ) !== -1
                     ? `${question.description} Correct`
                     : `${question.description} Incorrect`}
               </QuestionDiv>
               <RadioGroup>
                  {question.options.map((option: Option) => (
                     <FormControlLabel
                        value={option.description}
                        disabled
                        control={
                           <Radio
                              checked={
                                 quiz.quizSubmission.submission.studentAnswers.find(
                                    (x) => x.questionId === question.id
                                 )?.choices[0] === option.id
                              }
                           />
                        }
                        label={option.description}
                     />
                  ))}
               </RadioGroup>
            </QuizDiv>
         ))}
      </CenterDiv>
   );
}

export default ViewTaskSubmission;
