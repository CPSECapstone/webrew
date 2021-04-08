import React from 'react';
import styled from 'styled-components';
// import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
// import apolloClient from './clients/apollo-client';
import { Button } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';

// Copy-pasta'd from backend & omitted missions, TODO replace with import
type Course = {
   id: string;
   name: string;
   instructor: string;
   description: string;
};

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
   const { loading, error, data } = useQuery(GET_COURSES);
   if (loading) return <div>'Loading...'</div>;
   if (error) return <div>`Error! ${error.message}`</div>;

   return (
      <CourseList>
         {data.courses.map((course: any) => (
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
