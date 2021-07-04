import { Button, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';

type Props = {
   onClickUnfulfill: any;
   fulfilled: boolean;
   onClickRefund: any;
};

export default function SimpleMenu({ onClickUnfulfill, fulfilled, onClickRefund }: Props) {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleUnfulfill = () => {
      onClickUnfulfill();
      handleClose();
   };

   const handleRefund = () => {
      onClickRefund();
      handleClose();
   };

   return (
      <div>
         <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{
               float: 'right',
               color: 'grey',
               clear: 'both',
            }}
            color="primary"
         >
            <MoreVertIcon />
         </Button>
         <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            {fulfilled ? <MenuItem onClick={handleUnfulfill}>Unfulfill</MenuItem> : <></>}
            <MenuItem onClick={handleRefund}>Refund</MenuItem>
         </Menu>
      </div>
   );
}
