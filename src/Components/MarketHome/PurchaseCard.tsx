/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button } from 'aws-amplify-react';
import { ApolloError } from '@apollo/client';
import { CircularProgress } from '@material-ui/core';
import {
   FulfillMutation,
   ReceiptInfoFragment,
   useFulfillMutation,
   useRefundMutation,
} from '../../__generated__/types';
import ReceiptMenu from './SimplyMenu';

type Props = {
   purchase: ReceiptInfoFragment;
   displayStudentName: boolean;
   displayListingName: boolean;
   editPurchase: any;
   deletePurchase: any;
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
   deletePurchase,
}: Props) {
   const middleText = determineMiddleText(displayListingName, displayStudentName);

   const onFulfillCompleted = (data: FulfillMutation) => {
      console.log('Mutation Completed');
      editPurchase(data.fulfillPurchase);
   };

   const onRefundCompleted = () => {
      console.log('Mutation Completed');
      deletePurchase(purchase.receiptId);
   };

   const onFulfillError = (e: ApolloError) => {
      console.log(e.message);
   };

   const onRefundError = (e: ApolloError) => {
      console.log(e.message);
   };

   const [fulfill, { loading: fulfillLoading }] = useFulfillMutation({
      onCompleted: onFulfillCompleted,
      onError: onFulfillError,
   });

   const [refund] = useRefundMutation({
      onCompleted: onRefundCompleted,
      onError: onRefundError,
   });

   const onClickFulfill = () => {
      fulfill({
         variables: {
            fulfilled: true,
            course: purchase.course,
            receiptId: purchase.receiptId,
         },
      }).catch((e) => console.log(e));
   };

   const onClickUnFulfill = () => {
      fulfill({
         variables: {
            fulfilled: false,
            course: purchase.course,
            receiptId: purchase.receiptId,
         },
      }).catch((e) => console.log(e));
   };

   const onClickRefund = () => {
      refund({
         variables: {
            course: purchase.course,
            receiptId: purchase.receiptId,
         },
      }).catch((e) => console.log(e));
   };

   return (
      <div className="purchase-card">
         <ReceiptMenu
            onClickUnfulfill={onClickUnFulfill}
            fulfilled={purchase.fulfilled}
            onClickRefund={onClickRefund}
         />
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
                  {fulfillLoading ? <CircularProgress size={15} /> : <></>}
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
