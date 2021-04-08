import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { Box, Typography } from '@material-ui/core';
import StudentPicture from '../fake-student-image/images-1.png';
// import StarBorder from '@material-ui/icons/StarBorder';

const StudentNameDiv = styled.div`
   height: 50px;
   width: 100%;
   // background-color: ;
   margin-top: 10px;
   font-size: 24pt;
`;

const FieldTitleDiv = styled.div`
   height: 30px;
   width: 400px;
   background-color: grey;
   margin-top: 10px;
`;

const RowDiv = styled.div`
   width: 100%;
   margin-top: 10px;
   display: flex;
`;

const ColumnDiv = styled.div`
   width: 100%;
   flex-direction: column;
   margin-top: 10px;
`;

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         width: '100%',
         maxWidth: 360,
         backgroundColor: theme.palette.background.paper,
      },
      nested: {
         paddingLeft: theme.spacing(4),
      },
   })
);

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
   return (
      <Box display='flex' alignItems='center'>
         <Box width='100%' mr={1}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <LinearProgress variant='determinate' {...props} />
         </Box>
         <Box minWidth={35}>
            <Typography variant='body2' color='textSecondary'>{`${Math.round(
               // eslint-disable-next-line react/destructuring-assignment
               props.value
            )}%`}</Typography>
         </Box>
      </Box>
   );
}

export default function SingleStudentOverview() {
   const classes = useStyles();
   const [missionOpen, setOpen] = React.useState(true);
   const [subMissionOpen, setOpen2] = React.useState(true);
   const [compMissionOpen, setOpen3] = React.useState(true);
   const [compSubMissionOpen, setOpen4] = React.useState(true);

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

   return (
      <div>
         <StudentNameDiv>Joe Smith</StudentNameDiv>
         <img src={StudentPicture} alt='' style={{ width: 200, height: 200 }} />
         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Current Missions</FieldTitleDiv>
               <List
                  component='nav'
                  aria-labelledby='nested-list-subheader'
                  className={classes.root}
               >
                  <ListItem button onClick={handleClick}>
                     <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
                     <ListItemText primary='Mission 1' />
                     <LinearProgressWithLabel value={missionPercent} />
                     {missionOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={missionOpen} timeout='auto' unmountOnExit>
                     <List component='div' disablePadding>
                        <ListItem button onClick={handleClick2}>
                           <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
                           <ListItemText primary='Sub-Mission 1' />
                           <LinearProgressWithLabel value={subMissionPercent} />
                           {subMissionOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={subMissionOpen} timeout='auto' unmountOnExit>
                           <List component='div' disablePadding>
                              <ListItem button className={classes.nested}>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemText primary='Task 1' />
                                 <LinearProgressWithLabel value={taskPercent} />
                              </ListItem>
                           </List>
                           <List component='div' disablePadding>
                              <ListItem button className={classes.nested}>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemText primary='Task 2' />
                                 <LinearProgressWithLabel value={0} />
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
                     <ListItemText primary='Goal 1' />
                     <LinearProgressWithLabel value={75} />
                  </ListItem>
               </List>
            </ColumnDiv>
         </RowDiv>
         <RowDiv>
            <ColumnDiv>
               <FieldTitleDiv>Completed Missions</FieldTitleDiv>
               <List
                  component='nav'
                  aria-labelledby='nested-list-subheader'
                  className={classes.root}
               >
                  <ListItem button onClick={handleClick3}>
                     <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
                     <ListItemText primary='Mission 0' />
                     <LinearProgressWithLabel value={compMissionPercent} />
                     {compMissionOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={compMissionOpen} timeout='auto' unmountOnExit>
                     <List component='div' disablePadding>
                        <ListItem button onClick={handleClick4}>
                           <ListItemIcon>{/* <SendIcon /> */}</ListItemIcon>
                           <ListItemText primary='Sub-Mission 1' />
                           <LinearProgressWithLabel value={compSubMissionPercent} />
                           {compSubMissionOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={compSubMissionOpen} timeout='auto' unmountOnExit>
                           <List component='div' disablePadding>
                              <ListItem button className={classes.nested}>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemText primary='Task 1' />
                                 <LinearProgressWithLabel value={compTaskPercent} />
                              </ListItem>
                           </List>
                           <List component='div' disablePadding>
                              <ListItem button className={classes.nested}>
                                 <ListItemIcon>
                                    <div />
                                 </ListItemIcon>
                                 <ListItemText primary='Task 2' />
                                 <LinearProgressWithLabel value={compTaskPercent} />
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
                     <ListItemText primary='Goal 0' />
                     <LinearProgressWithLabel value={compTaskPercent} />
                  </ListItem>
               </List>
            </ColumnDiv>
         </RowDiv>
      </div>
   );
}
