import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import StudentPicture from '../assets/images/images-1.png';
import { User } from '../interfaces/User';
import LinearProgressWithLabel from './linear-progress-bar';

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

export interface ObjectiveDropDownProps {
   name: string;
   tasks: any;
}

function handleClick(
   openObjectBool: boolean,
   openFunction: React.Dispatch<React.SetStateAction<boolean>>
): void {
   openFunction(!openObjectBool);
}

export default function TargetDropDown({ name, tasks }: ObjectiveDropDownProps) {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const history = useHistory();

   const TASK_PERCENT = 100;
   const OBJECTIVE_PERCENT = 50;

   // const test: any = history.location.state;
   // const inputUser: User = {
   //    id: test?.id,
   //    firstName: test?.firstName,
   //    lastName: test?.lastName,
   // };

   return (
      <List component="div" disablePadding>
         <ListItem button onClick={() => handleClick(open, setOpen)}>
            <ListItemIcon>
               <div />
            </ListItemIcon>
            <ListItemIcon>
               <div />
            </ListItemIcon>
            <ListItemText primary={name} />
            <LinearProgressWithLabel className={classes.progressBar} value={OBJECTIVE_PERCENT} />
            {open ? <ExpandLess /> : <ExpandMore />}
         </ListItem>
         <Collapse in={open} timeout="auto" unmountOnExit>
            {tasks.map((task: any) => (
               <List component="div" disablePadding>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                     <ListItem button className={classes.nested}>
                        <ListItemIcon>
                           <div />
                        </ListItemIcon>
                        <ListItemIcon>
                           <div />
                        </ListItemIcon>
                        <ListItemText primary={task.name} />
                        <LinearProgressWithLabel
                           className={classes.progressBar}
                           value={TASK_PERCENT}
                        />
                     </ListItem>
                  </div>
               </List>
            ))}
         </Collapse>
      </List>
   );
}
