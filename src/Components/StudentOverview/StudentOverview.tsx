import { Theme, createStyles, makeStyles, Tab } from '@material-ui/core';
import React, { useState } from 'react';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import TabList from '@material-ui/lab/TabList';
import { useParams } from 'react-router-dom';
import LearningTargetTab from './LearningTargetTab';
import MissionsTab from './MissionsTab';

import '../TableComponent/TableComponent.css';
import './StudentOverview.css';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      tabContainer: {
         flexGrow: 1,
         backgroundColor: theme.palette.background.paper,
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

function StudentOverview() {
   const classes = useStyles();
   const { className } = useParams<Record<string, string | undefined>>();

   const [value, setValue] = useState('1');

   const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: string) => {
      setValue(newValue);
   };

   return (
      <div>
         <div
            style={{
               color: 'white',
               fontSize: '50px',
               fontWeight: 'bold',
               background:
                  'linear-gradient(90deg, rgb(49, 119, 238) 0%, rgb(17, 61, 138) 100%) white',
            }}
         >
            {className}
         </div>
         <div className={classes.tabContainer}>
            <TabContext value={value}>
               <TabList onChange={handleChange} variant="fullWidth" centered>
                  <Tab
                     label="Learning Targets"
                     value="1"
                     className={value === '1' ? classes.selectedTab : classes.defaultTab}
                  />
                  <Tab
                     label="Missions"
                     value="2"
                     className={value === '2' ? classes.selectedTab : classes.defaultTab}
                  />
               </TabList>
               <TabPanel value="1">
                  <LearningTargetTab />
               </TabPanel>
               <TabPanel value="2">
                  <MissionsTab />
               </TabPanel>
            </TabContext>
         </div>
      </div>
   );
}

export default StudentOverview;
