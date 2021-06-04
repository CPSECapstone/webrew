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

function TaskView() {
   const [page, setPage] = useState(0);
   const history = useHistory();
   console.log(history.location);
   const taskObjectiveProgress = history.location.state;
   const { taskId } = useParams<Record<string, string>>();
   const { username } = useParams<Record<string, string>>();

   console.log(taskObjectiveProgress);
   if (taskId === undefined) {
      return <>Task Undefined</>;
   }

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
   // const { objectiveId } = taskByIdQuery.task;
   // if (objectiveId === undefined) {
   //    return <></>;
   // }
   // console.log(taskByIdQuery.task);

   return (
      <div className="back">
         <TaskNavbar
            rubric={requirements}
            // objectiveProgress={taskObjectiveProgress as TaskObjectiveProgress[]}
            taskId={taskId}
            username={username}
         />
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
