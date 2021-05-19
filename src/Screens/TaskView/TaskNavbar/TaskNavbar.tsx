import { faCaretLeft, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';
import { Navbar, Nav, Form, Button, NavDropdown, Dropdown } from 'react-bootstrap';
import { RubricRequirement } from '../../../__generated__/types';
import Rubric from '../Rubric/Rubric';
import RubricMenu from '../Rubric/RubricMenu';
import './TaskNavbar.css';

function TaskNavbar({ rubric }: { rubric: RubricRequirement[] }) {
   return (
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="light">
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
               <Form className="mr-3" inline>
                  <Button
                     className="rounded-circle btn-light"
                     type="submit"
                     href="/"
                     data-testid="task-left"
                  >
                     <FontAwesomeIcon icon={faCaretLeft} />
                  </Button>
               </Form>
               <Form inline className="ml-auto">
                  <Button
                     type="submit"
                     className="rounded-circle btn-light"
                     data-testid="hand-task"
                  >
                     <FontAwesomeIcon icon={faHandPaper} />
                  </Button>
               </Form>
               <div className="ml-1 mr-0">
                  <RubricMenu requirements={rubric} />
               </div>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

export default TaskNavbar;
