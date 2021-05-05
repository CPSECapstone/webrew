import { Link } from 'react-router-dom';
import { CourseInfoFieldsFragment } from '../../__generated__/types';
import './CourseCard.css';

type Props = {
   courseInfo: CourseInfoFieldsFragment;
};

export default function CourseCard({ courseInfo }: Props) {
   return (
      <Link to={`/studentOverview/${courseInfo.course}`}>
         <div className="course-card">
            <h3 className="title">
               <span>{courseInfo.course}</span>
            </h3>
            <p className="course-instructor">{courseInfo.instructor}</p>
            <p className="course-desc">{courseInfo.description}</p>
         </div>
      </Link>
   );
}
