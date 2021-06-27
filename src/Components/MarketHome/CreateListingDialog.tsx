/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Dialog, DialogTitle, DialogContent, IconButton } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { MarketListingInput, useAddListingMutation } from '../../__generated__/types';
import ListingForm, { MarketListingFormInput } from './ListingForm';
import { Container } from './FieldStyles';

type Props = {
   course: string;
   callback: any;
   refetch: any;
};

export function listingFormToInputType(values: MarketListingFormInput): MarketListingInput {
   return {
      listingName: values.listingName,
      description: values.description,
      image: values.image,
      price: parseInt(values.price, 10),
      stock: values.stock === '' ? -1 : parseInt(values.stock, 10),
   };
}

function CreateListingDialog(props: Props) {
   const [open, setOpen] = useState(false);
   const [addListing] = useAddListingMutation();

   const initialValues: MarketListingFormInput = {
      price: '',
      stock: '',
      image: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/73614/preview.svg',
      description: '',
      listingName: '',
   };

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleSubmit = (values: MarketListingFormInput) => {
      props.callback({
         listingName: values.listingName,
         price: values.price,
         image: values.image,
         id: '-1',
      });
      handleClose();
      addListing({
         variables: {
            course: props.course,
            input: listingFormToInputType(values),
         },
         optimisticResponse: {
            __typename: 'Mutation',
            addMarketListing: {
               course: props.course,
               timesPurchased: 0,
               __typename: 'MarketListing',
               id: 'temp',
               listedDate: new Date(),
               listingName: values.listingName,
               description: values.description,
               image: values.image,
               price: parseInt(values.price, 10),
               stock: values.stock === '' ? -1 : parseInt(values.stock, 10),
            },
         },
      })
         .then(() => props.refetch())
         .catch((error) => {
            props.refetch();
            console.log(error);
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
               aria-label="Create Listing"
               onClick={handleClickOpen}
            >
               <AddShoppingCartIcon />
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
                  New Listing
               </DialogTitle>
               <DialogContent>
                  <ListingForm
                     initialValues={initialValues}
                     handleClose={handleClose}
                     onSubmit={handleSubmit}
                  />
               </DialogContent>
            </Dialog>
         </div>
      </Container>
   );
}

export default CreateListingDialog;
