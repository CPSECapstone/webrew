import { useParams } from 'react-router-dom';
import { ListingFieldsFragment, useMarketListingsQuery } from '../../__generated__/types';
import ListingCard from './ListingCard';

function MarketHome() {
   const { className } = useParams<Record<string, string>>();
   const { loading, error, data } = useMarketListingsQuery({
      variables: {
         courseId: className,
      },
   });

   if (loading) return <div>Loading...</div>;
   if (error) return <div>`Error! ${error.message}`</div>;
   if (!data) {
      return <></>;
   }
   const { marketListings } = data;

   return (
      <div>
         <h1>{className} Marketplace</h1>
         {marketListings.map((listing: ListingFieldsFragment) => (
            <ListingCard listingInfo={listing} />
         ))}
      </div>
   );
}

export default MarketHome;
