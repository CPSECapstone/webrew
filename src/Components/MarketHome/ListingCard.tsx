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
            <div className="listing-card-header" />
            <div className="listing-card-body">
               <h3 className="listing-title">
                  <span>{listingInfo.listingName}</span>
               </h3>
               <p className="listing-instrucor">{listingInfo.price} Points</p>
               <p className="listing-desc">
                  <span>{listingInfo.description}</span>
               </p>
            </div>
            <div>
               <FontAwesomeIcon icon={faBell} size="lg" className="listing-icon" />
               <FontAwesomeIcon icon={faFolder} size="lg" className="listing-icon" />
            </div>
         </div>
      </Link>
   );
}
