/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from 'styled-components';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_QUIZ_SUBMISSION_FULL } from '../queries/quiz-submission-queries';
import { Question } from '../interfaces/Question';
import { SubmissionFull } from '../interfaces/SubmissionFull';
import { Option } from '../interfaces/Option';
import { GET_LEARNING_OBJECTIVE } from '../queries/LearningObjectiveQueries';
import { LearningObjective } from '../interfaces/LearningObjective';
import { LearningObjectives } from '../interfaces/LearningObjectives';

const QuizDiv = styled.div`
   height: 300px;
   width: 600px;
   //background-color: grey;
   margin-top: 10px;
`;
const ObjectiveDiv = styled.div`
   font-size: 25px;
   font-style: italic;
`;
const FeedbackDiv = styled.div`
   font-size: 15px;
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

export function Objective({ course }) {
   const { loading, error, data } = useQuery(GET_LEARNING_OBJECTIVE, { variables: { course } });
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error!</p>;

   return (
      <p>
         {data.learningObjectives.id} is {data.learningObjectives.name}
      </p>
   );
}
export default function TaskSubmission() {
   const { data: quiz } = useQuery<SubmissionFull>(GET_QUIZ_SUBMISSION_FULL);
   const { data: learningObjective } = useQuery<LearningObjectives>(GET_LEARNING_OBJECTIVE);
   if (!quiz) {
      return <>Quiz Undefined</>;
   }
   if (!learningObjective) {
      return <>Learning Objective Undefined</>;
   }
   return (
      <CenterDiv>
         {learningObjective.learningObjectives.map((learningobjective: LearningObjective) => (
            <ObjectiveDiv>
               <>Learning Objective: {learningobjective.description[0]}</>
            </ObjectiveDiv>
         ))}
         {quiz.quizSubmission.questions.map((question: Question) => (
            <QuizDiv>
               <QuestionDiv>
                  {quiz.quizSubmission.submission.studentAnswers.findIndex(
                     (x) => x.questionId === question.id && x.result
                  ) !== -1
                     ? `${question.description} ✔ `
                     : `${question.description} X`}
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
               <FeedbackDiv>
                  {quiz.quizSubmission.submission.studentAnswers.findIndex(
                     (x) => x.questionId === question.id && x.result
                  ) !== -1
                     ? `That's right! ${question.feedback}`
                     : `Not quite. ${question.feedback}`}
               </FeedbackDiv>
            </QuizDiv>
         ))}
      </CenterDiv>
   );
}
