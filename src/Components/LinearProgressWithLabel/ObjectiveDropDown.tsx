import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { Task } from '../../interfaces/Task';

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

const PaddedDiv = styled.div`
   padding-left: 30px;
`;

const DoublePaddedDiv = styled.div`
   padding-left: 40px;
`;

export interface ObjectiveDropDownProps {
   name: string;
   tasks: Task[];
}

// Handles state to open and close dropdown
function handleClick(
   openObjectBool: boolean,
   openFunction: React.Dispatch<React.SetStateAction<boolean>>
): void {
   openFunction(!openObjectBool);
}

export default function TargetDropDown({ name, tasks }: ObjectiveDropDownProps) {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   const TASK_PERCENT = 100;
   const OBJECTIVE_PERCENT = 50;

   return (
      <List component="div" disablePadding>
         <PaddedDiv>
            <ListItem button onClick={() => handleClick(open, setOpen)}>
               <ListItemText primary={name} />
               <LinearProgressWithLabel className={classes.progressBar} value={OBJECTIVE_PERCENT} />
               {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
         </PaddedDiv>
         <Collapse in={open} timeout="auto" unmountOnExit>
            {tasks.map((task: Task) => (
               <List component="div" disablePadding>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                     <DoublePaddedDiv>
                        <ListItem button className={classes.nested}>
                           <ListItemText primary={task.name} />
                           <LinearProgressWithLabel
                              className={classes.progressBar}
                              value={TASK_PERCENT}
                           />
                        </ListItem>
                     </DoublePaddedDiv>
                  </div>
               </List>
            ))}
         </Collapse>
      </List>
   );
}