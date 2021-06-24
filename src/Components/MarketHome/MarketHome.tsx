/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ApolloError } from '@apollo/client/errors';
import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListingFieldsFragment, useMarketListingsQuery } from '../../__generated__/types';
import CreateListingDialog from './CreateListingDialog';
import ListingCard from './ListingCard';

const sortListings = (a: ListingFieldsFragment, b: ListingFieldsFragment) => {
   return a.listingName.localeCompare(b.listingName);
};

function loader(
   loading: boolean,
   error: ApolloError | undefined,
   data: any,
   listings: ListingFieldsFragment[]
) {
   if (loading)
      return (
         <div>
            <CircularProgress size={150} />
         </div>
      );
   if (error) return <div>`Error! ${error.message}`</div>;
   if (!data) {
      return <></>;
   }

   return listings.map((listing: ListingFieldsFragment) => <ListingCard listingInfo={listing} />);
}

function MarketHome() {
   const { className } = useParams<Record<string, string>>();
   const [listings, setListings] = useState<ListingFieldsFragment[]>([]);

   const { loading, error, data, refetch } = useMarketListingsQuery({
      variables: {
         courseId: className,
      },
   });

   React.useEffect(() => {
      if (!data) {
         return;
      }
      setListings([...data.marketListings].sort(sortListings));
   }, [data]);

   const addToListings = (listing: ListingFieldsFragment) => {
      setListings([...listings, listing].sort(sortListings));
   };

   return (
      <div>
         <h1 className="market-course-header">{className} Marketplace</h1>
         <CreateListingDialog course={className} callback={addToListings} refetch={refetch} />
         {loader(loading, error, data, listings)}
      </div>
   );
}

export default MarketHome;
