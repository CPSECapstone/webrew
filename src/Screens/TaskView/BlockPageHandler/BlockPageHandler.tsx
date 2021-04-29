import { Task, TaskBlock, TaskSubmissionResult } from '../../../interfaces/Task';
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
   const blocks = [];

   taskInformation.pages[page].blocks.forEach((block: any) => {
      blocks.push(block.title);
   });

   return (
      <IntroBlock taskName={taskInformation?.name} instructions={taskInformation?.instructions} />
   );
}

export default BlockPageHandler;
