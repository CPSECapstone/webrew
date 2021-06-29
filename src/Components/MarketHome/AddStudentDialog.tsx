/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
   IconButton,
   Dialog,
   DialogTitle,
   DialogContent,
   CircularProgress,
} from '@material-ui/core';
import { useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { ApolloError } from '@apollo/client';
import { AddStudentMutation, useAddStudentMutation } from '../../__generated__/types';
import { AddStudentFormInput, studentFormToInputType, StudentForm } from './StudentForm';
import { Container } from './FieldStyles';

type Props = {
   course: string;
   refetch: any;
};

export function AddStudentDialog(props: Props) {
   const [error, setError] = useState(false);
   const [open, setOpen] = useState(false);

   const handleClose = () => {
      setError(false);
      setOpen(false);
   };

   const handleError = (_error: ApolloError) => {
      setError(true);
   };

   const onMutationCompleted = (data: AddStudentMutation) => {
      console.log('Mutation Completed');
      setError(false);
      props.refetch();
   };

   const [addStudent, { loading: mutationLoading, error: mutationError }] = useAddStudentMutation({
      onError: handleError,
      onCompleted: onMutationCompleted,
   });

   const initialValues: AddStudentFormInput = {
      firstName: '',
      lastName: '',
      studentId: '',
   };

   const handleClickOpen = () => {
      setError(false);
      setOpen(true);
      console.log('Opening and clearing error');
   };

   const handleSubmit = (values: AddStudentFormInput) => {
      addStudent({
         variables: {
            student: studentFormToInputType(values, props.course),
         },
      }).catch((e) => {
         console.log(e);
      });
   };
   return (
      <Container>
         <div>
            <IconButton
               style={{
                  backgroundColor: '#4274F3',
                  color: 'white',
               }}
               color="primary"
               aria-label="Add Student"
               onClick={handleClickOpen}
            >
               <PersonAddIcon />
            </IconButton>
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
                  Add Student
               </DialogTitle>
               <DialogContent>
                  <StudentForm initialValues={initialValues} onSubmit={handleSubmit} />
               </DialogContent>
               <div style={{ marginLeft: '4%' }}>
                  {mutationLoading ? (
                     <CircularProgress size={25} />
                  ) : error ? (
                     <span style={{ color: 'red' }}>ERROR: Could not find student id. </span>
                  ) : (
                     <></>
                  )}
               </div>
            </Dialog>
         </div>
      </Container>
   );
}
