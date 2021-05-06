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
      <Link to={`/courseHome/${courseInfo.course}`}>
         <div className="course-card">
            <div className="course-card-header" />
            <div className="course-card-body">
               <h3 className="course-title">
                  <span>{courseInfo.course}</span>
               </h3>
               <p className="course-instrucor">{courseInfo.instructor}</p>
               <p className="course-desc">
                  <span>{courseInfo.description}</span>
               </p>
            </div>
            <div>
               <FontAwesomeIcon icon={faBell} size="lg" className="course-icon" />
               <FontAwesomeIcon icon={faFolder} size="lg" className="course-icon" />
            </div>
         </div>
      </Link>
   );
}
