/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ActivityInfoFragment } from '../../../__generated__/types';

type Props = {
   activity: ActivityInfoFragment[];
};

const months: any = {
   1: 'January',
   2: 'February',
   3: 'April',
   4: 'May',
   5: 'June',
   6: 'July',
   7: 'August',
   8: 'September',
   10: 'October',
   11: 'November',
   12: 'December',
};

const daysOfWeek: any = {
   1: 'Monday',
   2: 'Tuesday',
   3: 'Wednesday',
   4: 'Thursday',
   5: 'Friday',
   6: 'Saturday',
   7: 'Sunday',
};

export function StudentActivityLog({ activity }: Props) {
   return (
      <div className="content-container col-md-3 p-0">
         {activity.map((anActivity: ActivityInfoFragment) => {
            const date = new Date(anActivity.activityDate);
            const dateString = `${date.getDate()} ${months[date.getMonth()]}, ${
               daysOfWeek[date.getDay()]
            }`;

            return (
               <div className="student-activity">
                  <div className="student-activity-date">{dateString}</div>
                  <div className="student-activity-note">{anActivity.note}</div>
                  <div
                     className="student-activity-point-change"
                     style={{ color: anActivity.pointChange > 0 ? 'green' : 'red' }}
                  >
                     {anActivity.pointChange > 0 ? '+' : ''}
                     {anActivity.pointChange}
                  </div>
                  <hr />
               </div>
            );
         })}
      </div>
   );
}
