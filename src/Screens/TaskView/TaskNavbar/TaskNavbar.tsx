import { faCaretLeft, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import './TaskNavbar.css';

function TaskNavbar() {
   return (
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="light">
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
               <Form inline>
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
               <NavDropdown
                  title="Task Rubric"
                  id="rubric-dropdown"
                  className="ml-2"
                  data-testid="task-rubric"
               >
                  <NavDropdown.Item href="">Task Rubric</NavDropdown.Item>
                  <Form inline>
                     <Button type="submit">Submit Task</Button>
                  </Form>
               </NavDropdown>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

export default TaskNavbar;
