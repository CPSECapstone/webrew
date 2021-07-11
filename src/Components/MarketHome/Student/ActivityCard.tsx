import { ActivityInfoFragment } from '../../../__generated__/types';

type Props = {
   activity: ActivityInfoFragment;
};

export function ActivityCard({ activity }: Props) {
   const date = new Date(activity.activityDate);
   const dateString = `${date.getDate()} ${date.getMonth()}, ${date.getDay()}`;

   return (
      <div className="student-activity">
         <div>{dateString}</div>
         <div>{activity.note}</div>
         <div>{activity.pointChange}</div>
      </div>
   );
}
