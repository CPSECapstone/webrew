/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReceiptInfoFragment, useRecentQuery } from '../../__generated__/types';
import { PurchaseCard } from './PurchaseCard';

const sortPurchases = (a: ReceiptInfoFragment, b: ReceiptInfoFragment) => {
   if (a.fulfilled === b.fulfilled) {
      return 0;
   }
   return a.fulfilled ? 1 : -1;
};

export function PurchaseTab() {
   const { classId } = useParams<Record<string, string>>();
   const [purchases, setPurchases] = useState<ReceiptInfoFragment[]>([]);

   const removeFromPurchases = (receiptId: string) => {
      setPurchases(
         purchases.filter((p) => {
            return p.receiptId !== receiptId;
         })
      );
   };

   const { loading, error, data } = useRecentQuery({
      variables: {
         course: classId,
         fetch: 50,
      },
   });

   useEffect(() => {
      if (data) {
         setPurchases([...data.recentPurchases].sort(sortPurchases));
      }
   }, [data]);

   const editPurchase = (edited: ReceiptInfoFragment) => {
      // 1. Make a shallow copy of the items
      const items = [...purchases];
      const itemIndex = items.findIndex((purchase) => purchase.receiptId === edited.receiptId);
      items[itemIndex] = edited;

      setPurchases(items);
   };

   if (loading || !data) {
      return (
         <div className="center">
            <CircularProgress size={150} />
         </div>
      );
   }

   if (error) {
      return <s>{error}</s>;
   }

   return (
      <div>
         {purchases.map((purchase) => {
            return (
               <PurchaseCard
                  deletePurchase={removeFromPurchases}
                  purchase={purchase}
                  displayListingName
                  displayStudentName
                  editPurchase={editPurchase}
               />
            );
         })}
      </div>
   );
}
