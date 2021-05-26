import { faCaretLeft, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';
import { Navbar, Nav, Form, Button, NavDropdown, Dropdown } from 'react-bootstrap';
import { RubricRequirement } from '../../../__generated__/types';
import Rubric from '../Rubric/Rubric';
import './TaskNavbar.css';

function TaskNavbar({ rubric }: { rubric: RubricRequirement[] }) {
   return (
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="light">
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
               <Form inline>
                  <Button className="rounded-circle btn-light" type="submit" href="/">
                     <FontAwesomeIcon icon={faCaretLeft} />
                  </Button>
               </Form>
               <Form inline className="ml-auto">
                  <Button type="submit" className="rounded-circle btn-light">
                     <FontAwesomeIcon icon={faHandPaper} />
                  </Button>
               </Form>

               <NavDropdown drop="left" title="Task Rubric" id="rubric-dropdown" className="ml-2">
                  <Form>
                     {rubric.map((requirement: RubricRequirement) => (
                        <Rubric requirement={requirement} />
                     ))}
                     <NavDropdown.Divider />
                     <Button className="mx-auto" type="submit">
                        Submit Task
                     </Button>
                  </Form>
               </NavDropdown>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

export default TaskNavbar;
