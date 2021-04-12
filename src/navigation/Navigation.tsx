import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
   return (
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
         <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav>
                  <Nav.Link href="/">Dashboard</Nav.Link>
                  <Nav.Link href="/addNewCourse">Create Course</Nav.Link>
                  <Nav.Link href="/addTaskSubmission">Submit Task</Nav.Link>
                  <Nav.Link href="/taskOverview">Tasks</Nav.Link>
                  <Nav.Link href="/studentOverview">Student Overview</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
