import React, { useState } from 'react';
import styled from 'styled-components'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, FormControl, InputLabel, Chip, Input, MenuItem, Select, Radio } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS, GET_ANSWERS } from '../queries/quiz-queries';


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

// const OptionWrapper = styled.div`
//    display: flex;
//    justify-content: space-around;
//    // align-items: flex-start; 
//    flex-direction: column;
// `;

// export interface QuizOption {
//    id: string,
//    optionText: string
// }

// export interface QuizQuestion {
//    id: string,
//    questionText: string;
//    options: QuizOption[],
//    correctOptionId: string
// }

// export interface Quiz {
//    id: string,
//    questions: QuizQuestion[]
// }

// export interface StudentAnswer {
//    questionId: string,
//    optionId: string
// }

export interface Quiz {
   questions: Question[];
}

export interface Question {
   id: any;
   quizId: any;
  	description: any;
   options: any;
   answers: any;
   points: any;
}

export interface Answers {
   answers: Answer[];
}

export interface Answer {
   id: any;
   quizId: any;
   choices: any;
}


function populateAnswers() {

}

export default function QuizSubmission() {
   const { loading, error, data: quiz } = useQuery<Quiz>(GET_QUESTIONS);
   const { loading: loading1, error: error1, data: allAnswers } = useQuery<Answers>(GET_ANSWERS);
   const [value,setValue] = useState();
   console.log(quiz)
   console.log(allAnswers)
   if (quiz === undefined){
      return <div></div>;
   }

   quiz.questions.forEach(question => {
      question = populateAnswers()
   });

   // const studentsAnswers: StudentAnswer[] = [
   //    {
   //       questionId: '1',
   //       optionId: 'op1'
   //    },
   //    {
   //       questionId: '2',
   //       optionId: 'op2'
   //    }
   // ]
   // const questionOne: QuizQuestion = {
   //    id: '1',
   //    questionText: 'The answer to this question is A',
   //    options: [
   //       {
   //          id: 'op1',
   //          optionText: 'This is option A for question 1'
   //       },
   //       {
   //          id: 'op2',
   //          optionText: 'This is option B for question 1'
   //       },
   //       {
   //          id: 'op3',
   //          optionText: 'This is option C for question 1'
   //       },
   //       {
   //          id: 'op4',
   //          optionText: 'This is option D for question 1'
   //       }
   //    ],
   //    correctOptionId: 'op1'
   // }

   // const questionTwo: QuizQuestion = {
   //    id: '2',
   //    questionText: 'The answer to this question is D',
   //    options: [
   //       {
   //          id: 'op1',
   //          optionText: 'This is option A for question 2'
   //       },
   //       {
   //          id: 'op2',
   //          optionText: 'This is option B for question 2'
   //       },
   //       {
   //          id: 'op3',
   //          optionText: 'This is option C for question 2'
   //       },
   //       {
   //          id: 'op4',
   //          optionText: 'This is option D for question 2'
   //       }
   //    ],
   //    correctOptionId: 'op4'
   // }

   // const quiz: Quiz = {
   //    id: '1',
   //    questions: [questionOne, questionTwo]
   // }

   // style={{ backgroundColor: studentsAnswers[parseInt(question.id) - 1].optionId === question.correctOptionId ? 'green' : 'red' }}

   return (
      <CenterDiv>
         {quiz.questions.map((question: Question) => (
            <QuizDiv >
               <QuestionDiv style={{ backgroundColor: allAnswers.answers.[parseInt(question.id) - 1].optionId === question.correctOptionId ? 'green' : 'red' }}>
                  {question.description}
               </QuestionDiv>
               <RadioGroup>
                  {question.options.map((option: any) => (
                     <FormControlLabel value = {option.description} disabled control={<Radio checked = {true}/>} label = {option.description}/>
                  ))}
               </RadioGroup>


            </QuizDiv>
            // <QuizDiv style={{ backgroundColor: question % 2 === 0 ? "green" : 'red' }}>

            //    <span>Hello from quiz</span>

            // </QuizDiv>
         ))}

      </CenterDiv>




   );
}