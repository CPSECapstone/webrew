/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { ListingFieldsFragment, useDeleteListingMutation } from '../../__generated__/types';
import './ListingCard.scss';

type Props = {
   listingInfo: ListingFieldsFragment;
   refetch: any;
   removeFromListings: (arg0: string) => void;
};

export default function ListingCard({ listingInfo, refetch, removeFromListings }: Props) {
   const [open, setOpen] = useState(false);
   const [deleteListing] = useDeleteListingMutation();

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleDelete = () => {
      handleClose();
      removeFromListings(listingInfo.id);
      deleteListing({
         variables: {
            course: listingInfo.course,
            id: listingInfo.id,
         },
      })
         .then(() => {
            refetch();
         })
         .catch((error) => console.log(error));
   };

   return (
      <div className="listing-card-outer">
         <Button onClick={handleClickOpen}>
            <div className="listing-card">
               <div className="listing-card-image">
                  <img
                     src={listingInfo.image}
                     alt=""
                     style={{ width: 100, height: 100, borderRadius: '50%' }}
                  />
               </div>
               <div className="listing-card-body">
                  <h3 className="listing-title">
                     <span>{listingInfo.listingName}</span>
                  </h3>
                  <p className="listing-points">{listingInfo.price} P</p>
               </div>
            </div>
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
               {listingInfo.listingName}
            </DialogTitle>
            <DialogContent dividers>
               <img
                  src={listingInfo.image}
                  alt=""
                  style={{ width: 150, height: 150, borderRadius: '90%' }}
               />
               <h3 className="listing-card-details">{listingInfo.price} Points</h3>
               <h5 className=".listing-card-details">Listed {listingInfo.listedDate}</h5>
               <h5 className=".listing-card-details">
                  Purchased {listingInfo.timesPurchased} Times
               </h5>
               <Typography gutterBottom>{listingInfo.description}</Typography>
            </DialogContent>
            <DialogActions>
               <Button autoFocus onClick={handleClose} color="primary">
                  Edit
               </Button>
               <Button autoFocus onClick={handleDelete} color="primary">
                  Delete
               </Button>
            </DialogActions>{' '}
         </Dialog>
      </div>
   );
}
