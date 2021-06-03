import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { AnswerFieldsFragment } from '../../../__generated__/types';
import { EDIT_QUESTION_GRADE } from '../../../queries/grade';
import './FrBlock.css';

function FrBlock({
   title,
   question,
   answer,
   cssKey,
   studentAnswer,
   points,
   studentId,
}: {
   title: string;
   question: string;
   answer: string;
   cssKey: number;
   studentAnswer: AnswerFieldsFragment | undefined;
   points: number;
   studentId: string;
}) {
   const [editQuestionGrade] = useMutation(EDIT_QUESTION_GRADE);

   return (
      <div className={`${cssKey % 2 === 1 ? 'white ' : 'gray '}row`}>
         <Formik
            initialValues={{
               student: studentId,
               questionId: studentAnswer?.questionId,
               pointsAwarded: studentAnswer?.pointsAwarded || 0,
               teacherComment: studentAnswer?.teacherComment || '',
            }}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  setSubmitting(false);
                  editQuestionGrade({
                     variables: {
                        answerGradeInput: {
                           student: values.student,
                           questionId: values.questionId,
                           pointsAwarded: values.pointsAwarded,
                           teacherComment: values.teacherComment,
                        },
                     },
                  })
                     .then((data) => {
                        alert('Question Grade Change Submitted.');
                        location.reload();
                     })
                     .catch((error) => {
                        alert(error);
                        location.reload();
                     });
               }, 400);
            }}
         >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
               <div className="col-md-6 text-center py-5 mx-auto">
                  <Form onSubmit={handleSubmit}>
                     <div className="text-right">
                        <Button type="submit">Submit Changes</Button>
                     </div>

                     <h3 className="text-left mb-3">{title}</h3>
                     <InputGroup className="mb-3">
                        <div className="question-container p-4 shadow w-100">
                           <p className="text-left">{question}</p>
                           <div className="d-inline-block">
                              <Form.Control
                                 as="input"
                                 type="number"
                                 value={values.pointsAwarded}
                                 bsCustomPrefix="d-inline"
                                 id="pointsAwarded"
                                 className="indiv-points"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                              />
                              <Form.Text
                                 as="h4"
                                 className="w-25 text-left right"
                              >{` / ${points}`}</Form.Text>
                           </div>
                           <Form.Control
                              as="textarea"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              id="teacherComment"
                              placeholder="Awaiting feedback..."
                              value={values.teacherComment}
                              rows={1}
                           />
                           <br />
                           <Form.Control
                              value={studentAnswer?.answer ? studentAnswer.answer : ''}
                              disabled
                              as="textarea"
                              rows={3}
                           />
                        </div>
                     </InputGroup>
                  </Form>
               </div>
            )}
         </Formik>
      </div>
   );
}

export default FrBlock;
