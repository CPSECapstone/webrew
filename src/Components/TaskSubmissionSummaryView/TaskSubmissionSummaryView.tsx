import { useParams } from 'react-router-dom';
import { useTaskSubmissionSummaryQuery } from '../../__generated__/types';
import TaskSubmissionSummaryTable from './TaskSubmissionSummaryTable';

function TaskSubmissionSummaryView() {
   const { taskId } = useParams<Record<string, string>>();
   const { data } = useTaskSubmissionSummaryQuery({
      variables: {
         course: 'Integrated Science',
         taskId,
      },
   });

   let results = data?.taskSubmissionSummary.results || [];

   // sort by submitted or not
   results = [...results].sort((a, b) => {
      if (a.submitted === b.submitted) {
         return 0;
      }

      return a.submitted ? -1 : 1;
   });

   return (
      <div className="base-table">
         <TaskSubmissionSummaryTable taskId={taskId} results={results} />
      </div>
   );
}

export default TaskSubmissionSummaryView;
