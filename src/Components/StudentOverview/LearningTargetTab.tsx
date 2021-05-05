import { Tab } from '@material-ui/core';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import React, { useState } from 'react';
import LTStudentViewTable from './LTStudentViewTable';
import LTTargetViewTable from './LTTargetViewTable';

function LearningTargetTab() {
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
               label="Target View"
               value="2"
               className={value === '2' ? 'selected-inner-tab' : 'inner-tab'}
            />
         </TabList>
         <TabPanel value="1">
            <LTStudentViewTable />
         </TabPanel>
         <TabPanel value="2">
            <LTTargetViewTable />
         </TabPanel>
      </TabContext>
   );
}

export default LearningTargetTab;
