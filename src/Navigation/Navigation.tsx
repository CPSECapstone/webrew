import { Auth } from 'aws-amplify';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './Navigation.css';

export default function Navigation() {
   return (
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
         <Navbar.Brand href="/">flipt.ED</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
               <Nav.Link href="/">Dashboard</Nav.Link>
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
