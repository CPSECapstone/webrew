import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   TextField,
   DialogActions,
} from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { SAVE_COURSE } from '../queries/course-queries';

const LargeTextField = styled(TextField)`
   input {
      height: 50px;
      font-size: 20px;
   }
`;

export default function CreateCourseDialog() {
   const [open, setOpen] = useState(false);
   const [addCourse] = useMutation(SAVE_COURSE);

   // TODO For when we have sessions
   // const instructor = getCurrentUser();

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Create New Course
         </Button>
         <Dialog
            open={open}
            fullWidth
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
         >
            <DialogTitle id="form-dialog-title">New Course</DialogTitle>
            <DialogContent>
               <Formik
                  initialValues={{
                     courseTitle: '',
                     courseDescription: '',
                     instructor: 'currentUser',
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                     setTimeout(() => {
                        setSubmitting(false);
                        handleClose();
                        addCourse({
                           variables: {
                              course: {
                                 name: values.courseTitle,
                                 description: values.courseDescription,
                                 instructor: 'Mr. Butcher',
                                 missions: [],
                              },
                           },
                        }).catch((error) => console.log(error));
                     }, 400);
                  }}
               >
                  {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                     <form onSubmit={handleSubmit}>
                        <LargeTextField
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

                        <DialogActions>
                           <Button onClick={handleClose} color="primary">
                              Cancel
                           </Button>
                           <Button type="submit" disabled={isSubmitting} color="primary">
                              Create
                           </Button>
                        </DialogActions>
                     </form>
                  )}
               </Formik>
            </DialogContent>
         </Dialog>
      </div>
   );
}
