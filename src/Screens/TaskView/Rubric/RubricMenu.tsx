import {
   createStyles,
   Divider,
   Drawer,
   IconButton,
   makeStyles,
   Theme,
   useTheme,
   Typography,
} from '@material-ui/core';
import { Form, Button, NavDropdown } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, Menu } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import { RubricRequirement } from '../../../__generated__/types';
import Rubric from './Rubric';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
      },
      appBar: {
         transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
         }),
      },
      appBarShift: {
         transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
         }),
      },
      title: {
         flexGrow: 1,
      },
      hide: {
         display: 'none',
      },
      drawer: {
         flexShrink: 0,
      },
      drawerPaper: {},
      drawerHeader: {
         display: 'flex',
         alignItems: 'center',
         padding: theme.spacing(0, 1),
         // necessary for content to be below app bar
         ...theme.mixins.toolbar,
         justifyContent: 'flex-start',
      },
      content: {
         flexGrow: 1,
         padding: theme.spacing(3),
         transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
         }),
      },
      contentShift: {
         transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
         }),
         marginRight: 0,
      },
   })
);

function RubricMenu({ requirements }: { requirements: RubricRequirement[] }) {
   const classes = useStyles();
   const theme = useTheme();
   const [open, setOpen] = React.useState(false);

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };
   return (
      <div>
         <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
         >
            <Menu />
            <Typography>Task Rubric</Typography>
         </IconButton>
         <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
               paper: classes.drawerPaper,
            }}
         >
            <div className={classes.drawerHeader}>
               <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
               </IconButton>
               <Typography>Task Rubric</Typography>
            </div>
            <Divider />
            <Form>
               {requirements.map((requirement: RubricRequirement) => (
                  <Rubric requirement={requirement} />
               ))}
               <NavDropdown.Divider />
               <Button className="mx-auto" type="submit">
                  Submit Task
               </Button>
            </Form>
         </Drawer>
      </div>
   );
}

export default RubricMenu;
