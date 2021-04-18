import { Auth } from 'aws-amplify';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';

export default function Navigation() {
   return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
         <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav>
                  <Nav.Link href="/">Dashboard</Nav.Link>
                  <Nav.Link href="/addNewCourse">Create Course</Nav.Link>
                  <Nav.Link href="/addTaskSubmission">Submit Task</Nav.Link>
                  <Nav.Link href="/taskOverview">Tasks</Nav.Link>
                  <Nav.Link href="/studentOverview">Student Overview</Nav.Link>
                  <Nav.Link href="/singleStudentOverview">Single Student Overview</Nav.Link>
                  <Nav.Link href="/singleStudentMasteryOverview">
                     Single Student Mastery Overview
                  </Nav.Link>
                  <Form inline>
                     <Button type="submit" onClick={() => Auth.signOut()}>
                        Log Out
                     </Button>
                  </Form>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
