import { useTaskListQuery } from '../../__generated__/types';
import TaskListTable from './TaskListTable';

function TaskList() {
   const { data } = useTaskListQuery({
      variables: {
         course: 'Integrated Science',
      },
   });

   const tasks = data?.tasksByCourse || [];

   return (
      <div className="base-table">
         <TaskListTable data={tasks} />
      </div>
   );
}

export default TaskList;
