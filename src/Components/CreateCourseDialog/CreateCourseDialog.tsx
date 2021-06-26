/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   TextField,
   DialogActions,
} from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useCreateCourseMutation } from '../../__generated__/types';

const LargeTextField = styled(TextField)`
   input {
      height: 50px;
      font-size: 20px;
   }
`;
const SmallTextField = styled(TextField)`
   input {
      height: 30px;
      font-size: 20px;
   }
`;

const Container = styled.div`
   text-align: center;
   fontfamily: 'Poppins', sans-serif;
`;

type Props = {
   refetch: any;
};

function CreateCourseDialog({ refetch }: Props) {
   const [open, setOpen] = useState(false);
   const [addCourse] = useCreateCourseMutation();

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <Container>
         <div>
            <Button
               style={{
                  width: 200,
                  marginTop: 20,
                  backgroundColor: '#4274F3',
                  color: 'white',
               }}
               onClick={handleClickOpen}
               data-testid="create-btn"
            >
               Create New Course
            </Button>
            <Dialog
               open={open}
               fullWidth
               onClose={handleClose}
               aria-labelledby="form-dialog-title"
               maxWidth="sm"
               data-testid="create-dialog"
            >
               <DialogTitle
                  style={{ backgroundColor: '#4274F3', color: 'white' }}
                  id="form-dialog-title"
               >
                  New Course
               </DialogTitle>
               <DialogContent>
                  <Formik
                     initialValues={{
                        courseTitle: '',
                        firstName: '',
                        lastName: 'Mr. Butcher', // stay hardcoded since dashboard uses this
                     }}
                     onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                           setSubmitting(false);
                           handleClose();
                           addCourse({
                              variables: {
                                 course: {
                                    courseName: values.courseTitle,
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                 },
                              },
                           })
                              .then(() => refetch())
                              .catch((error) => console.log(error));
                        }, 400);
                     }}
                  >
                     {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                           <LargeTextField
                              required
                              id="courseTitle"
                              label="Course Title"
                              type="text"
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              value={values.courseTitle}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />

                           <LargeTextField
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
                              <Button onClick={handleClose} color="primary">
                                 Cancel
                              </Button>
                              <Button type="submit" disabled={isSubmitting} color="primary">
                                 Create
                              </Button>
                           </DialogActions>
                        </Form>
                     )}
                  </Formik>
               </DialogContent>
            </Dialog>
         </div>
      </Container>
   );
}

export default CreateCourseDialog;
