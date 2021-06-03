/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-array-index-key */
import {
   AnswerFieldsFragment,
   AnswerFieldsFragmentDoc,
   FrBlockFieldsFragment,
   FrQuestionFieldsFragment,
   GetTaskByIdQuery,
   ImageBlockFieldsFragment,
   McBlockFieldsFragment,
   McQuestionFieldsFragment,
   QuestionAndAnswerFieldsFragment,
   QuizBlockFieldsFragment,
   TaskSubmissionResultQuery,
   TextBlockFieldsFragment,
   VideoBlockFieldsFragment,
} from '../../../__generated__/types';
import ImageBlock from '../../../Components/TaskBlocks/ImageBlock/ImageBlock';
import TextBlock from '../../../Components/TaskBlocks/TextBlock/TextBlock';
import VideoBlock from '../../../Components/TaskBlocks/VideoBlock/VideoBlock';
import IntroBlock from '../../../Components/TaskBlocks/IntroBlock/IntroBlock';
import FrBlock from '../../../Components/TaskBlocks/FrBlock/FrBlock';
import McBlock from '../../../Components/TaskBlocks/McBlock/McBlock';
import InstructorDetail from '../InstructorDetail/InstructorDetail';

function BlockPageHandler({
   taskInformation,
   page,
   taskSubmissionResult,
   studentId,
}: {
   taskInformation: GetTaskByIdQuery;
   page: number;
   taskSubmissionResult: TaskSubmissionResultQuery;
   studentId: string;
}) {
   if (taskInformation.task.pages[page] === undefined) {
      return <>Quiz is Not Yet Defined</>;
   }

   const taskSubmission = taskSubmissionResult.retrieveTaskSubmission;

   const instructorDetail = taskSubmission ? (
      <InstructorDetail taskSubmission={taskSubmission} studentId={studentId} />
   ) : (
      <></>
   );

   const questionsAndAnswers: QuestionAndAnswerFieldsFragment[] = taskSubmission?.questionAndAnswers
      ? taskSubmission.questionAndAnswers
      : [];
   const answerMap = new Map<string, AnswerFieldsFragment>();
   questionsAndAnswers.forEach((qAndAnswer) => {
      if (qAndAnswer.answer) {
         answerMap.set(qAndAnswer.question.id, qAndAnswer.answer);
      } else {
         answerMap.set(qAndAnswer.question.id, {
            __typename: 'Answer',
            pointsAwarded: 0,
            questionId: qAndAnswer.question.id,
            graded: false,
         });
      }
   });
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
                     const studentAnswer = answerMap.get(question.id);
                     blockList.push(
                        <FrBlock
                           title={block.title}
                           question={question.description}
                           answer={answer}
                           studentAnswer={studentAnswer}
                           key={tempIndex}
                           points={question.points}
                           cssKey={tempIndex}
                           studentId={studentId}
                        />
                     );
                     tempIndex += 1;
                     break;
                  }
                  case 'McQuestion': {
                     const studentAnswer = answerMap.get(question.id);
                     blockList.push(
                        <McBlock
                           title={block.title}
                           question={question.description}
                           options={question.options}
                           answers={question.answers}
                           studentAnswer={studentAnswer}
                           key={tempIndex}
                           points={question.points}
                           cssKey={tempIndex}
                           studentId={studentId}
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
               {instructorDetail}
               <IntroBlock instructions={taskInformation.task.instructions} />
               {blockList}
            </div>
         </div>
      </div>
   );
}

export default BlockPageHandler;
