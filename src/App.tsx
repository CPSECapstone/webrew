import { Switch, Route } from 'react-router-dom';
import './App.css';
import CreateCourseDialog from './course/create-course-dialog';
import Dashboard from './scenes/teacher/Dashboard';
import StudentOverview from './student-overview/student-overview';
import TaskOverview from './task-overview/task-overview';
import TaskSubmission from './view-task-submission/view-task-submission';
import Navigation from './navigation/Navigation';
import SingleStudentOverview from './single-student-overview/single-student-overview';

function App() {
   return (
      <div className="App">
         <Navigation />
         <Switch>
            <Route path="/addNewCourse" component={CreateCourseDialog} />
            <Route path="/addTaskSubmission" component={TaskSubmission} />
            <Route path="/taskOverview" component={TaskOverview} />
            <Route path="/studentOverview" component={StudentOverview} />
            <Route path="/singleStudentOverview" component={SingleStudentOverview} />
            <Route path="/" component={Dashboard} />
         </Switch>
      </div>
   );
}

export default App;
