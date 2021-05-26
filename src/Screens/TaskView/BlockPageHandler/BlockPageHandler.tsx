/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-array-index-key */
import {
   FrBlockFieldsFragment,
   FrQuestionFieldsFragment,
   GetTaskByIdQuery,
   ImageBlockFieldsFragment,
   McBlockFieldsFragment,
   McQuestionFieldsFragment,
   QuizBlockFieldsFragment,
   TextBlockFieldsFragment,
   VideoBlockFieldsFragment,
} from '../../../__generated__/types';
import ImageBlock from '../../../Components/TaskBlocks/ImageBlock/ImageBlock';
import TextBlock from '../../../Components/TaskBlocks/TextBlock/TextBlock';
import VideoBlock from '../../../Components/TaskBlocks/VideoBlock/VideoBlock';
import IntroBlock from '../../../Components/TaskBlocks/IntroBlock/IntroBlock';
import FrBlock from '../../../Components/TaskBlocks/FrBlock/FrBlock';
import McBlock from '../../../Components/TaskBlocks/McBlock/McBlock';

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

   type QuestionFieldsFragment = McQuestionFieldsFragment | FrQuestionFieldsFragment;

   let tempIndex = 0;
   const blockList: any[] = [];
   pageBlocks.forEach((block: TaskBlock) => {
      switch (block.__typename) {
         case 'ImageBlock': {
            const iBlock = block;
            blockList.push(
               <ImageBlock
                  title={iBlock.title}
                  contents={iBlock.imageUrl}
                  key={tempIndex}
                  cssKey={tempIndex}
               />
            );
            tempIndex += 1;
            break;
         }
         case 'TextBlock': {
            const tBlock = block;
            blockList.push(
               <TextBlock
                  title={tBlock.title}
                  contents={tBlock.contents}
                  key={tempIndex}
                  cssKey={tempIndex}
               />
            );
            tempIndex += 1;
            break;
         }
         case 'QuizBlock': {
            const { questions }: { questions: QuestionFieldsFragment[] } = block;

            questions.forEach((question: QuestionFieldsFragment) => {
               switch (question.__typename) {
                  case 'FrQuestion': {
                     const answer = question.answer ? question.answer : 'Not answered.';
                     blockList.push(
                        <FrBlock
                           title={block.title}
                           question={question.description}
                           answer={answer}
                           key={tempIndex}
                           cssKey={tempIndex}
                        />
                     );
                     tempIndex += 1;
                     break;
                  }
                  case 'McQuestion': {
                     blockList.push(
                        <McBlock
                           title={block.title}
                           question={question.description}
                           options={question.options}
                           answers={question.answers}
                           key={tempIndex}
                           cssKey={tempIndex}
                        />
                     );
                     tempIndex += 1;
                     break;
                  }
                  default: {
                     blockList.push(<></>);
                     break;
                  }
               }
            });
            break;
         }
         case 'VideoBlock': {
            const vBlock = block;
            blockList.push(
               <VideoBlock
                  title={vBlock.title}
                  contents={vBlock.videoUrl}
                  key={tempIndex}
                  cssKey={tempIndex}
               />
            );
            tempIndex += 1;
            break;
         }
         default:
            blockList.push(<></>);
            break;
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
