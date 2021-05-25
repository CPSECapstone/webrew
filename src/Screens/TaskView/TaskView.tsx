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

// function TaskView({ taskId }: { taskId: string }) {
function TaskView() {
   const [page, setPage] = useState(0);
   const { taskId } = useParams<Record<string, string | undefined>>();
   let { username } = useParams<Record<string, string | undefined>>();
   username = 'bob';
   const { data: taskSubmissionQuery } = useTaskSubmissionResultQuery({
      variables: {
         taskId: '4f681550ba9',
         username: 'bob',
      },
   });
   if (taskId === undefined) {
      return <>Task Undefined</>;
   }

   const { data: taskByIdQuery } = useGetTaskByIdQuery({
      variables: { taskId },
   });

   console.log(taskSubmissionQuery?.retrieveTaskSubmission);

   const maxPage: number =
      taskByIdQuery === undefined || taskByIdQuery.task.pages === undefined
         ? 0
         : taskByIdQuery.task.pages.length - 1;

   if (!taskByIdQuery) {
      return <></>;
   }

   const requirements = taskByIdQuery.task.requirements as RubricRequirement[];

   return (
      <div>
         <TaskNavbar rubric={requirements} />
         <div>
            <TaskProgress
               taskInformation={taskByIdQuery}
               setPage={setPage}
               page={page}
               maxPage={maxPage}
            />
            <BlockPageHandler taskInformation={taskByIdQuery} page={page} />
         </div>
      </div>
   );
}

export default TaskView;
