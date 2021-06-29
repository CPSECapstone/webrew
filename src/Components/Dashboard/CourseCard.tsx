/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link } from 'react-router-dom';
import { faBell, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CourseInfoFieldsFragment } from '../../__generated__/types';

import './CourseCard.scss';

type Props = {
   courseInfo: CourseInfoFieldsFragment;
};

export default function CourseCard({ courseInfo }: Props) {
   return (
      <Link to={`/courseHome/${courseInfo.courseId}/${courseInfo.courseName}`}>
         <div className="course-card">
            <div className="course-card-header" />
            <div className="course-card-body">
               <h3 className="course-title">
                  <span>{courseInfo.courseName}</span>
               </h3>
            </div>
            <div>
               <FontAwesomeIcon icon={faBell} size="lg" className="course-icon" />
               <FontAwesomeIcon icon={faFolder} size="lg" className="course-icon" />
            </div>
         </div>
      </Link>
   );
}
