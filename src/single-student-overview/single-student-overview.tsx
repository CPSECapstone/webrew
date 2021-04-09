import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { Box, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import StudentPicture from '../fake-student-image/images-1.png';
import { User } from '../interfaces/User';

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

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
   return (
      <Box display="flex" alignItems="center">
         <Box width="100%" mr={1}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <LinearProgress variant="determinate" {...props} />
         </Box>
         <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${Math.round(
               // eslint-disable-next-line react/destructuring-assignment
               props.value
            )}%`}</Typography>
         </Box>
      </Box>
   );
}

export default function SingleStudentOverview() {
   const classes = useStyles();
   const [missionOpen, setOpen] = React.useState(false);
   const [subMissionOpen, setOpen2] = React.useState(false);
   const [compMissionOpen, setOpen3] = React.useState(false);
   const [compSubMissionOpen, setOpen4] = React.useState(false);
   const history = useHistory();

   const handleClick = () => {
      setOpen(!missionOpen);
   };

   const handleClick2 = () => {
      setOpen2(!subMissionOpen);
   };

   const handleClick3 = () => {
      setOpen3(!compMissionOpen);
   };

   const handleClick4 = () => {
      setOpen4(!compSubMissionOpen);
   };

   const taskPercent = 100;
   const subMissionPercent = 50;
   const missionPercent = 50;

   const compTaskPercent = 100;
   const compSubMissionPercent = 100;
   const compMissionPercent = 100;

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
                  <ListItem button onClick={handleClick}>
                     <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
                     <ListItemText primary="Mission 1" />
                     <LinearProgressWithLabel
                        className={classes.progressBar}
                        value={missionPercent}
                     />
                     {missionOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={missionOpen} timeout="auto" unmountOnExit>
                     <List component="div" disablePadding>
                        <ListItem button onClick={handleClick2}>
                           {/* <ListItemIcon></ListItemIcon> */}
                           <ListItemIcon>
                              <div />
                           </ListItemIcon>
                           <ListItemIcon>
                              <div />
                           </ListItemIcon>
                           <ListItemText primary="Sub-Mission 1" />
                           <LinearProgressWithLabel
                              className={classes.progressBar}
                              value={subMissionPercent}
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
                                       value={taskPercent}
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
                  <ListItem button onClick={handleClick3}>
                     <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
                     <ListItemText primary="Mission 0" />
                     <LinearProgressWithLabel
                        className={classes.progressBar}
                        value={compMissionPercent}
                     />
                     {compMissionOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={compMissionOpen} timeout="auto" unmountOnExit>
                     <List component="div" disablePadding>
                        <ListItem button onClick={handleClick4}>
                           <ListItemIcon />
                           <ListItemIcon />
                           <ListItemText primary="Sub-Mission 1" />
                           <LinearProgressWithLabel
                              className={classes.progressBar}
                              value={compSubMissionPercent}
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
                                    value={compTaskPercent}
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
                                    value={compTaskPercent}
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
                        value={compTaskPercent}
                     />
                  </ListItem>
               </List>
            </ColumnDiv>
         </RowDiv>
      </div>
   );
}
