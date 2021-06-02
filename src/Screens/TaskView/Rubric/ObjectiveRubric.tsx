import { useMutation } from '@apollo/client';
import { Checkbox, MenuItem, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, NavDropdown } from 'react-bootstrap';
import {
   RubricRequirement,
   TaskObjectiveProgress,
   useGetTaskObjectiveProgressQuery,
} from '../../../__generated__/types';
import MasteryRubricGrading from './MasteryRubricGrading';

function ObjectiveRubric({ objective }: { objective: TaskObjectiveProgress[] }) {
   //    const { data: taskObjectiveProgress } = useGetTaskObjectiveProgressQuery({
   //       variables: {
   //          taskId: objective.task.id,
   //       },
   //    });
   //    if (taskObjectiveProgress === undefined) {
   //       return <></>;
   //    }
   //    const objectiveProgresses = (taskObjectiveProgress.getTaskObjectiveProgress as unknown) as TaskObjectiveProgress[];
   const objectiveProgresses = objective;

   return (
      <MenuItem>
         <Form.Group>
            {/* {(() => {
               if (objective !== '') {
                  return ( */}
            {objectiveProgresses.map((objectiveProgress1: TaskObjectiveProgress) => (
               <div className="row">
                  <div className="col-8" style={{ width: '50%' }}>
                     <MasteryRubricGrading objectiveProgress={objectiveProgress1} />
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
