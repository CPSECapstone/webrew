import PropTypes from 'prop-types';
import { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import SideBarItemComponent from './SideBarItemComponent';

const useStyles = makeStyles(() =>
   createStyles({
      sideBarItem: {
         '&.active': {
            color: '#2F80ED', // text
            '& .MuiListItemIcon-root': {
               color: '#2F80ED', // icon active
            },
         },
      },
      sideBarItemIcon: {
         color: '#AAB1BA',
      },
   })
);

export const SideBarItemPropTypes = {
   name: PropTypes.string.isRequired,
   link: PropTypes.string,
   Icon: PropTypes.elementType,
   items: PropTypes.array,
};

type SideBarItemPropTypes = PropTypes.InferProps<typeof SideBarItemPropTypes>;
type SideBarItemPropsWithoutItems = Omit<SideBarItemPropTypes, 'items'>;

export type SideBarItemProps = SideBarItemPropsWithoutItems & {
   items?: SideBarItemProps[];
};

function SideBarItem({ name, link, Icon, items = [] }: SideBarItemProps) {
   const classes = useStyles();
   const isExpandable = items && items.length > 0;
   const [open, setOpen] = useState(false);
   function handleClick() {
      setOpen(!open);
   }
   const SideBarItemRoot = (
      <SideBarItemComponent className={classes.sideBarItem} link={link} onClick={handleClick}>
         {!!Icon && (
            <ListItemIcon className={classes.sideBarItemIcon}>
               <Icon />
            </ListItemIcon>
         )}
         <ListItemText primary={name} inset={!Icon} />
         {isExpandable && !open && <IconExpandMore />}
         {isExpandable && open && <IconExpandLess />}
      </SideBarItemComponent>
   );

   const SideBarItemChildren = isExpandable ? (
      <Collapse in={open} timeout="auto" unmountOnExit>
         <Divider />
         <List component="div" disablePadding>
            {items.map((item, index) => (
               <SideBarItem {...item} key={index} />
            ))}
         </List>
      </Collapse>
   ) : null;

   return (
      <>
         {SideBarItemRoot}
         {SideBarItemChildren}
      </>
   );
}

export default SideBarItem;
