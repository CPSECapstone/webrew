import { useTaskListQuery } from '../../__generated__/types';
import TaskListTable from './TaskListTable';

function TaskList() {
   const { data } = useTaskListQuery({
      variables: {
         course: 'Integrated Science',
      },
   });

   const tasks = data?.tasksByCourse || [];
   const headers = ['Task Name', 'Instructions', 'Submissions'];

   return (
      <div className="base-table">
         <TaskListTable headers={headers} data={tasks} />
      </div>
   );
}

export default TaskList;
