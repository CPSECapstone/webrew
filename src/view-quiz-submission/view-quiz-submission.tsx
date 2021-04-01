import React from 'react';
import styled from 'styled-components'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, FormControl, InputLabel, Chip, Input, MenuItem, Select } from '@material-ui/core';


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

const OptionWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   // align-items: flex-start; 
   flex-direction: column;
`;

export interface QuizOption {
   id: string,
   optionText: string
}

export interface QuizQuestion {
   id: string,
   questionText: string;
   options: QuizOption[],
   correctOptionId: string
}

export interface Quiz {
   id: string,
   questions: QuizQuestion[]
}

export interface StudentAnswer {
   questionId: string,
   optionId: string
}



export default function QuizSubmission() {
   // const [addCourse, { data }] = useMutation(SAVE_COURSE);
   const quizQuestions = [0, 1, 2, 3, 4, 5];

   const studentsAnswers: StudentAnswer[] = [
      {
         questionId: '1',
         optionId: 'op1'
      },
      {
         questionId: '2',
         optionId: 'op2'
      }
   ]
   const questionOne: QuizQuestion = {
      id: '1',
      questionText: 'The answer to this question is A',
      options: [
         {
            id: 'op1',
            optionText: 'This is option A for question 1'
         },
         {
            id: 'op2',
            optionText: 'This is option B for question 1'
         },
         {
            id: 'op3',
            optionText: 'This is option C for question 1'
         },
         {
            id: 'op4',
            optionText: 'This is option D for question 1'
         }
      ],
      correctOptionId: 'op1'
   }

   const questionTwo: QuizQuestion = {
      id: '2',
      questionText: 'The answer to this question is D',
      options: [
         {
            id: 'op1',
            optionText: 'This is option A for question 2'
         },
         {
            id: 'op2',
            optionText: 'This is option B for question 2'
         },
         {
            id: 'op3',
            optionText: 'This is option C for question 2'
         },
         {
            id: 'op4',
            optionText: 'This is option D for question 2'
         }
      ],
      correctOptionId: 'op4'
   }

   const quiz: Quiz = {
      id: '1',
      questions: [questionOne, questionTwo]
   }


   return (
      <CenterDiv>
         {quiz.questions.map((question: QuizQuestion) => (
            <QuizDiv style={{ backgroundColor: studentsAnswers[parseInt(question.id) - 1].optionId === question.correctOptionId ? 'green' : 'red' }}>
               <QuestionDiv>
                  {question.questionText}
               </QuestionDiv>
               <OptionWrapper>
                  {question.options.map((option: QuizOption) => (
                     <div>{option.optionText}</div>
                  ))}
               </OptionWrapper>


            </QuizDiv>
            // <QuizDiv style={{ backgroundColor: question % 2 === 0 ? "green" : 'red' }}>

            //    <span>Hello from quiz</span>

            // </QuizDiv>
         ))}

      </CenterDiv>




   );
}