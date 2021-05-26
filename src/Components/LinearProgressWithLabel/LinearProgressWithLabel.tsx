/* eslint-disable react/destructuring-assignment */
import { Box, LinearProgress, LinearProgressProps, Typography } from '@material-ui/core';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme: Theme) =>
   createStyles({
      root: {
         height: 20,
         borderRadius: 5,
      },
      colorPrimary: {
         backgroundColor: '#E0E0E0',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#2F80ED',
      },
   })
)(LinearProgress);

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
   const { value } = props;
   return (
      <Box display="flex" alignItems="center" width="80%">
         <Box width="100%" mr={1} ml={1}>
            <BorderLinearProgress variant="determinate" {...props} />
         </Box>
         <Box minWidth={20}>
            <Typography variant="body2" color="textPrimary">{`${Math.round(value)}%`}</Typography>
         </Box>
      </Box>
   );
}

export default LinearProgressWithLabel;
