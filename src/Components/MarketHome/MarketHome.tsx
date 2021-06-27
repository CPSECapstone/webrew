/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CircularProgress, createStyles, List, makeStyles, Tab, Theme } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListingFieldsFragment, useMarketListingsQuery } from '../../__generated__/types';

import CreateListingDialog from './CreateListingDialog';
import ListingCard from './ListingCard';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((_theme: Theme) =>
   createStyles({
      tabContainer: {
         flexGrow: 1,
      },
      selectedTab: {
         backgroundColor: 'rgb(109, 158, 235)',
         fontSize: '24px',
         color: 'white',
         fontWeight: 'bold',
      },
      defaultTab: {
         backgroundColor: 'rgb(238, 238, 238)',
         fontSize: '24px',
         color: 'black',
         fontWeight: 'bold',
      },
   })
);

const sortListings = (a: ListingFieldsFragment, b: ListingFieldsFragment) => {
   return a.listingName.localeCompare(b.listingName);
};

function MarketHome() {
   const classes = useStyles();

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
      <div className="content-container col-md-10 p-0">
         <div className={classes.tabContainer}>
            <TabContext value={value}>
               <TabList onChange={handleChange} variant="fullWidth" centered>
                  <Tab
                     label="Listings"
                     value="1"
                     className={value === '1' ? classes.selectedTab : classes.defaultTab}
                  />
                  <Tab
                     label="Purchases"
                     value="2"
                     className={value === '2' ? classes.selectedTab : classes.defaultTab}
                  />
                  <Tab
                     label="Students"
                     value="3"
                     className={value === '3' ? classes.selectedTab : classes.defaultTab}
                  />
               </TabList>
               <TabPanel value="1">
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
               </TabPanel>
               <TabPanel value="2">Purchases</TabPanel>
               <TabPanel value="3">Students</TabPanel>
            </TabContext>
         </div>
      </div>
   );
}

export default MarketHome;
