import { useParams } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useMarketListingsQuery, useStudentInfoQuery } from '../../../__generated__/types';

export function MarketHomeStudent() {
   const { classId } = useParams<Record<string, string>>();

   const { loading: studentLoading, error: errorStudent, data: studentData } = useStudentInfoQuery({
      variables: {
         courseId: classId,
      },
   });

   const {
      loading: listingLoading,
      error: errorListings,
      data: listingData,
   } = useMarketListingsQuery({
      variables: {
         courseId: classId,
      },
   });

   return (
      <div className="student-market-home">
         {studentData ? (
            <div>
               <h1 className="student-welcome">
                  Hello {studentData.student.firstName}! Welcome to your account.
               </h1>
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
      </div>
   );
}
