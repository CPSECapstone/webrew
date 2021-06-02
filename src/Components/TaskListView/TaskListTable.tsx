import { Link } from 'react-router-dom';
import { TaskListTaskFieldsFragment } from '../../__generated__/types';

import './TaskListTable.css';

type HeadProps = {
   headers: Array<string>;
};

type RowProps = {
   data: Array<TaskListTaskFieldsFragment>;
};

type TaskTableProps = HeadProps & RowProps;

const TaskListTableHead = ({ headers }: HeadProps): JSX.Element => {
   return (
      <thead>
         <tr>
            {headers.map((header) => (
               <th>{header}</th>
            ))}
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
                     pathname: `/viewTask/${task.id}`,
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

const TaskListTable = ({ headers: columns, data }: TaskTableProps): JSX.Element => {
   return (
      <table>
         <TaskListTableHead headers={columns} />
         <TaskListTableBody data={data} />
      </table>
   );
};

export default TaskListTable;
