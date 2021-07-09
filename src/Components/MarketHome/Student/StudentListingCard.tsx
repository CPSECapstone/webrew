import { Button, CircularProgress } from '@material-ui/core';
import { ListingFieldsFragment } from '../../../__generated__/types';

type Props = {
   listingInfo: ListingFieldsFragment;
   editListings: any;
};

export function StudentListingCard({ listingInfo, editListings }: Props) {
   return (
      <div className="listing-card-outer">
         <div className="listing-card">
            <div>
               <div className="listing-card-image">
                  <img
                     src={listingInfo.image}
                     alt=""
                     style={{ borderRadius: '50%', width: '125px', height: '125px' }}
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
                        style={{ backgroundColor: '#2f80ed', color: 'white', borderRadius: '12px' }}
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
