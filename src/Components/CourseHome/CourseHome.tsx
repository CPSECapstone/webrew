/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
   createStyles,
   FormControl,
   InputLabel,
   makeStyles,
   MenuItem,
   Select,
   Theme,
} from '@material-ui/core';

import { useClassMissionMasteryQuery } from '../../__generated__/types';
import '../TableComponent/TableComponent.css';
import MissionIcon from '../../assets/images/missionmedical-logo.png';
import ListView from './ListView';
import SeatingChartView from './SeatingChartView';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      tableContainer: {
         flexGrow: 1,
         backgroundColor: theme.palette.background.paper,
      },
   })
);

function CourseHome() {
   const classes = useStyles();
   const [viewType, setViewType] = useState('List');

   const { data: missionMasteryData } = useClassMissionMasteryQuery();
   console.log(missionMasteryData);

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setViewType(event.target.value as string);
   };

   return (
      <div>
         <div
            className=""
            style={{
               height: '200px',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
            }}
         >
            <div className="row ">
               <img
                  src={MissionIcon}
                  alt=""
                  style={{
                     marginRight: '-28px',
                     marginTop: '-8px',
                     width: '90px',
                     height: '90px',
                     zIndex: 1,
                     position: 'relative',
                  }}
               />
               <div
                  style={{
                     color: 'white',
                     fontSize: '50px',
                     fontWeight: 'bold',
                     display: 'inline-block',
                     minWidth: '550px',
                     height: '75px',
                     textAlign: 'center',

                     background:
                        'linear-gradient(90deg, rgb(49, 119, 238) 0%, rgb(17, 61, 138) 100%) white',
                  }}
               >
                  {missionMasteryData ? missionMasteryData.classMissionMastery?.mission.name : ''}
               </div>
            </div>
         </div>

         <div className={classes.tableContainer}>
            <FormControl style={{ minWidth: '150px', marginLeft: '21px', marginTop: '6px' }}>
               <InputLabel>View As</InputLabel>
               <Select value={viewType} onChange={handleChange}>
                  <MenuItem value="Chart">Seating Chart</MenuItem>
                  <MenuItem value="List">List</MenuItem>
               </Select>
            </FormControl>

            <div className="base-table">
               {missionMasteryData ? (
                  viewType === 'List' ? (
                     <ListView classMissionMasterydata={missionMasteryData.classMissionMastery} />
                  ) : (
                     <SeatingChartView
                        classMissionMasterydata={missionMasteryData.classMissionMastery}
                     />
                  )
               ) : (
                  <div />
               )}
            </div>
         </div>
      </div>
   );
}

export default CourseHome;
