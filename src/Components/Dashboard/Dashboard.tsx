import { CourseInfoFieldsFragment, Role } from '../../__generated__/types';
import CourseCard from './CourseCard';
import CreateCourseDialog from '../CreateCourseDialog/CreateCourseDialog';
import './DashBoard.css';

type Props = {
   courses: CourseInfoFieldsFragment[];
   refetchCourses: any;
   role: Role;
};

function Dashboard({ courses, refetchCourses, role }: Props) {
   return (
      <div>
         {role === Role.Instructor ? <CreateCourseDialog refetch={refetchCourses} /> : <></>}
         {courses.map((courseInfo: CourseInfoFieldsFragment) => (
            <CourseCard key={courseInfo.courseId} courseInfo={courseInfo} />
         ))}
      </div>
   );
}

export default Dashboard;
