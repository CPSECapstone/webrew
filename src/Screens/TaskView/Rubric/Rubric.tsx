import { Checkbox, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import { Navbar, Nav, Form, Button, Dropdown } from 'react-bootstrap';
import { RubricRequirement } from '../../../__generated__/types';

function Rubric({ requirement }: { requirement: RubricRequirement }) {
   const [complete, setComplete] = useState(requirement.isComplete);
   console.log(requirement);
   const handleChange = () => {
      setComplete(!complete);
   };
   return (
      <MenuItem>
         <Form.Group>
            <Checkbox
               checked={complete}
               onChange={handleChange}
               inputProps={{ 'aria-label': 'primary checkbox' }}
               color="default"
            />
            {/* <Form.Check required checked={requirement.isComplete} /> */}
            <Form.Label>{requirement.description}</Form.Label>
         </Form.Group>
      </MenuItem>
   );
}

export default Rubric;
