import styled from 'styled-components'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';
import { Radio } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_QUIZ_SUBMISSION_FULL } from '../queries/quiz-submission-queries';

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

export interface Quiz {
   questions: Question[];
}

// export interface Question {
//    id: any;
//    quizId: any;
//   	description: any;
//    options: any;
//    answers: any[];
//    points: any;
// }

export interface Answers {
   answers: Answer;
}

export interface Answer {
   id: any;
   quizId: any;
   choices: any;
}

export interface StudentAnswer {
   questionId: string;
   result: boolean;
   choices: any[];
}

export interface Submisison {
   id: string;
   student: string;
   points: number;
   studentAnswers: StudentAnswer[];
}

export interface Question {
   id: string;
   description: string;
   options: any;
}

export interface SubmissionFull {
   quizSubmission: {
      submission: Submisison;
      questions: Question[];
      quiz: {
         name: string;
         instructions: string;
      };
   };
}

// function populateAnswers(quiz: any, allAnswers: any) {
//    for (const answer of quiz.answers) {
//       for (const )
//    }

// }

export default function QuizSubmission() {
   // const { loading, error, data: quiz } = useQuery<Quiz>(GET_QUESTIONS);
   const { loading, error, data: quiz } = useQuery<SubmissionFull>(GET_QUIZ_SUBMISSION_FULL);

   // const { loading: loading1, error: error1, data: allAnswers } = useQuery<Answers>(GET_ANSWERS);
   // const [value, setValue] = useState();

   if (!quiz) {
      return <div />;
   }

   console.log(quiz);

   // style={{ backgroundColor: studentsAnswers[parseInt(question.id) - 1].optionId === question.correctOptionId ? 'green' : 'red' }}

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
                  {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
                  {question.options.map((option: any) => (
                     <FormControlLabel
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        value={option.description}
                        disabled
                        control={
                           <Radio
                              checked={
                                 quiz.quizSubmission.submission.studentAnswers.find(
                                    (x) => x.questionId === question.id
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                                 )?.choices[0] === option.id
                              }
                           />
                        }
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        label={option.description}
                     />
                  ))}
               </RadioGroup>
            </QuizDiv>
         ))}
      </CenterDiv>

      // {quiz.questions.map((question: Question) => (
      //    <QuizDiv >
      //       <QuestionDiv >
      //          {question.description}
      //       </QuestionDiv>
      //       <RadioGroup>
      //          {question.options.map((option: any) => (
      //             <FormControlLabel value = {option.description} disabled control={<Radio checked = {true}/>} label = {option.description}/>
      //          ))}
      //       </RadioGroup>

      //    </QuizDiv>

      // ))}
   );
}
