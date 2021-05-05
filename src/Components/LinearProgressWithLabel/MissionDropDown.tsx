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
import { MissionSubMission } from '../../interfaces/MissionSubMission';

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

export interface MissionDropDownProps {
   name: string;
   subMissions: MissionSubMission[];
}

// Handles state to open or close dropdown
function handleClick(
   openObjectBool: boolean,
   openFunction: React.Dispatch<React.SetStateAction<boolean>>
): void {
   openFunction(!openObjectBool);
}

export default function MissionDropDown({ name, subMissions }: MissionDropDownProps) {
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
                  border: '1px',
                  borderColor: '#C2D2FC',
                  borderStyle: 'solid',
                  backgroundColor: '#E9EEFC',
               }}
            >
               <ListItemText primary={name} />
               <LinearProgressWithLabel className={classes.progressBar} value={TARGET_PERCENT} />
               {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
         </PaddedDiv>
         <Collapse in={open} timeout="auto" unmountOnExit>
            {subMissions.map((subMission: MissionSubMission) => (
               <ObjectiveDropDown name={subMission.name} tasks={subMission.tasks} />
            ))}
         </Collapse>
      </List>
   );
}
