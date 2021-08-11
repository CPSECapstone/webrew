import { useParams } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import {
   ListingFieldsFragment,
   useMarketListingsQuery,
   useRecentActivityQuery,
   useStudentInfoQuery,
} from '../../../__generated__/types';
import { sortListings } from '../ListingTab';
import { StudentListingCard } from './StudentListingCard';
import { StudentActivityLog } from './StudentActivityLog';

export function MarketHomeStudent() {
   const { classId, className } = useParams<Record<string, string>>();
   const [, setListings] = useState<ListingFieldsFragment[]>([]);

   const {
      loading: activityLoading,
      data: activityData,
      refetch: refetchActivity,
   } = useRecentActivityQuery({
      variables: {
         courseId: classId,
         fetch: 100,
      },
   });

   const {
      loading: studentLoading,
      data: studentData,
      refetch: refetchStudent,
   } = useStudentInfoQuery({
      variables: {
         courseId: classId,
      },
   });

   const {
      loading: listingLoading,
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
      refetchActivity().catch((e) => console.log(e));
   };

   useEffect(() => {
      if (!listingData || !studentData) {
         return;
      }
      setListings([...listingData.marketListings].sort(sortListings));
   }, [listingData, studentData]);

   if (!studentData || studentLoading || activityLoading || !activityData) {
      return (
         <div className="center">
            <CircularProgress size={150} />
         </div>
      );
   }
   const { student } = studentData;
   const { recentActivity } = activityData;

   return (
      <div className="main container-fluid">
         <div className="row h-100">
            <div className="student-market-home col-md-9 p-0 side">
               {studentData ? (
                  <div>
                     <h2 className="student-welcome">
                        Hello {studentData.student.firstName}! Welcome to your {className} account.
                     </h2>
                     <div className="account-card">
                        <div className="account-card-contents">
                           <h5 className="account-card-header">Account Balance</h5>
                           <h3 className="student-balance">{studentData.student.points} Points</h3>
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
                              studentBalance={student.points}
                           />
                        );
                     })
                  )}
               </div>
            </div>
            <StudentActivityLog activity={recentActivity} />
         </div>
      </div>
   );
}
