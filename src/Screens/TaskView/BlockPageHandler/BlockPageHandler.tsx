import { Task, TaskBlock, TaskSubmissionResult } from '../../../__generated__/types';
import IntroBlock from '../TaskBlocks/IntroBlock/IntroBlock';

function BlockPageHandler({
   taskInformation,
   taskSubmissionResult,
   page,
}: {
   taskInformation: Task;
   taskSubmissionResult: TaskSubmissionResult;
   page: number;
}) {
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-10 mx-auto">
               <IntroBlock
                  taskName={taskInformation?.name}
                  instructions={taskInformation?.instructions}
               />
            </div>
         </div>
      </div>
   );
}

export default BlockPageHandler;
