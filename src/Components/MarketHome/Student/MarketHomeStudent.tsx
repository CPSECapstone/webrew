import { useParams } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import {
   ListingFieldsFragment,
   useMarketListingsQuery,
   useStudentInfoQuery,
} from '../../../__generated__/types';
import ListingCard from '../ListingCard';
import { sortListings } from '../ListingTab';
import { StudentListingCard } from './StudentListingCard';

export function MarketHomeStudent() {
   const { classId, className } = useParams<Record<string, string>>();
   const [listings, setListings] = useState<ListingFieldsFragment[]>([]);

   const {
      loading: studentLoading,
      error: errorStudent,
      data: studentData,
      refetch: refetchStudent,
   } = useStudentInfoQuery({
      variables: {
         courseId: classId,
      },
   });

   const {
      loading: listingLoading,
      error: errorListings,
      data: listingData,
      refetch: refetchListings,
   } = useMarketListingsQuery({
      variables: {
         courseId: classId,
      },
   });

   const refetchAll = () => {
      refetchStudent().catch((e) => console.log(e));
      refetchListings().catch((e) => console.log(e));
   };

   useEffect(() => {
      if (!listingData || !studentData) {
         return;
      }
      setListings([...listingData.marketListings].sort(sortListings));
   }, [listingData, studentData]);

   const editListings = (listingId: string, info: any) => {
      // 1. Make a shallow copy of the items
      const items = [...listings];
      const itemIndex = items.findIndex((listing) => listing.id === listingId);
      items[itemIndex] = info;

      setListings(items);
   };

   if (!studentData) {
      return <></>;
   }
   const { student } = studentData;

   return (
      <div className="student-market-home">
         {studentData ? (
            <div>
               <h2 className="student-welcome">
                  Hello {studentData.student.firstName}! Welcome to your {className} account.
               </h2>
               <div className="account-card">
                  <div className="account-card-contents">
                     <h5 className="account-card-header">Account Balance</h5>
                     <h3 className="student-balance">${studentData.student.points} EXP</h3>
                  </div>
               </div>
               <div className="student-listing-header">
                  <ShoppingCartIcon style={{ fontSize: 48 }} />
                  <span> Marketplace</span>
               </div>
               <hr className="line" />
            </div>
         ) : (
            <></>
         )}
         <div className="listing-card-outer">
            {listingLoading || !listingData ? (
               <div className="center">
                  <CircularProgress size={150} />
               </div>
            ) : (
               listingData.marketListings.map((listing: ListingFieldsFragment) => {
                  return (
                     <StudentListingCard
                        refetch={refetchAll}
                        listingInfo={listing}
                        editListings={editListings}
                        studentBalance={student.points}
                     />
                  );
               })
            )}
         </div>
      </div>
   );
}
