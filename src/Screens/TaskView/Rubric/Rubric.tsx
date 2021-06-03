import { Checkbox, Divider, MenuItem, Typography } from '@material-ui/core';
import { useState } from 'react';

import { Form } from 'react-bootstrap';
import { RubricRequirement } from '../../../__generated__/types';

function Rubric({ requirement }: { requirement: RubricRequirement }) {
   const [complete, setComplete] = useState(requirement.isComplete);
   console.log(requirement);
   const handleChange = () => {
      setComplete(!complete);
   };

   return (
      <MenuItem style={{ width: '100%' }}>
         {/* <Form.Group> */}
         {/* <Checkbox
               checked={complete}
               onChange={handleChange}
               inputProps={{ 'aria-label': 'primary checkbox' }}
               color="default"
            /> */}
         <Typography>{requirement.description}</Typography>
         {/* </Form.Gro up> */}
      </MenuItem>
   );
}

export default Rubric;
