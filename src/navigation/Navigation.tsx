import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
   return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" data-testid="navbar-test">
         <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav>
                  <Nav.Link href="/" data-testid="nav-link-first">
                     Dashboard
                  </Nav.Link>
                  <Nav.Link href="/addNewCourse" data-testid="nav-link-second">
                     Create Course
                  </Nav.Link>
                  <Nav.Link href="/addTaskSubmission" data-testid="nav-link-third">
                     Submit Task
                  </Nav.Link>
                  <Nav.Link href="/taskOverview" data-testid="nav-link-fourth">
                     Tasks
                  </Nav.Link>
                  <Nav.Link href="/studentOverview" data-testid="nav-link-fifth">
                     Student Overview
                  </Nav.Link>
                  <Nav.Link href="/singleStudentOverview" data-testid="nav-link-sixth">
                     Single Student Overview
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
