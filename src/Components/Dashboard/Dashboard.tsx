import { CourseInfoFieldsFragment, useGetCoursesQuery } from '../../__generated__/types';
import CourseCard from './CourseCard';
import './DashBoard.css';

function Dashboard() {
   const { loading, error, data } = useGetCoursesQuery({
      variables: {
         instructor: 'Mr. Butcher',
      },
   });

   if (loading) return <div>Loading...</div>;
   if (error) return <div>`Error! ${error.message}`</div>;
   if (!data) {
      return <></>;
   }
   const { courseInfos } = data;

   return (
      <div className="dashboard-container">
         {courseInfos.map((courseInfo: CourseInfoFieldsFragment) => (
            <CourseCard key={courseInfo.courseId} courseInfo={courseInfo} />
         ))}
      </div>
   );
}

export default Dashboard;