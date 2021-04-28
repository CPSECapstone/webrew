import { useQuery } from '@apollo/client';
import { GET_LEARNING_OBJECTIVE } from '../../queries/LearningObjectiveQueries';
import { LearningObjectives } from '../../interfaces/LearningObjectives';
import { QuizBlockData } from '../../interfaces/QuizBlock';
import { QuizBlockSubmissionData } from '../../interfaces/QuizBlockSubmission';
import { GET_QUIZBLOCK } from '../../queries/quizblock';
import { GET_QUIZBLOCK_SUBMISSION } from '../../queries/quizblockSubmission';
import ObjectiveSection from './ObjectiveSection';
import SubmissionDetail from './SubmissionDetail';

import './ViewTaskSubmission.css';

function ViewTaskSubmission() {
   const { data: quizblockData } = useQuery<QuizBlockData>(GET_QUIZBLOCK);
   const { data: quizblockSubmissionData } = useQuery<QuizBlockSubmissionData>(
      GET_QUIZBLOCK_SUBMISSION
   );
   const { data: learningObjectives } = useQuery<LearningObjectives>(GET_LEARNING_OBJECTIVE);

   if (!learningObjectives) {
      return <>Learning Objective Undefined</>;
   }
   if (!quizblockData) {
      return <p>quizblock undefined</p>;
   }
   if (!quizblockSubmissionData) {
      return <p>quizblockSubmission undefined</p>;
   }

   const { quizblock } = quizblockData;
   const { quizblockSubmission } = quizblockSubmissionData;

   return (
      <div className="view-task-submission">
         <ObjectiveSection objectives={learningObjectives} />
         <SubmissionDetail quizblock={quizblock} quizblockSubmission={quizblockSubmission} />
      </div>
   );
}

export default ViewTaskSubmission;
