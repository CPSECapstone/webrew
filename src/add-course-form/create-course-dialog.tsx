import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   TextField,
   DialogActions,
} from '@material-ui/core';
import React from 'react';
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
// margin-left: 24px;
// margin-right: 24px;
export interface Task {
   id: string;
   name: string;
   description: string;
   link: string;
}

export interface Mission {
   id: string;
   name: string;
   description: string;
   tasks: Task[];
}

// export interface Course {
//    id: string;
//    name: string;
//    description: string;
//    instructor: any;
//    missions: Mission[];
// }

// const form = {
//    courseTitle
//    description
//    milestone: Milestone[]
// }

export default function FormDialog() {
   const [open, setOpen] = React.useState(false);
   const [addCourse] = useMutation(SAVE_COURSE);
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
