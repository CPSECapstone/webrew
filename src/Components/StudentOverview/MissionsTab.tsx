import { Tab } from '@material-ui/core';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import React, { useState } from 'react';
import MissionStudentViewTable from './MissionStudentViewTable';

function MissionsTab() {
   const [value, setValue] = useState('1');

   const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: string) => {
      setValue(newValue);
   };

   return (
      <TabContext value={value}>
         <TabList onChange={handleChange} centered>
            <Tab
               label="Student View"
               value="1"
               className={value === '1' ? 'selected-inner-tab' : 'inner-tab'}
            />
            <Tab
               label="Task View"
               value="2"
               className={value === '2' ? 'selected-inner-tab' : 'inner-tab'}
            />
            <Tab
               label="Objective View"
               value="3"
               className={value === '3' ? 'selected-inner-tab' : 'inner-tab'}
            />
         </TabList>
         <TabPanel value="1">
            <MissionStudentViewTable />
         </TabPanel>
         <TabPanel value="2">Mission Task View Table</TabPanel>
         <TabPanel value="3">Mission Objective View Table</TabPanel>
      </TabContext>
   );
}

export default MissionsTab;
