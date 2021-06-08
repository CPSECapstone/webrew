import { faCaretLeft, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { RubricRequirement } from '../../../__generated__/types';
import RubricMenu from '../Rubric/RubricMenu';
import './TaskNavbar.css';

function TaskNavbar({
   rubric,
   taskId,
   username,
}: {
   rubric: RubricRequirement[];
   taskId: string;
   username: string;
}) {
   return (
      <Navbar className="navbar-custom border-top border-light" collapseOnSelect expand="sm">
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
               <Form className="mr-3" inline>
                  <Button className="rounded-circle btn-light" type="submit" href="/">
                     <FontAwesomeIcon icon={faCaretLeft} />
                  </Button>
               </Form>
               <Form inline className="ml-auto">
                  <Button type="submit" className="rounded-circle btn-light">
                     <FontAwesomeIcon icon={faHandPaper} />
                  </Button>
               </Form>
               <div className="ml-1 mr-0">
                  <RubricMenu requirements={rubric} taskId={taskId} username={username} />
               </div>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

export default TaskNavbar;
