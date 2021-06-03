import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { EDIT_QUESTION_GRADE } from '../../../queries/grade';
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
   studentId,
}: {
   title: string;
   question: string;
   options: QuestionOption[];
   answers: number[];
   cssKey: number;
   points: number;
   studentAnswer: AnswerFieldsFragment | undefined;
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
                     <div className="question-container p-4 shadow w-100">
                        <p className="text-left">{question}</p>
                        <div className="d-inline-block">
                           <Form.Control
                              as="input"
                              type="number"
                              value={values.pointsAwarded}
                              bsCustomPrefix="d-inline"
                              id="pointsAwarded"
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
                        <div className="mx-4">
                           {renderQuestionOptions(
                              options,
                              answers,
                              studentAnswer?.answer ? studentAnswer.answer : '-1'
                           )}
                        </div>
                     </div>
                  </Form>
               </div>
            )}
         </Formik>
      </div>
   );
}

export default McBlock;
