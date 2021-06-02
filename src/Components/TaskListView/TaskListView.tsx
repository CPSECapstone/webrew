import { useTaskListQuery } from '../../__generated__/types';
import TaskListTable from './TaskListTable';

function TaskList() {
   const { data } = useTaskListQuery({
      variables: {
         course: 'Integrated Science',
      },
   });

   let tasks = data?.tasksByCourse || [];

   // sort by task name
   tasks = [...tasks].sort((a, b) => {
      if (a.name === b.name) {
         return 0;
      }

      return a.name < b.name ? -1 : 1;
   });

   return (
      <div className="base-table">
         <TaskListTable data={tasks} />
      </div>
   );
}

export default TaskList;
