/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CircularProgress, List } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListingFieldsFragment, useMarketListingsQuery } from '../../__generated__/types';
import Sidebar from '../Sidebar/Sidebar';
import SideBarItem from '../Sidebar/SideBarItem';
import CreateListingDialog from './CreateListingDialog';
import ListingCard from './ListingCard';

const sortListings = (a: ListingFieldsFragment, b: ListingFieldsFragment) => {
   return a.listingName.localeCompare(b.listingName);
};

function MarketHome() {
   const { classId, className } = useParams<Record<string, string>>();

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
      setListings(listings.filter((listing) => listing.id !== listingId));
   };

   const editListings = (listingId: string, info: any) => {
      // 1. Make a shallow copy of the items
      const items = [...listings];
      const itemIndex = items.findIndex((listing) => listing.id === listingId);
      items[itemIndex] = info;

      setListings(items);
   };

   const sideBarItems = [
      {
         name: 'Students',
         link: '/',
      },
      {
         name: 'Listings',
         link: `/courseHome/${classId}/${className}`,
      },
      {
         name: 'Purchases',
         link: '/settings',
      },
   ];

   return (
      <div className="main container-fluid">
         <h3 className="market-course-header">{className} Marketplace</h3>
         <div className="row h-100">
            <div className="sidebar-container col-md-2 p-0 side">
               <List component="nav" disablePadding>
                  {sideBarItems.map((item, index) => (
                     // eslint-disable-next-line react/no-array-index-key
                     <SideBarItem {...item} key={index} />
                  ))}
               </List>
            </div>
            <div className="content-container col-md-10 p-0">
               <div>
                  <CreateListingDialog
                     course={classId}
                     callback={addToListings}
                     refetch={refetch}
                  />
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
            </div>
         </div>
      </div>
   );
}

export default MarketHome;
