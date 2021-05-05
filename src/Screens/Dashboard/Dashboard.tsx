import styled from 'styled-components';
import { CourseFieldsFragment, useGetCoursesQuery } from '../../__generated__/types';

const CourseList = styled.div`
   display: flex;
`;

const CourseCard = styled.div`
   border: 1px solid gray;
   margin: 12px;
   border-radius: 8px;
   padding: 12px;
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
         {courseInfos.map((course: CourseFieldsFragment) => (
            <CourseCard key={course.courseId}>
               <div>Course name: {course.course}</div>
               <div>Instructor: {course.instructor}</div>
               <div>Description: {course.description}</div>
            </CourseCard>
         ))}
      </CourseList>
   );
}

export default Dashboard;
