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
import { useMutation } from '@apollo/client';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { SAVE_COURSE } from '../../queries/course-queries';
import CreateListingDialog from '../MarketHome/CreateListingDialog';

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

function CreateCourseDialog() {
   const [open, setOpen] = useState(false);
   const [addCourse] = useMutation(SAVE_COURSE);

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
                        courseDescription: '',
                        courseInstructor: 'Mr. Butcher', // stay hardcoded since dashboard uses this
                     }}
                     onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                           setSubmitting(false);
                           handleClose();
                           addCourse({
                              variables: {
                                 course: {
                                    course: values.courseTitle,
                                    description: values.courseDescription,
                                    instructor: values.courseInstructor,
                                 },
                              },
                           }).catch((error) => console.log(error));
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
                              id="courseDescription"
                              label="Description"
                              type="text"
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              value={values.courseDescription}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <SmallTextField
                              required
                              id="courseInstructor"
                              label="Instructor"
                              type="text"
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              value={values.courseInstructor}
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

export default withAuthenticator(CreateCourseDialog);
