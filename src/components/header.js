import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../styles/styles.css";
import Buscador from "./Buscador";
import foto1 from "../assets/images/bolsa-de-la-compra.png";
import foto2 from "../assets/images/buscando.png";
import foto3 from "../assets/images/perfil-del-usuario (1).png";
import logout from "../assets/images/logout.png";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../Redux/actions/actionsLoginAsync";
const Header = () => {
   const dispatch = useDispatch();

   const handleLogout = () => {
      dispatch(logoutAsync());
   };

   return (
      <div>
         <Navbar className="bg" expand="lg">
            <Container>
               <Navbar.Brand href="#home">SarsNOVA</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="menu">
                     <Nav.Link>
                        <img src={foto1} width={40} alt="" />
                     </Nav.Link>
                     <Nav.Link>
                        <img src={foto2} width={40} alt="" />
                     </Nav.Link>
                     <Nav.Link>
                        <img src={foto3} width={40} alt="" />
                     </Nav.Link>
                     <NavDropdown title="Lenguage" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">ES</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
                     </NavDropdown>

                     <ul className="navbar-nav" id="lista">
                        <li class="lista">
                           <button className="nav-link" onClick={handleLogout}>
                              <img src={logout} width={40} alt="" />
                           </button>
                        </li>
                     </ul>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <Buscador />
      </div>
   );
};

export default Header;
