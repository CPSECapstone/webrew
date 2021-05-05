import styled from 'styled-components';
import { CourseInfoFieldsFragment, useGetCoursesQuery } from '../../__generated__/types';
import CourseCard from './CourseCard';

const CourseList = styled.div`
   display: flex;
`;

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
      <CourseList>
         {courseInfos.map((courseInfo: CourseInfoFieldsFragment) => (
            <CourseCard key={courseInfo.courseId} courseInfo={courseInfo} />
         ))}
      </CourseList>
   );
}

export default Dashboard;
