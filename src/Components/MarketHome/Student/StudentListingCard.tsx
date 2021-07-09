import { CircularProgress } from '@material-ui/core';
import { Button } from 'aws-amplify-react';
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
                     style={{ borderRadius: '50%', width: '150px', height: '150px' }}
                  />
               </div>
               <div className="listing-card-body">
                  <h3 className="listing-title">
                     <span>{listingInfo.listingName}</span>
                  </h3>
                  <p className="listing-points">{listingInfo.price} P</p>
                  <Button class="listing-card-button" data-testid="create-btn">
                     Purchase
                  </Button>
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
