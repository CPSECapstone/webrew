/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { faBell, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ListingFieldsFragment } from '../../__generated__/types';
import './ListingCard.scss';

type Props = {
   listingInfo: ListingFieldsFragment;
};

export default function listingCard({ listingInfo }: Props) {
   return (
      <Link to={`/listingHome/${listingInfo.listingName}`}>
         <div className="listing-card">
            <div className="listing-card-image">
               <img
                  src={listingInfo.image}
                  alt=""
                  style={{ width: 100, height: 100, borderRadius: '50%' }}
               />
            </div>
            <div className="listing-card-body">
               <h3 className="listing-title">
                  <span>{listingInfo.listingName}</span>
               </h3>
               <p className="listing-points">{listingInfo.price} Points</p>
            </div>
         </div>
      </Link>
   );
}
