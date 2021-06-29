import { CircularProgress, DialogActions } from '@material-ui/core';
import { Button } from 'aws-amplify-react';
import { Formik, Form } from 'formik';
import { SmallTextField } from './FieldStyles';

export type PayStudentFormInput = {
   points: number;
};

type Props = {
   submitting: boolean;
   onSubmit: (points: number) => void;
};

export function PayStudentForm({ onSubmit, submitting }: Props) {
   return (
      <Formik
         initialValues={{ points: 0 }}
         onSubmit={(values, { setSubmitting, setFieldValue }) => {
            setSubmitting(false);
            onSubmit(values.points);
            setFieldValue('points', '0');
         }}
      >
         {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
               <div style={{ float: 'left', marginTop: '.5%', position: 'absolute' }}>
                  {submitting ? <CircularProgress size={25} /> : <></>}
               </div>
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
