import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListingFieldsFragment, useMarketListingsQuery } from '../../__generated__/types';
import CreateListingDialog from './CreateListingDialog';
import ListingCard from './ListingCard';

const sortListings = (a: ListingFieldsFragment, b: ListingFieldsFragment) => {
   return a.listingName.localeCompare(b.listingName);
};

const newItemId = '-1';

export function ListingTab() {
   const { classId } = useParams<Record<string, string>>();

   const [deletingId, setDeletingId] = useState<string>('');

   const [listings, setListings] = useState<ListingFieldsFragment[]>([]);

   const { loading, error, data, refetch } = useMarketListingsQuery({
      variables: {
         courseId: classId,
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

   const removeFromListings = (listingId: string) => {
      setDeletingId(listingId);
   };

   const editListings = (listingId: string, info: any) => {
      // 1. Make a shallow copy of the items
      const items = [...listings];
      const itemIndex = items.findIndex((listing) => listing.id === listingId);
      items[itemIndex] = info;

      setListings(items);
   };

   return (
      <div>
         <CreateListingDialog course={classId} callback={addToListings} refetch={refetch} />
         {loading || error || !data ? (
            <div className="center">
               <CircularProgress size={150} />
            </div>
         ) : (
            listings.map((listing: ListingFieldsFragment) => {
               return (
                  <ListingCard
                     deleting={deletingId === listing.id || listing.id === newItemId}
                     listingInfo={listing}
                     refetch={refetch}
                     removeFromListings={removeFromListings}
                     editListings={editListings}
                  />
               );
            })
         )}
      </div>
   );
}
