import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
   RubricRequirement,
   TaskObjectiveProgress,
   useGetTaskByIdQuery,
   useTaskSubmissionResultQuery,
} from '../../__generated__/types';
import TaskNavbar from './TaskNavbar/TaskNavbar';
import TaskProgress from './TaskProgress/TaskProgress';
import BlockPageHandler from './BlockPageHandler/BlockPageHandler';
import './TaskView.css';

// function TaskView({ taskId }: { taskId: string }) {
function TaskView() {
   const [page, setPage] = useState(0);
   const { taskId } = useParams<Record<string, string | undefined>>();
   const history = useHistory();
   console.log(history.location);
   const taskObjectiveProgress = history.location.state;
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
   const { objectiveId } = taskByIdQuery.task;
   if (objectiveId === undefined) {
      return <></>;
   }
   console.log(taskByIdQuery.task);

   return (
      <div className="back">
         <TaskNavbar
            rubric={requirements}
            objectiveProgress={taskObjectiveProgress as TaskObjectiveProgress}
         />
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
