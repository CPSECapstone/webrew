import { DialogActions } from '@material-ui/core';
import { Button } from 'aws-amplify-react';
import { Formik, Form } from 'formik';
import { StudentInput } from '../../__generated__/types';
import { SmallTextField } from './FieldStyles';

export type PayStudentFormInput = {
   points: number;
};

type Props = {
   onSubmit: (values: PayStudentFormInput) => void;
};

// eslint-disable-next-line consistent-return
const validateField = (values: PayStudentFormInput) => {
   if (values.points < 0) {
      console.log('Validation Error');
      return { points: 'Must be positive' };
   }
};

export function PayStudentForm({ onSubmit }: Props) {
   return (
      <Formik
         validate={validateField}
         initialValues={{ points: 0 }}
         onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            onSubmit(values);
         }}
      >
         {({ values, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
               <SmallTextField
                  required
                  id="points"
                  label="Points"
                  type="number"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={values.points}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               <DialogActions>
                  <Button type="submit" disabled={isSubmitting} color="primary">
                     Award
                  </Button>
               </DialogActions>
            </Form>
         )}
      </Formik>
   );
}
