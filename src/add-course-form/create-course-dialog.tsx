import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'

const TitleTextField = styled(TextField)`
   input {
      height: 50px;
      font-size: 20px;
   }
`;

export default function FormDialog() {
   const [open, setOpen] = React.useState(false);
   const [courseTitle, setCourseTitle] = useState("");

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
      
      console.log(courseTitle);
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
               {/* <DialogContentText>
             To subscribe to this website, please enter your email address here. We will send updates
             occasionally.
           </DialogContentText> */}

          
            <TitleTextField
               id="courseTitle"
               label="Course Title"
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
         </Dialog>
      </div>
   );
}
