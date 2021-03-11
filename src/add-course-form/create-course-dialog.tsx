import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, FormControl, InputLabel, Chip, Input, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'
import { Formik } from 'formik';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_COURSE } from '../queries/course-queries';
import classes from '*.module.css';

const LargeTextField = styled(TextField)`
   input {
      height: 50px;
      font-size: 20px;
     
   }
`;
 // margin-left: 24px;
      // margin-right: 24px;
export interface Task {
   id: string,
   name: string,
   description: string,
   link: string
}

export interface Mission {
   id: string,
   name: string,
   description: string,
   tasks: Task[]
}

export interface Course {
   id: string,
   name: string,
   description: string,
   instructor: any,
   missions: Mission[]
}

// const form = {
//    courseTitle
//    description
//    milestone: Milestone[]
// }


function CreateNewCourse() {
   // const data = useMutation<Course>(SAVE_COURSE);
   const [data, { loading, error }] = useMutation<
    Course,
    any
  >(SAVE_COURSE);
   // const { loading, error, data }

  if (loading) 
   console.log('loading');
   if (error)
   console.log('error');
  
  if (data === undefined) {
   console.log('nothing came back');
  }
 
  console.log('data:', data);
//   return <p>Stuff came back</p>
}




export default function FormDialog() {
   const [open, setOpen] = React.useState(false);
   const [addCourse, {data}] = useMutation(SAVE_COURSE);
   // const [courseTitle, setCourseTitle] = useState("");
   // const [courseDescription, setCourseDescription] = useState("");
   // const [missions, setMissions] = useState("");


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
            fullWidth={true}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
         >
            <DialogTitle id="form-dialog-title">New Course</DialogTitle>
            <DialogContent>
            <Formik
               initialValues={{ courseTitle: '', courseDescription: '', instructor: 'currentUser'}}
               //  validate={values => {
               //    const errors = {};
               //    if (!values.email) {
               //      errors.email = 'Required';
               //    } else if (
               //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               //    ) {
               //      errors.email = 'Invalid email address';
               //    }
               //    return errors;
               //  }}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     // alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                     handleClose();
                     addCourse({variables: {course: {
                        name: values.courseTitle,
                        description: values.courseDescription,
                        instructor: "Mr. Butcher",
                        missions: []
                     }}})
                  }, 400);
               }}
            >
               {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
               }) => (
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

                  {/* <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
                        <Select
                           labelId="demo-mutiple-chip-label"
                           id="demo-mutiple-chip"
                           multiple
                           value={personName}
                           onChange={handleChange}
                           input={<Input id="select-multiple-chip" />}
                           renderValue={(selected) => (
                              <div className={classes.chips}>
                              {(selected as string[]).map((value) => (
                                 <Chip key={value} label={value} className={classes.chip} />
                              ))}
                              </div>
                           )}
                           MenuProps={MenuProps}
                        >
                           {names.map((name) => (
                              <MenuItem key={name} value={name} >
                              {name}
                              </MenuItem>
                           ))}
                        </Select>
                        </FormControl> */}

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



         {/* <Dialog
            open={open}
            fullWidth={true}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
         >
            <DialogTitle id="form-dialog-title">New Course</DialogTitle>
            <DialogContent>
               


               <LargeTextField
                  id="courseTitle"
                  label="Course Title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={courseTitle}
                  onChange={e => setCourseTitle(e.target.value)}
               />

               <LargeTextField
                  id="description"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={courseTitle}
                  onChange={e => setCourseTitle(e.target.value)}
               />



            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Cancel
           </Button>
               <Button onClick={handleClose} color="primary">
                  Create
           </Button>
            </DialogActions>
         </Dialog> */}
      </div>
   );
}
