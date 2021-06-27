/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CircularProgress, createStyles, List, makeStyles, Tab, Theme } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListingFieldsFragment, useMarketListingsQuery } from '../../__generated__/types';

import CreateListingDialog from './CreateListingDialog';
import ListingCard from './ListingCard';
import { ListingTab } from './ListingTab';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      tabContainer: {
         flexGrow: 1,
      },
      selectedTab: {
         backgroundColor: 'rgb(109, 158, 235)',
         fontSize: '18px',
         color: 'white',
         fontWeight: 'bold',
      },
      defaultTab: {
         backgroundColor: 'rgb(238, 238, 238)',
         fontSize: '18px',
         color: 'black',
         fontWeight: 'normal',
      },
   })
);

const sortListings = (a: ListingFieldsFragment, b: ListingFieldsFragment) => {
   return a.listingName.localeCompare(b.listingName);
};

function MarketHome() {
   const classes = useStyles();

   const [value, setValue] = useState('1');

   const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: string) => {
      setValue(newValue);
   };

   return (
      <div>
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
                  <ListingTab />
               </TabPanel>
               <TabPanel value="2">Purchases</TabPanel>
               <TabPanel value="3">Students</TabPanel>
            </TabContext>
         </div>
      </div>
   );
}

export default MarketHome;
