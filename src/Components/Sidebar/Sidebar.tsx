import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faChalkboardTeacher,
   faUserFriends,
   faComments,
   faMedal,
   faTasks,
   faChartLine,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import './Sidebar.css';

type Props = { text: string; icon: IconDefinition; link: string };

function IconMenu({ text, icon, link }: Props) {
   return (
      <Link to={link} className="menu-container">
         <div className="menu-icon">
            <FontAwesomeIcon icon={icon} size="2x" />
         </div>
         <p className="menu-text">{text}</p>
      </Link>
   );
}

const menus: Props[] = [
   {
      text: 'DashBoard',
      icon: faChalkboardTeacher,
      link: './dashboard',
   },
   {
      text: 'Student',
      icon: faUserFriends,
      link: './studentOverview',
   },
   {
      text: 'Task',
      icon: faTasks,
      link: './taskSubmissionOverview',
   },
   {
      text: 'Mastery',
      icon: faChartLine,
      link: './singleStudentMasteryOverview',
   },
   {
      text: 'Goals',
      icon: faMedal,
      link: './singleStudentOverview',
   },
   {
      text: 'Message',
      icon: faComments,
      link: '',
   },
];

export default function Sidebar() {
   return (
      <div className="sidebar">
         {menus.map((menu) => (
            <IconMenu text={menu.text} icon={menu.icon} link={menu.link} />
         ))}
      </div>
   );
}
