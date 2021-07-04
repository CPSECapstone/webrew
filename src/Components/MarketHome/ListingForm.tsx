import { Button, DialogActions } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { LargeTextField, SmallTextField } from './FieldStyles';

export type MarketListingFormInput = {
   price: string;
   stock: string;
   image: string;
   description: string;
   listingName: string;
};

type Props = {
   initialValues: MarketListingFormInput;
   onSubmit: (values: MarketListingFormInput) => void;
   handleClose: () => void;
};
export default function ListingForm({ initialValues, onSubmit, handleClose }: Props) {
   return (
      <Formik
         initialValues={initialValues}
         onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
               setSubmitting(false);
               onSubmit(values);
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
                     Save
                  </Button>
               </DialogActions>
            </Form>
         )}
      </Formik>
   );
}
