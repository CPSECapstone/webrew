/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-array-index-key */
import {
   FrBlockFieldsFragment,
   GetTaskByIdQuery,
   ImageBlockFieldsFragment,
   McBlockFieldsFragment,
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
   if (taskInformation.task.pages[page] === undefined) {
      return <>Quiz is Not Yet Defined</>;
   }
   const pageBlocks = taskInformation.task.pages[page].blocks;

   type TaskBlock =
      | McBlockFieldsFragment
      | FrBlockFieldsFragment
      | ImageBlockFieldsFragment
      | TextBlockFieldsFragment
      | QuizBlockFieldsFragment
      | VideoBlockFieldsFragment;

   const blockList = pageBlocks.map((block: TaskBlock, index: number) => {
      switch (block.__typename) {
         case 'ImageBlock': {
            const iBlock = block;
            return (
               <ImageBlock
                  title={iBlock.title}
                  contents={iBlock.imageUrl}
                  key={index}
                  cssKey={index}
               />
            );
         }
         case 'TextBlock': {
            const tBlock = block;
            return (
               <TextBlock
                  title={tBlock.title}
                  contents={tBlock.contents}
                  key={index}
                  cssKey={index}
               />
            );
         }
         case 'QuizBlock': {
            const qBlock = block;
            return (
               <QuizBlock
                  title={qBlock.title}
                  questions={qBlock.questions}
                  reqScore={qBlock.requiredScore}
                  key={index}
                  cssKey={index}
               />
            );
         }
         case 'VideoBlock': {
            const vBlock = block;
            return (
               <VideoBlock
                  title={vBlock.title}
                  contents={vBlock.videoUrl}
                  key={index}
                  cssKey={index}
               />
            );
         }
         default:
            return <></>;
      }
   });

   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-12">
               <IntroBlock instructions={taskInformation.task.instructions} cssKey={0} />
               {blockList}
            </div>
         </div>
      </div>
   );
}

export default BlockPageHandler;
