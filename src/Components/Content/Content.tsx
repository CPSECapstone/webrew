import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Content.css';
import MarketHomeInstructor from '../MarketHome/MarketHome';
import { CourseInfoFieldsFragment, Role, useUserQuery } from '../../__generated__/types';
import { Settings } from '../Settings/Settings';
import { MarketHomeStudent } from '../MarketHome/Student/MarketHomeStudent';
import { StudentInfoPage } from '../MarketHome/StudentInfoPage';
import { JoinCourseLink } from '../MarketHome/Student/JoinCourseLink';

type Props = {
   courses: CourseInfoFieldsFragment[];
   refetchCourses: any;
};

export default function Content({ courses, refetchCourses }: Props) {
   const { loading, error, data } = useUserQuery();

   if (loading || error || !data) {
      return <>Loading Content...</>;
   }

   const { getUser } = data;

   return (
      <div className="content">
         <Switch>
            <Route path="/courseHome/:classId/:className">
               {getUser.role === Role.Instructor ? (
                  <MarketHomeInstructor user={getUser} />
               ) : (
                  <MarketHomeStudent />
               )}
            </Route>
            <Route path="/student/:classId/:studentId">
               {getUser.role === Role.Instructor ? <StudentInfoPage /> : <>Forbidden</>}
            </Route>
            <Route path="/join/:classId/:instructorId">
               <JoinCourseLink refetchCourses={refetchCourses} />
            </Route>
            <Route path="/settings">
               <Settings user={getUser} />
            </Route>
            <Route path="/">
               <Dashboard courses={courses} refetchCourses={refetchCourses} role={getUser.role} />
            </Route>
         </Switch>
      </div>
   );
}
