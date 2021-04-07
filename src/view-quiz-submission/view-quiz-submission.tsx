import React from 'react';
import styled from 'styled-components';
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

export interface StudentAnswer {
   questionId: string;
   result: boolean;
   choices: string[];
}

export interface Submisison {
   id: string;
   student: string;
   points: number;
   studentAnswers: StudentAnswer[];
}

export interface Option {
   id: string;
   description: string;
}

export interface Question {
   id: string;
   description: string;
   options: Option[];
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

export default function QuizSubmission() {
   const { data: quiz } = useQuery<SubmissionFull>(GET_QUIZ_SUBMISSION_FULL);

   // const { loading: loading1, error: error1, data: allAnswers } = useQuery<Answers>(GET_ANSWERS);

   if (!quiz) {
      return <div />;
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
