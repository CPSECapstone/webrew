import ObjectiveSection from './ObjectiveSection';
import SubmissionDetail from './SubmissionDetail';
import useQuizBlock from '../../hooks/useQuizBlock';
import useLearningObjectives from '../../hooks/useLearningObjectives';
import useQuizBlockSubmission from '../../hooks/useQuizBlockSubmission';
import './ViewTaskSubmission.css';

function ViewTaskSubmission() {
   const { learningObjectives } = useLearningObjectives();
   const { quizblock } = useQuizBlock();
   const { quizblockSubmission } = useQuizBlockSubmission();

   if (!learningObjectives) {
      return <>Learning Objective Undefined</>;
   }
   if (!quizblock) {
      return <p>quizblock undefined</p>;
   }
   if (!quizblockSubmission) {
      return <p>quizblockSubmission undefined</p>;
   }

   return (
      <div className="view-task-submission">
         <ObjectiveSection objectives={learningObjectives} />
         <SubmissionDetail quizblock={quizblock} quizblockSubmission={quizblockSubmission} />
      </div>
   );
}

export default ViewTaskSubmission;
