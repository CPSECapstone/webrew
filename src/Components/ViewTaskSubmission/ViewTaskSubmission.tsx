import ObjectiveSection from './ObjectiveSection';
import SubmissionDetail from './SubmissionDetail';
import useQuizBlockSubmission from '../../hooks/useQuizBlockSubmission';
import { useQuizBlockQuery } from '../../__generated__/types';
import './ViewTaskSubmission.css';

function ViewTaskSubmission() {
   const { data: quizBlockQuery } = useQuizBlockQuery({
      variables: {
         taskId: 'ac133970e04',
         blockId: '0984b7bf5a0',
      },
   });

   const { quizblockSubmission } = useQuizBlockSubmission();

   if (!quizBlockQuery?.quizblock || !quizblockSubmission) {
      return <></>;
   }

   return (
      <div className="view-task-submission">
         <ObjectiveSection />
         <SubmissionDetail
            quizblockQuery={quizBlockQuery}
            quizblockSubmission={quizblockSubmission}
         />
      </div>
   );
}

export default ViewTaskSubmission;
