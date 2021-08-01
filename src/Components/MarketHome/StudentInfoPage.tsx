/* eslint-disable react/jsx-curly-brace-presence */
import { Button, Checkbox } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
   useBlockPurchasesMutation,
   useDeleteStudentMutation,
   useStudentQuery,
} from '../../__generated__/types';

export function StudentInfoPage() {
   const { studentId, classId } = useParams<Record<string, string>>();
   const [checked, setChecked] = useState(true);
   const [open, setOpen] = useState(false);
   const history = useHistory();

   const [blockPurchases] = useBlockPurchasesMutation({});

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const onDeleteCompleted = () => {
      console.log('student deleted!');
      handleClose();
      history.goBack();
   };
   const [deleteStudent] = useDeleteStudentMutation({ onCompleted: onDeleteCompleted });

   const handleDeleteStudent = () => {
      deleteStudent({
         variables: {
            studentId,
            courseId: classId,
         },
      }).catch((e: any) => console.log(e));
   };

   const handleChange = () => {
      blockPurchases({
         variables: {
            studentId,
            courseId: classId,
            blocked: !checked,
         },
      }).catch((e: any) => console.log(e));
      setChecked(!checked);
   };
   const { loading, error, data } = useStudentQuery({
      variables: {
         studentId,
         courseId: classId,
      },
      fetchPolicy: 'network-only',
   });

   useEffect(() => {
      if (!data) {
         return;
      }
      setChecked(data.student.purchaseBlocked);
   }, [data]);

   if (loading) return <div>Loading...</div>;
   if (error) {
      console.log(error);
      return <>{error}</>;
   }
   if (!data) {
      return <>Data could not be retrieved</>;
   }

   const { student } = data;
   return (
      <div>
         <h3>
            {student.firstName} {student.lastName}
         </h3>
         <p>User Id: {student.studentId}</p>
         <p>Points: {student.points}</p>
         <p>Total Points Earned: {student.totalPointsAwarded}</p>
         <p>Total Points Spent: {student.totalPointsSpent}</p>
         <div>
            Purchases Blocked
            <Checkbox
               checked={checked}
               onChange={handleChange}
               inputProps={{ 'aria-label': 'primary checkbox' }}
            />
         </div>
         <Button
            style={{
               width: 100,
               marginTop: 20,
               backgroundColor: '#DC143C',
               color: 'white',
            }}
            onClick={handleClickOpen}
            data-testid="create-btn"
         >
            Delete Student
         </Button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">{'Delete student?'}</DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  All purchases, receipts, point data, and activity notifications for this student
                  will be removed. This action can not be undone.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Cancel
               </Button>
               <Button onClick={handleDeleteStudent} color="primary" autoFocus>
                  Delete Student
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
