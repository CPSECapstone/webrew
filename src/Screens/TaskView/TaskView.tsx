import { useState } from 'react';
import { useGetTaskByIdQuery } from '../../__generated__/types';
import TaskNavbar from './TaskNavbar/TaskNavbar';
import TaskProgress from './TaskProgress/TaskProgress';
import BlockPageHandler from './BlockPageHandler/BlockPageHandler';

function TaskView({ taskId }: { taskId: string }) {
   const { data: taskByIdQuery } = useGetTaskByIdQuery({
      variables: { taskId },
   });

   const [page, setPage] = useState(0);

   const maxPage: number =
      taskByIdQuery === undefined || taskByIdQuery.task.pages === undefined
         ? 0
         : taskByIdQuery.task.pages.length - 1;

   if (!taskByIdQuery) {
      return <></>;
   }

   return (
      <div>
         <TaskNavbar />
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
