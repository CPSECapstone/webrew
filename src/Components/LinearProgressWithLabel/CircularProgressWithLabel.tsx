/* eslint-disable react/destructuring-assignment */
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

interface NewCircularProgressProps extends CircularProgressProps {
   name: string;
}

const BigCircularProgress = withStyles((theme: Theme) =>
   createStyles({
      root: {
         borderRadius: 10,
      },
      circle: {
         color: '#2F80ED',
      },
   })
)(CircularProgress);

function CircularProgressWithLabel(
   props: NewCircularProgressProps & { value: number; name: string }
) {
   return (
      <div className="widget-name">
         <Box position="relative" display="inline-flex">
            <BigCircularProgress variant="determinate" {...props} size={200} thickness={2} />
            <Box
               top={100}
               left={20}
               right={20}
               bottom={100}
               position="absolute"
               display="flex"
               alignItems="center"
               justifyContent="center"
            >
               <Typography
                  display="block"
                  variant="caption"
                  component="div"
                  color="textPrimary"
                  align="center"
               >
                  {props.name}
               </Typography>
            </Box>
         </Box>
      </div>
   );
}

export default CircularProgressWithLabel;
