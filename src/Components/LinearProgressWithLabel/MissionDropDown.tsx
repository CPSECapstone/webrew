import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { TaskStats } from '../../__generated__/types';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         width: '100%',
         maxWidth: 500,
         backgroundColor: theme.palette.background.paper,
      },
      nested: {
         paddingLeft: theme.spacing(4),
      },
      progressBar: {
         minWidth: '150px',
      },
   })
);

const DoublePaddedDiv = styled.div`
   padding-left: 40px;
   width: 100%;
   justify-content: left;
`;

export interface MissionDropDownProps {
   name: string;
   progress: TaskStats[];
}

// Handles state to open or close dropdown
function handleClick(
   openObjectBool: boolean,
   openFunction: React.Dispatch<React.SetStateAction<boolean>>
): void {
   openFunction(!openObjectBool);
}

export default function MissionDropDown({ name, progress }: MissionDropDownProps) {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   const TARGET_PERCENT = 50;

   return (
      <List component="div" disablePadding>
         <ListItem button onClick={() => handleClick(open, setOpen)}>
            {open ? <ExpandLess /> : <ExpandMore />}
            <ListItemText primary={name} />
            <LinearProgressWithLabel className={classes.progressBar} value={TARGET_PERCENT} />
         </ListItem>

         <Divider orientation="horizontal" />
         <Collapse in={open} timeout="auto" unmountOnExit>
            {progress.map((task: TaskStats) => (
               <Link to="/viewTask">
                  <List component="div" disablePadding>
                     <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <DoublePaddedDiv>
                           <ListItem button className={classes.nested} divider>
                              <ListItemText primary={task.name} />
                              {(() => {
                                 if (task?.submission?.graded) {
                                    return (
                                       <LinearProgressWithLabel
                                          className={classes.progressBar}
                                          value={
                                             ((task?.submission?.pointsAwarded as number) /
                                                (task?.submission?.pointsPossible as number)) *
                                             100
                                          }
                                       />
                                    );
                                 }

                                 return (
                                    <LinearProgressWithLabel
                                       className={classes.progressBar}
                                       value={0}
                                    />
                                 );
                              })()}
                           </ListItem>
                        </DoublePaddedDiv>
                     </div>
                  </List>
               </Link>
            ))}
         </Collapse>
      </List>
   );
}
