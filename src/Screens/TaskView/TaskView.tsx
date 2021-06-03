import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
   RubricRequirement,
   useGetTaskByIdQuery,
   useTaskSubmissionResultQuery,
} from '../../__generated__/types';
import TaskNavbar from './TaskNavbar/TaskNavbar';
import TaskProgress from './TaskProgress/TaskProgress';
import BlockPageHandler from './BlockPageHandler/BlockPageHandler';
import './TaskView.css';

function TaskView() {
   const [page, setPage] = useState(0);
   const { taskId } = useParams<Record<string, string>>();
   const { username } = useParams<Record<string, string>>();

   const { data: taskSubmissionQuery } = useTaskSubmissionResultQuery({
      variables: {
         taskId,
         username,
      },
   });

   const { data: taskByIdQuery } = useGetTaskByIdQuery({
      variables: { taskId },
   });

   console.log(taskSubmissionQuery);
   console.log(taskByIdQuery);

   const maxPage: number =
      taskByIdQuery === undefined || taskByIdQuery.task.pages === undefined
         ? 0
         : taskByIdQuery.task.pages.length - 1;

   if (!taskByIdQuery || !taskSubmissionQuery) {
      return <></>;
   }

   const requirements = taskByIdQuery.task.requirements as RubricRequirement[];

   return (
      <div className="back">
         <TaskNavbar rubric={requirements} />
         <div>
            <TaskProgress
               taskInformation={taskByIdQuery}
               setPage={setPage}
               page={page}
               maxPage={maxPage}
            />
            <BlockPageHandler
               taskInformation={taskByIdQuery}
               page={page}
               taskSubmissionResult={taskSubmissionQuery}
               studentId={username}
            />
         </div>
      </div>
   );
}

export default TaskView;
