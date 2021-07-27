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
   Container,
   Button,
} from '@material-ui/core';
import { useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { ApolloError } from '@apollo/client';
import { AddStudentMutation, useAddStudentMutation } from '../../../__generated__/types';
import { JoinCourseFormInput, joinCourseFormToInputType, JoinCourseForm } from './JoinCourseForm';

type Props = {
   refetch: any;
};

export function JoinCourseDialog({ refetch }: Props) {
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
      handleClose();
      refetch();
   };

   const [addStudent, { loading: mutationLoading, error: mutationError }] = useAddStudentMutation({
      onError: handleError,
      onCompleted: onMutationCompleted,
   });

   const initialValues: JoinCourseFormInput = {
      firstName: '',
      lastName: '',
      instructorId: '',
      courseId: '',
   };

   const handleClickOpen = () => {
      setError(false);
      setOpen(true);
      console.log('Opening and clearing error');
   };

   const handleSubmit = (values: JoinCourseFormInput) => {
      addStudent({
         variables: {
            student: joinCourseFormToInputType(values),
         },
      }).catch((e) => {
         console.log(e);
      });
   };
   return (
      <Container>
         <div>
            <Button
               style={{
                  width: 200,
                  marginTop: 20,
                  marginLeft: 0,
                  backgroundColor: '#4274F3',
                  color: 'white',
               }}
               onClick={handleClickOpen}
               data-testid="create-btn"
            >
               Join Course
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
                  Join Course
               </DialogTitle>
               <DialogContent>
                  <JoinCourseForm initialValues={initialValues} onSubmit={handleSubmit} />
               </DialogContent>
               <div style={{ marginLeft: '4%' }}>
                  {mutationLoading ? (
                     <CircularProgress size={25} />
                  ) : error ? (
                     <span style={{ color: 'red' }}>ERROR: Could not find ID combination. </span>
                  ) : (
                     <></>
                  )}
               </div>
            </Dialog>
         </div>
      </Container>
   );
}
