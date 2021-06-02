import { useState } from 'react';
import { Form, FormControl, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { EDIT_GRADE } from '../../../queries/grade';
import { TaskSubmissionResult } from '../../../__generated__/types';

function InstructorDetail({
   taskSubmission,
   studentId,
}: {
   taskSubmission: TaskSubmissionResult;
   studentId: string;
}) {
   if (taskSubmission === undefined) {
      return <></>;
   }

   const [editTaskGrade, { data }] = useMutation(EDIT_GRADE);

   return (
      <div className="white row">
         <div className="col-md-6 text-center py-5 mx-auto">
            <Formik
               initialValues={{
                  pointsAwarded: taskSubmission.pointsAwarded || 0,
                  teacherComment: taskSubmission.teacherComment || '',
                  taskId: taskSubmission.taskId,
                  student: studentId,
               }}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     setSubmitting(false);
                     editTaskGrade({
                        variables: {
                           taskGradeInput: {
                              pointsAwarded: values.pointsAwarded,
                              teacherComment: values.teacherComment,
                              taskId: values.taskId,
                              student: values.student,
                           },
                        },
                     })
                        .then((data) => {
                           alert('Grade Change Submitted.');
                           location.reload();
                        })
                        .catch((error) => alert(error));
                  }, 400);
               }}
            >
               {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                     <h3 className="text-left mb-3">Submission Details:</h3>
                     <Form.Row>
                        <Col className="text-left w-100">
                           <Form.Label>Status:</Form.Label>
                           <Form.Text as="h4">{`${
                              taskSubmission.graded ? ' Graded' : ' Not Graded'
                           }`}</Form.Text>
                        </Col>
                        <Form.Group as={Col} controlId="score">
                           <Form.Label className="text-left w-100">Score:</Form.Label>
                           <Col>
                              <Form.Row>
                                 <Col>
                                    <Form.Control
                                       as="input"
                                       type="number"
                                       value={values.pointsAwarded}
                                       bsCustomPrefix="d-inline"
                                       id="pointsAwarded"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                    />
                                 </Col>
                                 <Col className="text-left">
                                    <Form.Text as="h4">{` / ${
                                       taskSubmission.pointsPossible || 0
                                    }`}</Form.Text>
                                 </Col>
                              </Form.Row>
                           </Col>
                        </Form.Group>
                     </Form.Row>
                     <Form.Group controlId="feedback">
                        <Form.Label className="text-left w-100">Feedback:</Form.Label>
                        <FormControl
                           placeholder="No comment."
                           value={values.teacherComment}
                           as="textarea"
                           rows={3}
                           id="teacherComment"
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />
                     </Form.Group>
                     <Button className="text-left" type="submit" disabled={isSubmitting}>
                        Save
                     </Button>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   );
}

export default InstructorDetail;
