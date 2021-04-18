import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { Course } from '../../interfaces/Course';
import { Courses } from '../../interfaces/Courses';

const GET_COURSES = gql`
   query GetCourses {
      courses {
         id
         name
         instructor
         description
      }
   }
`;

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
   const { loading, error, data: courses } = useQuery<Courses>(GET_COURSES);
   if (loading) return <div>Loading...</div>;
   if (error) return <div>`Error! ${error.message}`</div>;

   if (courses === undefined) {
      return <div>Courses Undefined</div>;
   }

   return (
      <CourseList>
         {courses.courses.map((course: Course) => (
            <CourseCard key={course.id}>
               <div>Course name: {course.name}</div>
               <div>Instructor: {course.instructor}</div>
               <div>Description: {course.description}</div>
            </CourseCard>
         ))}
      </CourseList>
   );
}

export default Dashboard;
