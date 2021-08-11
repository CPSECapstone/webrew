import { Navbar, Nav, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import './Navigation.css';

export default function Navigation() {
   return (
      <Navbar collapseOnSelect expand="sm" className="nav" variant="dark">
         <Navbar.Brand href="/">flipt.ED</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
               <Nav.Item className="ml-auto">
                  <Button variant="outline" type="submit" onClick={() => Auth.signOut()}>
                     Log Out
                  </Button>
               </Nav.Item>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
