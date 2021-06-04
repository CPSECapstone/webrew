import { useHistory } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { SummaryStudentResultFieldsFragment } from '../../__generated__/types';

type RowProps = {
   taskId: string;
   results: Array<SummaryStudentResultFieldsFragment>;
};

type TaskTableProps = RowProps;

const TaskSubmissionSummaryTableHead = (): JSX.Element => {
   return (
      <thead>
         <tr>
            <td>Student</td>
            <td>Submitted</td>
            <td>Graded</td>
            <td>Points Awarded</td>
         </tr>
      </thead>
   );
};

const TaskSubmissionSummaryTableBody = ({ taskId, results }: RowProps): JSX.Element => {
   const history = useHistory();

   const rows = results.map((result) => {
      const Icon = result.submitted ? CheckCircleIcon : CancelIcon;
      const color = result.submitted ? 'primary' : 'disabled';

      return (
         <tr
            key={result.studentId}
            className="hoverRow"
            onClick={() => {
               if (!result.submitted) {
                  return;
               }
               history.push(`/viewTask/${taskId}/${result.studentId}`);
            }}
         >
            <td>{result.studentName}</td>
            <td>
               <Icon color={color} />
            </td>
            <td>{result.graded ? 'Graded' : 'Not Graded'}</td>
            <td>{result.pointsAwarded}</td>
         </tr>
      );
   });

   return <tbody>{rows}</tbody>;
};

const TaskSubmissionSummaryTable = ({ taskId, results }: TaskTableProps): JSX.Element => {
   return (
      <table>
         <TaskSubmissionSummaryTableHead />
         <TaskSubmissionSummaryTableBody taskId={taskId} results={results} />
      </table>
   );
};

export default TaskSubmissionSummaryTable;
