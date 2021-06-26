/* eslint-disable @typescript-eslint/restrict-template-expressions */
import List from '@material-ui/core/List';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import IconSettings from '@material-ui/icons/Settings';
import { CourseInfoFieldsFragment } from '../../__generated__/types';
import SideBarItem from './SideBarItem';

type Props = {
   courses: CourseInfoFieldsFragment[];
};

function Sidebar({ courses }: Props) {
   const sideBarItems = [
      {
         name: 'Classes',
         Icon: IconDashboard,
         items: courses.map((course) => {
            return {
               name: course.courseName,
               link: `/courseHome/${course.courseId}/${course.courseName}`,
            };
         }),
      },
      {
         name: 'Dashboard',
         link: '/',
         Icon: IconLibraryBooks,
      },
      {
         name: 'User',
         link: '/settings',
         Icon: IconSettings,
      },
   ];

   return (
      <List component="nav" disablePadding>
         {sideBarItems.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SideBarItem {...item} key={index} />
         ))}
      </List>
   );
}
export default Sidebar;
