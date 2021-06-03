import { Link } from 'react-router-dom';
import { TaskListTaskFieldsFragment } from '../../__generated__/types';

import './TaskListTable.css';

type RowProps = {
   data: Array<TaskListTaskFieldsFragment>;
};

type TaskTableProps = RowProps;

const TaskListTableHead = (): JSX.Element => {
   return (
      <thead>
         <tr>
            <th>Task Name</th>
            <th>Instructions</th>
            <th>Submissions</th>
         </tr>
      </thead>
   );
};

const TaskListTableBody = ({ data }: RowProps): JSX.Element => {
   const rows = data.map((task) => {
      return (
         <tr key={task.id} className="hoverRow">
            <td className="cell-taskname">{task.name}</td>
            <td className="cell-instructions">{task.instructions}</td>
            <td className="cell-view">
               <Link
                  to={{
                     pathname: `/taskSubmissionSummary/${task.id}`,
                  }}
               >
                  view
               </Link>
            </td>
         </tr>
      );
   });

   return <tbody>{rows}</tbody>;
};

const TaskListTable = ({ data }: TaskTableProps): JSX.Element => {
   return (
      <table>
         <TaskListTableHead />
         <TaskListTableBody data={data} />
      </table>
   );
};

export default TaskListTable;
