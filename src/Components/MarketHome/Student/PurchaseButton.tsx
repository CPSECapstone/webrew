import { ApolloError } from '@apollo/client';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListingFieldsFragment, usePurchaseMutation } from '../../../__generated__/types';
import { LargeTextField } from '../FieldStyles';

type Props = {
   purchasable: boolean;
   listingInfo: ListingFieldsFragment;
   refetch: any;
};

export function PurchaseButton({ purchasable, listingInfo, refetch }: Props) {
   const [open, setOpen] = useState(false);
   const [, setError] = useState(false);
   const { classId } = useParams<Record<string, string>>();

   const handleCloseEditing = () => {
      setOpen(false);
   };

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setError(false);
      setOpen(false);
   };

   const handleError = (_error: ApolloError) => {
      setError(true);
      console.log(_error);
   };

   const onMutationCompleted = () => {
      console.log('Mutation Completed');
      setError(false);
      handleClose();
      refetch();
   };

   const [purchase, { loading: mutationLoading }] = usePurchaseMutation({
      onError: handleError,
      onCompleted: onMutationCompleted,
   });

   const handleClickPurchase = (note: string) => {
      purchase({
         variables: {
            course: classId,
            note,
            listingId: listingInfo.id,
            quantity: 1,
         },
      }).catch((e) => console.log(e));
   };
   return (
      <div>
         <Button
            onClick={handleClickOpen}
            disabled={!purchasable}
            data-testid="purchase-btn"
            style={{
               backgroundColor: purchasable ? '#2f80ed' : '#BDBDBD',
               color: 'white',
               borderRadius: '12px',
            }}
         >
            Purchase
         </Button>

         <Dialog
            open={open}
            fullWidth
            onClose={handleCloseEditing}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            data-testid="create-dialog"
         >
            <DialogContent>
               <div>
                  <div className="listing-card-image">
                     <img
                        src={listingInfo.image}
                        alt=""
                        style={{
                           borderRadius: '50%',
                           width: '125px',
                           height: '125px',
                        }}
                     />
                  </div>
                  <div className="listing-card-body">
                     <h3 className="listing-title">
                        <span>{listingInfo.listingName}</span>
                     </h3>
                     <p className="listing-description">{listingInfo.description}</p>

                     <p className="listing-points">{listingInfo.price} P</p>
                  </div>
               </div>
               <Formik
                  initialValues={{ note: '' }}
                  onSubmit={(values, { setSubmitting }) => {
                     setSubmitting(false);
                     handleClickPurchase(values.note);
                  }}
               >
                  {({ handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                     <Form onSubmit={handleSubmit}>
                        <LargeTextField
                           id="note"
                           label="Note (optional)"
                           type="text"
                           fullWidth
                           variant="outlined"
                           margin="dense"
                           onChange={handleChange}
                           onBlur={handleBlur}
                        />
                        <div style={{ float: 'left', marginTop: '10px', position: 'absolute' }}>
                           {mutationLoading ? <CircularProgress size={25} /> : <></>}
                        </div>
                        <DialogActions>
                           <Button
                              data-testid="purchase-btn"
                              type="submit"
                              disabled={isSubmitting}
                              style={{
                                 backgroundColor: purchasable ? '#2f80ed' : '#BDBDBD',
                                 color: 'white',
                                 borderRadius: '12px',
                              }}
                           >
                              Complete Purchase
                           </Button>{' '}
                        </DialogActions>
                     </Form>
                  )}
               </Formik>
            </DialogContent>
         </Dialog>
      </div>
   );
}
