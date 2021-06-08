/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { forwardRef } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface SideBarItemComponentProps {
   className?: string;
   link?: string | null;
   onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const SideBarItemComponent: React.FC<SideBarItemComponentProps> = (props) => {
   const { className, onClick, link, children } = props;

   if (!link || typeof link !== 'string') {
      return <ListItem button className={className} children={children} onClick={onClick} />;
   }

   return (
      <ListItem
         button
         className={className}
         children={children}
         component={forwardRef((props: NavLinkProps, ref: any) => (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            <NavLink exact {...props} innerRef={ref} />
         ))}
         to={link}
      />
   );
};

export default SideBarItemComponent;
