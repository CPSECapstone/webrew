/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   TextField,
   DialogActions,
} from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import {
   ListingFieldsFragment,
   ListingFieldsFragmentDoc,
   useAddListingMutation,
} from '../../__generated__/types';

const LargeTextField = styled(TextField)`
   input {
      height: 50px;
      font-size: 20px;
   }
`;
const SmallTextField = styled(TextField)`
   input {
      height: 30px;
      font-size: 20px;
   }
`;

const Container = styled.div`
   text-align: left;
   fontfamily: 'Poppins', sans-serif;
   margin-left: 36px;
`;

type Props = {
   course: string;
   callback: any;
   refetch: any;
};

function CreateListingDialog(props: Props) {
   const [open, setOpen] = useState(false);
   const [addListing] = useAddListingMutation();

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <Container>
         <div>
            <Button
               style={{
                  width: 200,
                  marginTop: 20,
                  backgroundColor: '#4274F3',
                  color: 'white',
               }}
               onClick={handleClickOpen}
               data-testid="create-btn"
            >
               Create New Listing
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
                  New Listing
               </DialogTitle>
               <DialogContent>
                  <Formik
                     initialValues={{
                        listingName: '',
                        description: '',
                        image: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/73614/preview.svg',
                        price: '',
                        stock: '',
                     }}
                     onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                           setSubmitting(false);
                           props.callback({
                              listingName: values.listingName,
                              price: values.price,
                              image: values.image,
                           });
                           handleClose();
                           addListing({
                              variables: {
                                 course: props.course,
                                 input: {
                                    listingName: values.listingName,
                                    description: values.description,
                                    image: values.image,
                                    price: parseInt(values.price, 10),
                                    stock: values.stock === '' ? -1 : parseInt(values.stock, 10),
                                 },
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
                              .catch((error) => console.log(error));
                        }, 0);
                     }}
                  >
                     {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                           <LargeTextField
                              required
                              id="listingName"
                              label="Listing Name"
                              type="text"
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              value={values.listingName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />

                           <LargeTextField
                              required
                              id="description"
                              label="Description"
                              type="text"
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              value={values.description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <SmallTextField
                              required
                              id="image"
                              label="Image"
                              type="text"
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              value={values.image}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <SmallTextField
                              required
                              id="price"
                              label="Price"
                              type="number"
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              value={values.price}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <SmallTextField
                              required
                              id="stock"
                              label="Stock"
                              type="number"
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              value={values.stock}
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
                        </Form>
                     )}
                  </Formik>
               </DialogContent>
            </Dialog>
         </div>
      </Container>
   );
}

export default CreateListingDialog;
