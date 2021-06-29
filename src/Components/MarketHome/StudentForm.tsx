import { DialogActions } from '@material-ui/core';
import { Button } from 'aws-amplify-react';
import { Formik, Form } from 'formik';
import { StudentInput } from '../../__generated__/types';
import { SmallTextField } from './FieldStyles';

export type AddStudentFormInput = {
   firstName: string;
   lastName: string;
   studentId: string;
};

export function studentFormToInputType(input: AddStudentFormInput, courseId: string): StudentInput {
   return {
      firstName: input.firstName,
      lastName: input.lastName,
      studentId: input.studentId,
      instructorId: '',
      courseId,
   };
}

type Props = {
   initialValues: AddStudentFormInput;
   onSubmit: (values: AddStudentFormInput) => void;
};

export function StudentForm({ initialValues, onSubmit }: Props) {
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
                  id="studentId"
                  label="Student ID"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={values.studentId}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />

               <SmallTextField
                  required
                  id="firstName"
                  label="First Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               <SmallTextField
                  required
                  id="lastName"
                  label="Last Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={values.lastName}
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
