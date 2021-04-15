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
import { withAuthenticator } from '@aws-amplify/ui-react';
import StudentPicture from '../assets/images/images-1.png';
import { User } from '../interfaces/User';
import LinearProgressWithLabel from '../components/linear-progress-bar';

const StudentNameDiv = styled.div`
   height: 50px;
   width: 100%;
   // background-color: ;
   font-size: 24pt;
`;

const FieldTitleDiv = styled.div`
   height: 30px;
   width: 400px;
   background-color: #99d6ff;
   align-items: center;
   display: flex;
}
`;

const RowDiv = styled.div`
   width: 50%;
   display: flex;
`;

const ColumnDiv = styled.div`
   width: 100%;
   flex-direction: column;
`;

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

function handleClick(
   openObjectBool: boolean,
   openFunction: React.Dispatch<React.SetStateAction<boolean>>
): void {
   openFunction(!openObjectBool);
}

function SingleStudentOverview() {
   const classes = useStyles();
   const [missionOpen, setOpen] = useState(false);
   const [subMissionOpen, setOpen2] = useState(false);
   const [compMissionOpen, setOpen3] = useState(false);
   const [compSubMissionOpen, setOpen4] = useState(false);
   const history = useHistory();

   const TASK_PERCENT = 100;
   const MISSION_PERCENT = 50;
   const SUB_MISSION_PERCENT = 50;

   const COMP_TASK_PERCENT = 100;
   const COMP_SUB_MISSION_PERCENT = 100;
   const COMP_MISSION_PERCENT = 100;

   const test: any = history.location.state;
   const inputUser: User = {
      id: test?.id,
      firstName: test?.firstName,
      lastName: test?.lastName,
   };

   return (
      <div style={{ marginLeft: '5px' }}>
         <StudentNameDiv>
            {inputUser.firstName} {inputUser.lastName}
         </StudentNameDiv>
         <img src={StudentPicture} alt="" style={{ width: 200, height: 200 }} />
         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Missions</FieldTitleDiv>
               <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className={classes.root}
               >
                  <ListItem button onClick={() => handleClick(missionOpen, setOpen)}>
                     <ListItemIcon />
                     <ListItemText primary="Mission 1" />
                     <LinearProgressWithLabel
                        className={classes.progressBar}
                        value={MISSION_PERCENT}
                     />
                     {missionOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={missionOpen} timeout="auto" unmountOnExit>
                     <List component="div" disablePadding>
                        <ListItem button onClick={() => handleClick(subMissionOpen, setOpen2)}>
                           <ListItemIcon>
                              <div />
                           </ListItemIcon>
                           <ListItemIcon>
                              <div />
                           </ListItemIcon>
                           <ListItemText primary="Sub-Mission 1" />
                           <LinearProgressWithLabel
                              className={classes.progressBar}
                              value={SUB_MISSION_PERCENT}
                           />
                           {subMissionOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={subMissionOpen} timeout="auto" unmountOnExit>
                           <List component="div" disablePadding>
                              <div style={{ display: 'flex', flexDirection: 'row' }}>
                                 <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                       <div />
                                    </ListItemIcon>
                                    <ListItemIcon>
                                       <div />
                                    </ListItemIcon>
                                    <ListItemText primary="Task 1" />
                                    <LinearProgressWithLabel
                                       className={classes.progressBar}
                                       value={TASK_PERCENT}
                                    />
                                 </ListItem>
                              </div>
                           </List>
                           <List component="div" disablePadding>
                              <ListItem button className={classes.nested}>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemText primary="Task 2" />
                                 <LinearProgressWithLabel
                                    className={classes.progressBar}
                                    value={0}
                                 />
                              </ListItem>
                           </List>
                        </Collapse>
                     </List>
                  </Collapse>
               </List>
            </ColumnDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Goals</FieldTitleDiv>
               <List>
                  <ListItem button className={classes.nested}>
                     <ListItemIcon>
                        <div />
                     </ListItemIcon>

                     <ListItemText primary="Goal 1" />
                     <LinearProgressWithLabel className={classes.progressBar} value={75} />
                  </ListItem>
               </List>
            </ColumnDiv>
         </RowDiv>
         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Completed Missions</FieldTitleDiv>
               <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className={classes.root}
               >
                  <ListItem button onClick={() => handleClick(compMissionOpen, setOpen3)}>
                     <ListItemIcon />
                     <ListItemText primary="Mission 0" />
                     <LinearProgressWithLabel
                        className={classes.progressBar}
                        value={COMP_MISSION_PERCENT}
                     />
                     {compMissionOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={compMissionOpen} timeout="auto" unmountOnExit>
                     <List component="div" disablePadding>
                        <ListItem button onClick={() => handleClick(compSubMissionOpen, setOpen4)}>
                           <ListItemIcon />
                           <ListItemIcon />
                           <ListItemText primary="Sub-Mission 1" />
                           <LinearProgressWithLabel
                              className={classes.progressBar}
                              value={COMP_SUB_MISSION_PERCENT}
                           />
                           {compSubMissionOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={compSubMissionOpen} timeout="auto" unmountOnExit>
                           <List component="div" disablePadding>
                              <ListItem button className={classes.nested}>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemText primary="Task 1" />
                                 <LinearProgressWithLabel
                                    className={classes.progressBar}
                                    value={COMP_TASK_PERCENT}
                                 />
                              </ListItem>
                           </List>
                           <List component="div" disablePadding>
                              <ListItem button className={classes.nested}>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemText primary="Task 2" />
                                 <LinearProgressWithLabel
                                    className={classes.progressBar}
                                    value={COMP_TASK_PERCENT}
                                 />
                              </ListItem>
                           </List>
                        </Collapse>
                     </List>
                  </Collapse>
               </List>
            </ColumnDiv>
            <ColumnDiv>
               <FieldTitleDiv>Completed Goals</FieldTitleDiv>
               <List>
                  <ListItem button className={classes.nested}>
                     <ListItemIcon>
                        <div />
                     </ListItemIcon>
                     <ListItemText primary="Goal 0" />
                     <LinearProgressWithLabel
                        className={classes.progressBar}
                        value={COMP_TASK_PERCENT}
                     />
                  </ListItem>
               </List>
            </ColumnDiv>
         </RowDiv>
      </div>
   );
}

export default withAuthenticator(SingleStudentOverview);
