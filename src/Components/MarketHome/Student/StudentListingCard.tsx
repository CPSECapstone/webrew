import { ListingFieldsFragment } from '../../../__generated__/types';
import { PurchaseButton } from './PurchaseButton';

type Props = {
   listingInfo: ListingFieldsFragment;
   studentBalance: number;
   refetch: any;
};

export function StudentListingCard({ listingInfo, studentBalance, refetch }: Props) {
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
                  <PurchaseButton
                     purchasable={purchasable}
                     listingInfo={listingInfo}
                     refetch={refetch}
                  />
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
