import { DialogActions } from '@material-ui/core';
import { Button } from 'aws-amplify-react';
import { Formik, Form } from 'formik';
import { StudentInput } from '../../../__generated__/types';
import { SmallTextField } from '../FieldStyles';

type Props = {
   initialValues: JoinCourseFormInput;
   onSubmit: (values: JoinCourseFormInput) => void;
};

export type JoinCourseFormInput = {
   firstName: string;
   lastName: string;
   courseId: string;
   instructorId: string;
};

export function joinCourseFormToInputType(input: JoinCourseFormInput): StudentInput {
   return {
      studentId: '',
      instructorId: input.instructorId,
      courseId: input.courseId,
   };
}

export function JoinCourseForm({ initialValues, onSubmit }: Props) {
   return (
      <Formik
         initialValues={initialValues}
         onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            onSubmit(values);
         }}
      >
         {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
               <SmallTextField
                  required
                  id="courseId"
                  label="Course ID"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={values.courseId}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               <SmallTextField
                  required
                  id="instructorId"
                  label="Instructor ID"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={values.instructorId}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               <DialogActions>
                  <Button type="submit" disabled={isSubmitting} color="primary">
                     Add
                  </Button>
               </DialogActions>
            </Form>
         )}
      </Formik>
   );
}
