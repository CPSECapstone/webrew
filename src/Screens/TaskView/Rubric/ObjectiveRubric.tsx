import { MenuItem, Typography } from '@material-ui/core';
import { Form } from 'react-bootstrap';
import {
   TaskObjectiveProgress,
   useGetTaskObjectiveProgressQuery,
} from '../../../__generated__/types';
import MasteryRubricGrading from './MasteryRubricGrading';

function ObjectiveRubric({ taskId, username }: { taskId: string; username: string }) {
   const { data: taskObjectiveProgress } = useGetTaskObjectiveProgressQuery({
      variables: {
         taskId,
         username,
      },
   });
   if (taskObjectiveProgress === undefined) {
      return <></>;
   }
   let objectiveProgresses =
      taskObjectiveProgress.getTaskObjectiveProgress as unknown as TaskObjectiveProgress[];

   if (objectiveProgresses === undefined) {
      objectiveProgresses = [];
   }

   return (
      <MenuItem>
         <Form.Group>
            {/* {(() => {
               if (objective !== '') {
                  return ( */}
            {objectiveProgresses.map((objectiveProgress1: TaskObjectiveProgress) => (
               <div className="row">
                  <div className="col-8" style={{ width: '50%' }}>
                     <MasteryRubricGrading
                        objectiveProgress={objectiveProgress1}
                        username={username}
                     />
                  </div>
                  <div className="col-4" style={{ paddingTop: '25px', width: '50%' }}>
                     <Typography>{objectiveProgress1.objective.objectiveName}</Typography>
                  </div>
               </div>
            ))}
         </Form.Group>
      </MenuItem>
   );
}

export default ObjectiveRubric;
