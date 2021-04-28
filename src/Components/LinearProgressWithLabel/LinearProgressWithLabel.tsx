/* eslint-disable react/destructuring-assignment */
import { Box, LinearProgress, LinearProgressProps, Typography } from '@material-ui/core';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme: Theme) =>
   createStyles({
      root: {
         height: 10,
         borderRadius: 5,
      },
      colorPrimary: {},
      bar: {
         borderRadius: 5,
         backgroundColor: '#082580',
      },
   })
)(LinearProgress);

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
   const { value } = props;
   return (
      <Box display="flex" alignItems="center">
         <Box width="100%" mr={1} ml={1}>
            <BorderLinearProgress variant="determinate" {...props} />
         </Box>
         <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
         </Box>
      </Box>
   );
}

export default LinearProgressWithLabel;
