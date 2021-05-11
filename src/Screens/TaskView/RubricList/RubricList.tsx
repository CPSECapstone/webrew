import { Form, NavDropdown, Button } from 'react-bootstrap';
import { RubricRequirement } from "../../../__generated__/types";

function submitTask() {

}

function RubricList(reqs: RubricRequirement[]) {
   const checkboxReqs = reqs.map((req: RubricRequirement) => {
      return (
         <Form.Check 
            type="checkbox" 
            className="" 
            label={req.description}
         />
      );
   });

   return (
      <NavDropdown title="Task Rubric" id="rubric-dropdown" className="ml-2">
         <Form>
            {checkboxReqs}
            <Button type="submit" onCLick={() => submitTask()}>Submit Task</Button>
         </Form>
      </NavDropdown>)
} 