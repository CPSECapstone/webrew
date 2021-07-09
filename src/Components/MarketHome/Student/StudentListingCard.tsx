import { Button, CircularProgress } from '@material-ui/core';
import { ListingFieldsFragment } from '../../../__generated__/types';

type Props = {
   listingInfo: ListingFieldsFragment;
   editListings: any;
   studentBalance: number;
};

export function StudentListingCard({ listingInfo, editListings, studentBalance }: Props) {
   const purchasable =
      studentBalance >= listingInfo.price &&
      ((listingInfo.stock && listingInfo.stock > 0) || !listingInfo.stock?.valueOf);
   return (
      <div className="listing-card-outer">
         <div className="listing-card">
            <div>
               <div className="listing-card-image">
                  <img
                     src={listingInfo.image}
                     alt=""
                     style={{
                        borderRadius: '50%',
                        width: '125px',
                        height: '125px',
                     }}
                  />
               </div>
               <div className="listing-card-body">
                  <h3 className="listing-title">
                     <span>{listingInfo.listingName}</span>
                  </h3>
                  <p className="listing-points">{listingInfo.price} P</p>
                  <div className="listing-card-button">
                     <Button
                        data-testid="purchase-btn"
                        style={{
                           backgroundColor: purchasable ? '#2f80ed' : '#BDBDBD',
                           color: 'white',
                           borderRadius: '12px',
                        }}
                     >
                        Purchase
                     </Button>
                  </div>
                  {listingInfo.stock != null ? (
                     <p className="listing-stock">{listingInfo.stock} Left</p>
                  ) : (
                     <></>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
