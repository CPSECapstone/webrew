import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { faBell, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   Box,
   createStyles,
   LinearProgress,
   Theme,
   Typography,
   withStyles,
} from '@material-ui/core';
import { TaskStats } from '../../__generated__/types';
import './MasteryCard.scss';
import { User } from '../../interfaces/User';

const MasteredProgress = withStyles((theme: Theme) =>
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

const NotStartedProgress = withStyles((theme: Theme) =>
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

const NotMasteredProgress = withStyles((theme: Theme) =>
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

const AlmostMasteredProgress = withStyles((theme: Theme) =>
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
   progress: TaskStats[];
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
   if (status >= 0.75) {
      return 'Almost Mastered';
   }
   return 'Mastered';
}

export default function MasteryCard({ name, progress, status, user }: Props) {
   console.log(status);
   const history = useHistory();
   return (
      <Link to={{ pathname: `/singleMissionOverview/${name}`, state: user }}>
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
