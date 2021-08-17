import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Content.css';
import MarketHomeInstructor from '../MarketHome/MarketHome';
import { CourseInfoFieldsFragment, Role, User } from '../../__generated__/types';
import { Settings } from '../Settings/Settings';
import { MarketHomeStudent } from '../MarketHome/Student/MarketHomeStudent';
import { StudentInfoPage } from '../MarketHome/StudentInfoPage';
import { JoinCourseLink } from '../MarketHome/Student/JoinCourseLink';

type Props = {
   courses: CourseInfoFieldsFragment[];
   refetchCourses: any;
   user: User;
};

export default function Content({ courses, refetchCourses, user }: Props) {
   return (
      <div className="content">
         <Switch>
            <Route path="/courseHome/:classId/:className">
               {user.role === Role.Instructor ? (
                  <MarketHomeInstructor user={user} />
               ) : (
                  <MarketHomeStudent />
               )}
            </Route>
            <Route path="/courseHomeAdmin/:classId/:className">
               <MarketHomeInstructor user={user} />
            </Route>
            ;
            <Route path="/student/:classId/:studentId">
               {user.role === Role.Instructor ? <StudentInfoPage /> : <>Access Forbidden</>}
            </Route>
            <Route path="/join/:classId/:instructorId">
               <JoinCourseLink refetchCourses={refetchCourses} />
            </Route>
            <Route path="/settings">
               <Settings user={user} />
            </Route>
            <Route path="/">
               <Dashboard courses={courses} refetchCourses={refetchCourses} role={user.role} />
            </Route>
         </Switch>
      </div>
   );
}
