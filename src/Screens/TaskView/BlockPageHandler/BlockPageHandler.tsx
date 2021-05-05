/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
   GetTaskByIdQuery,
   ImageBlockFieldsFragment,
   PageFieldsFragment,
   QuizBlockFieldsFragment,
   TextBlockFieldsFragment,
   VideoBlockFieldsFragment,
} from '../../../__generated__/types';
import ImageBlock from '../../../Components/TaskBlocks/ImageBlock/ImageBlock';
import TextBlock from '../../../Components/TaskBlocks/TextBlock/TextBlock';
import VideoBlock from '../../../Components/TaskBlocks/VideoBlock/VideoBlock';
import QuizBlock from '../../../Components/TaskBlocks/QuizBlock/QuizBlock';
import IntroBlock from '../../../Components/TaskBlocks/IntroBlock/IntroBlock';

function BlockPageHandler({
   taskInformation,
   page,
}: {
   taskInformation: GetTaskByIdQuery;
   page: number;
}) {
   const pageBlocks = taskInformation.task.pages[page].blocks;

   type TaskBlock =
      | ImageBlockFieldsFragment
      | TextBlockFieldsFragment
      | QuizBlockFieldsFragment
      | VideoBlockFieldsFragment;

   const blockList = pageBlocks.map((block: TaskBlock, index: number) => {
      switch (block.__typename) {
         case 'ImageBlock': {
            const iBlock = block as ImageBlockFieldsFragment;
            return <ImageBlock title="PLACEHOLDER" contents={iBlock.imageUrl} key={index} />;
         }
         case 'TextBlock': {
            const tBlock = block as TextBlockFieldsFragment;
            return <TextBlock title={tBlock.title} contents={tBlock.contents} key={index} />;
         }
         case 'QuizBlock': {
            const qBlock = block as QuizBlockFieldsFragment;
            return (
               <QuizBlock
                  title={qBlock.title}
                  questions={qBlock.questions}
                  reqScore={qBlock.requiredScore}
                  key={index}
               />
            );
         }
         case 'VideoBlock': {
            const vBlock = block as VideoBlockFieldsFragment;
            return <VideoBlock title={vBlock.title} contents={vBlock.videoUrl} key={index} />;
         }
         default:
            return <></>;
      }
   });

   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-10 mx-auto">
               <IntroBlock instructions={taskInformation.task.instructions} />
               {blockList}
            </div>
         </div>
      </div>
   );
}

export default BlockPageHandler;
