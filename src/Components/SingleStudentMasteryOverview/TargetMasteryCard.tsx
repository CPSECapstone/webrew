import { Link } from 'react-router-dom';
import { Box, createStyles, LinearProgress, Typography, withStyles } from '@material-ui/core';
import './MasteryCard.scss';
import { User } from '../../interfaces/User';

const MasteredProgress = withStyles(() =>
   createStyles({
      root: {
         height: 20,
         borderRadius: 5,
      },
      colorPrimary: {
         backgroundColor: '#30CC30',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#30CC30',
      },
   })
)(LinearProgress);

const NotStartedProgress = withStyles(() =>
   createStyles({
      root: {
         height: 30,
         borderRadius: 5,
      },
      colorPrimary: {
         backgroundColor: '#E0E0E0',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#E0E0E0',
      },
   })
)(LinearProgress);

const NotMasteredProgress = withStyles(() =>
   createStyles({
      root: {
         height: 20,
         borderRadius: 5,
      },
      colorPrimary: {
         backgroundColor: '#EA6868',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#EA6868',
      },
   })
)(LinearProgress);

const AlmostMasteredProgress = withStyles(() =>
   createStyles({
      root: {
         height: 20,
         borderRadius: 5,
      },
      colorPrimary: {
         backgroundColor: '#F2C94C',
      },
      bar: {
         borderRadius: 5,
         backgroundColor: '#F2C94C',
      },
   })
)(LinearProgress);

type Props = {
   name: string;
   status: number;
   user: User;
};

function getProgressBar(status: number) {
   if (status === 0) {
      return <NotStartedProgress />;
   }
   if (status <= 0.75) {
      return <NotMasteredProgress />;
   }
   if (status >= 0.75) {
      return <AlmostMasteredProgress />;
   }
   return <MasteredProgress />;
}

function getStatusTitle(status: number) {
   if (status === 0) {
      return 'Not Graded';
   }
   if (status <= 0.75) {
      return 'Not Mastered';
   }
   if (status > 0.75) {
      return 'Nearly Mastered';
   }
   return 'Mastered';
}

export default function MasteryCard({ name, status, user }: Props) {
   return (
      <Link to={{ pathname: `/singleTargetOverview/${name}`, state: user }}>
         <div className="mission-card">
            <div className="mission-card-header" />
            <div className="mission-card-body">
               <h3 className="mission-title">
                  <span>{name}</span>
               </h3>

               <Box position="relative">
                  {getProgressBar(status)}
                  <Box
                     top={0}
                     left={0}
                     right={0}
                     bottom={0}
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
                        {getStatusTitle(status)}
                     </Typography>
                  </Box>
               </Box>
            </div>
         </div>
      </Link>
   );
}
