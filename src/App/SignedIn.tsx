import { ApolloError } from '@apollo/client/errors';
import Sidebar from '../Components/Sidebar';
import Content from '../Components/Content';
import Navigation from '../Navigation/Navigation';
import { useGetCoursesQuery } from '../__generated__/types';

export function SignedIn() {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const handleError = (_error: ApolloError) => {
      // eslint-disable-next-line
      void refetch();
   };

   const {
      loading,
      error,
      data: courseData,
      refetch,
   } = useGetCoursesQuery({
      onError: handleError,
   });

   if (loading) return <div>Loading Course Data...</div>;
   if (error) {
      return <></>;
   }
   if (!courseData) {
      return <></>;
   }
   const { courses } = courseData;

   return (
      <div className="App">
         <Navigation />
         <div className="main container-fluid">
            <div className="row h-100">
               <div className="sidebar-container col-md-2 p-0 side">
                  <Sidebar courses={courses} />
               </div>
               <div className="content-container col-md-10 p-0">
                  <Content courses={courses} refetchCourses={refetch} />
               </div>
            </div>
         </div>
      </div>
   );
}
