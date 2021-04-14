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
import ObjectiveDropDown from './ObjectiveDropDown';

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

export interface TargetDropDownProps {
   name: string;
   learningObjectives: any;
}

function handleClick(
   openObjectBool: boolean,
   openFunction: React.Dispatch<React.SetStateAction<boolean>>
): void {
   openFunction(!openObjectBool);
}

export default function TargetDropDown({ name, learningObjectives }: TargetDropDownProps) {
   const classes = useStyles();
   const [open, setOpen] = useState(false);
   const history = useHistory();

   const TARGET_PERCENT = 50;

   // const test: any = history.location.state;
   // const inputUser: User = {
   //    id: test?.id,
   //    firstName: test?.firstName,
   //    lastName: test?.lastName,
   // };

   return (
      <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
         <ListItem button onClick={() => handleClick(open, setOpen)}>
            <ListItemIcon />
            <ListItemText primary={name} />
            <LinearProgressWithLabel className={classes.progressBar} value={TARGET_PERCENT} />
            {open ? <ExpandLess /> : <ExpandMore />}
         </ListItem>
         <Collapse in={open} timeout="auto" unmountOnExit>
            {learningObjectives.map((objective: any) => (
               <ObjectiveDropDown name={objective.name} tasks={objective.tasks} />
            ))}
         </Collapse>
      </List>
   );
}
