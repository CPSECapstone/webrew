import List from '@material-ui/core/List';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';
import SideBarItem from './SideBarItem';

const sideBarItems = [
   {
      name: 'Classes',
      Icon: IconDashboard,
      items: [
         // hardcoded for now
         {
            name: 'English',
            items: [{ name: 'Student Progress', link: '/studentOverview/English' }],
         },
         {
            name: 'Math',
            link: '/courseHome/Math',
         },
         {
            name: 'Biology',
            link: '/courseHome/Biology',
         },
         {
            name: 'Integrated Science',
            link: '/courseHome/Integrated Science',
         },
      ],
   },
   {
      name: 'Dashboard',
      link: '/',
      Icon: IconLibraryBooks,
   },
   {
      name: 'Task',
      link: '/viewTask',
      Icon: IconPeople,
   },
   {
      name: 'Marketplace',
      link: '/marketplace',
      Icon: IconShoppingCart,
   },
   {
      name: 'Students and Groups',
      link: '/studentOverview/Biology',
      Icon: IconPeople,
   },
   {
      name: 'Goals',
      link: '/singleStudentOverview',
      Icon: IconBarChart,
   },
   {
      name: 'Missions',
      link: '/missions',
      Icon: ForumIcon,
   },
   {
      name: 'Settings',
      link: '/settings',
      Icon: SettingsIcon,
   },
];
function Sidebar() {
   return (
      <List component="nav" disablePadding>
         {sideBarItems.map((item, index) => (
            <SideBarItem {...item} key={index} />
         ))}
      </List>
   );
}
export default Sidebar;
