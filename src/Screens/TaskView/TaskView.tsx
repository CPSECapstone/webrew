import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Task, TaskSubmissionResult } from '../../interfaces/Task';
import TaskNavbar from './TaskNavbar/TaskNavbar';
import TaskProgress from './TaskProgress/TaskProgress';
import BlockPageHandler from './BlockPageHandler/BlockPageHandler';
import { GET_TASK_INFORMATION, GET_TASK_SUBMISSION_RESULT } from '../../queries/task-queries';

function TaskView({ taskId }: { taskId: string }) {
   const { data: taskInformation } = useQuery<Task>(GET_TASK_INFORMATION);
   const { data: taskSubmissionResult } = useQuery<TaskSubmissionResult>(
      GET_TASK_SUBMISSION_RESULT,
      {
         variables: { taskId },
      }
   );

   const [progress, setProgress] = useState(0);
   const [page, setPage] = useState(0);

   const maxPage: number =
      taskInformation === undefined || taskInformation.pages === undefined
         ? 0
         : taskInformation.pages.length - 1;

   return (
      <div>
         <TaskNavbar />
         {taskInformation && taskSubmissionResult ? (
            <div>
               <TaskProgress
                  taskInformation={taskInformation}
                  setPage={setPage}
                  page={page}
                  maxPage={maxPage}
               />
               <BlockPageHandler
                  taskInformation={taskInformation}
                  taskSubmissionResult={taskSubmissionResult}
                  page={page}
               />
            </div>
         ) : (
            <Alert variant="danger">
               Unable to load specified task. Please try refreshing the page.
            </Alert>
         )}
      </div>
   );
}

export default TaskView;
