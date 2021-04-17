import { Box, LinearProgress, LinearProgressProps, Typography } from '@material-ui/core';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
   const { value } = props;
   return (
      <Box display="flex" alignItems="center">
         <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" {...props} />
         </Box>
         <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
         </Box>
      </Box>
   );
}

export default LinearProgressWithLabel;
