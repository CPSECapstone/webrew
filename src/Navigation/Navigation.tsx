import { Auth } from 'aws-amplify';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import './Navigation.css';

export default function Navigation() {
   return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
         <Navbar.Brand href="/">Flipt(Ed)</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
               <Nav.Link href="/">Dashboard</Nav.Link>
               <NavDropdown title="Dev Screens" className="ml-auto" id="dev-dropdown">
                  <NavDropdown.Item href="/addNewCourse">Create Course</NavDropdown.Item>
                  <NavDropdown.Item href="/addTaskSubmission">Submit Task</NavDropdown.Item>
                  <NavDropdown.Item href="/taskSubmissionOverview">
                     Task Submission Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/viewTaskSubmission">
                     View Task Submission
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/studentOverview">Student Overview</NavDropdown.Item>
                  <NavDropdown.Item href="/singleStudentOverview">
                     Single Student Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/singleStudentMasteryOverview">
                     Single Student Mastery Overview
                  </NavDropdown.Item>
               </NavDropdown>
               <Form inline>
                  <Button className="ml-auto" type="submit" onClick={() => Auth.signOut()}>
                     Log Out
                  </Button>
               </Form>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
