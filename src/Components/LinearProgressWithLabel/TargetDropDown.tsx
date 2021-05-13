/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
import ObjectiveDropDown from './ObjectiveDropDown';
import {
   Objective,
   ObjectiveProgress,
   TaskObjectiveProgress,
   TaskProgress,
} from '../../__generated__/types';

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
   padding-left: 10px;
`;
const ExtraPaddedDiv = styled.div`
   width: 100%;
   justify-content: left;
   padding-left: 30px;
`;

export interface TargetDropDownProps {
   name: string;
   objectives: ObjectiveProgress[];
}

// Handles state to open or close dropdown
function handleClick(
   openObjectBool: boolean,
   openFunction: React.Dispatch<React.SetStateAction<boolean>>
): void {
   openFunction(!openObjectBool);
}

export default function TargetDropDown({ name, objectives }: TargetDropDownProps) {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   const TARGET_PERCENT = 50;

   return (
      <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
         <PaddedDiv>
            <ListItem
               button
               onClick={() => handleClick(open, setOpen)}
               style={{
                  borderTop: '1px',
                  borderBottom: '1px',
                  borderColor: '#C2D2FC',
                  borderStyle: 'solid',
               }}
            >
               {open ? <ExpandLess /> : <ExpandMore />}
               <ListItemText primary={name} />
               <LinearProgressWithLabel className={classes.progressBar} value={TARGET_PERCENT} />
            </ListItem>
         </PaddedDiv>
         <Collapse in={open} timeout="auto" unmountOnExit>
            {objectives.map((objective: ObjectiveProgress) => (
               <ExtraPaddedDiv>
                  <ObjectiveDropDown
                     name={objective.objectiveName}
                     tasks={objective.tasks as TaskObjectiveProgress[]}
                  />
               </ExtraPaddedDiv>
            ))}
         </Collapse>
      </List>
   );
}
