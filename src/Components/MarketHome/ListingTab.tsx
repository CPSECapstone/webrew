import { CircularProgress } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ListingFieldsFragment, useMarketListingsQuery } from '../../__generated__/types';
import CreateListingDialog from './CreateListingDialog';
import ListingCard from './ListingCard';

const sortListings = (a: ListingFieldsFragment, b: ListingFieldsFragment) => {
   return a.listingName.localeCompare(b.listingName);
};

export function ListingTab() {
   const { classId, className } = useParams<Record<string, string>>();

   const [listings, setListings] = useState<ListingFieldsFragment[]>([]);

   const [value, setValue] = useState('1');

   const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: string) => {
      setValue(newValue);
   };

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
      setListings(listings.filter((listing) => listing.id !== listingId));
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
            listings.map((listing: ListingFieldsFragment) => (
               <ListingCard
                  listingInfo={listing}
                  refetch={refetch}
                  removeFromListings={removeFromListings}
                  editListings={editListings}
               />
            ))
         )}
      </div>
   );
}
