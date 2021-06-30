/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button } from 'aws-amplify-react';
import { ApolloError } from '@apollo/client';
import { CircularProgress } from '@material-ui/core';
import {
   FulfillMutation,
   ReceiptInfoFragment,
   useFulfillMutation,
} from '../../__generated__/types';
import ReceiptMenu from './SimplyMenu';

type Props = {
   purchase: ReceiptInfoFragment;
   displayStudentName: boolean;
   displayListingName: boolean;
   editPurchase: any;
};

function determineMiddleText(displayListingName: boolean, displayStudentName: boolean) {
   if (displayListingName && displayStudentName) {
      return ' purchased ';
   }
   if (displayListingName) {
      return 'Purchased ';
   }
   return '';
}

export function PurchaseCard({
   purchase,
   displayListingName,
   displayStudentName,
   editPurchase,
}: Props) {
   const middleText = determineMiddleText(displayListingName, displayStudentName);

   const onMutationCompleted = (data: FulfillMutation) => {
      console.log('Mutation Completed');
      editPurchase(data.fulfillPurchase);
   };

   const onMutationError = (e: ApolloError) => {
      console.log(e.message);
   };

   const [fulfill, { loading: mutationLoading }] = useFulfillMutation({
      onCompleted: onMutationCompleted,
      onError: onMutationError,
   });

   const onClickFulfill = () => {
      fulfill({
         variables: {
            fulfilled: true,
            course: purchase.course,
            receiptId: purchase.receiptId,
         },
      });
   };

   const onClickUnFulfill = () => {
      fulfill({
         variables: {
            fulfilled: false,
            course: purchase.course,
            receiptId: purchase.receiptId,
         },
      });
   };

   return (
      <div className="purchase-card">
         <ReceiptMenu onClickUnfulfill={onClickUnFulfill} fulfilled={purchase.fulfilled} />
         {!purchase.fulfilled ? (
            <div>
               <Button
                  style={{
                     outline: '0px',
                     backgroundColor: 'green',
                     border: '0px',
                     float: 'right',
                     color: 'grey',
                  }}
                  color="primary"
                  aria-label="Fulfill"
                  onClick={onClickFulfill}
               >
                  <span>Fulfill </span>
                  {mutationLoading ? <CircularProgress size={15} /> : <></>}
               </Button>
            </div>
         ) : (
            <></>
         )}

         <h6>{`${
            displayStudentName ? `${purchase.student.firstName} ${purchase.student.lastName}` : ''
         }${middleText}${displayListingName ? purchase.listingName : ''}`}</h6>
         <p>{`${purchase.purchaseDate}`}</p>
         {purchase.quantity > 1 ? <p>Quantity: {`${purchase.quantity}`}</p> : <></>}
         <p>
            Spent: {`${purchase.pointsSpent}`} Point{purchase.pointsSpent > 1 ? 's' : ''}
         </p>
         {purchase.note !== '' ? <p>Note: {`${purchase.note}`}</p> : <></>}
      </div>
   );
}
