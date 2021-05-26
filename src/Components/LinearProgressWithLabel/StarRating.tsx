import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
         flexDirection: 'column',
         '& > * + *': {
            marginTop: theme.spacing(),
         },
      },
   })
);

function StarRating() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Rating name="half-rating" defaultValue={3.5} precision={0.1} size="small" readOnly />
      </div>
   );
}

export default StarRating;
