import { Checkbox, MenuItem, Typography } from '@material-ui/core';
import { useState } from 'react';

import { Form } from 'react-bootstrap';
import { RubricRequirement, TaskObjectiveProgress } from '../../../__generated__/types';

function ObjectiveRubric({ objective }: { objective: TaskObjectiveProgress | string }) {
   const [complete, setComplete] = useState(false);
   const handleChange = () => {
      setComplete(!complete);
   };

   return (
      <MenuItem style={{ width: '100%' }}>
         <Form.Group>
            {(() => {
               if (objective !== '') {
                  return (
                     <div>
                        <Checkbox
                           checked={complete}
                           onChange={handleChange}
                           inputProps={{ 'aria-label': 'primary checkbox' }}
                           color="default"
                        />
                        <Typography>
                           {(objective as TaskObjectiveProgress).objective.objectiveName}
                        </Typography>
                     </div>
                  );
               }
            })()}
         </Form.Group>
      </MenuItem>
   );
}

export default ObjectiveRubric;
