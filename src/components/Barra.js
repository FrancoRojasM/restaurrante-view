import { Navbar, Container,Nav } from "react-bootstrap"
import {Link} from "react-router-dom"
import logorest from '../images/logorest.png';


export default function Barra() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top"
    style={{
      background:"black" 
    }}>
      <Container>
      <Link className="nav-link" to="/">
        <Navbar.Brand>      
        <img src={logorest} style={{width:"130px",height:"100px"}}></img>
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar"/>
            <Navbar.Collapse id="navbar">
            <Nav className="ms-5">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/">
             Nosotros
            </Link>          
            
            <Link className="nav-link" to="/">
             Contactanos
            </Link>
            <Link className="nav-link" to="/">
             Visitanos
            </Link>
            <Link className="nav-link menubtn" to="/menu">
              Menú
            </Link>  
            </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
      
    </Navbar.Collapse>     
      </Container>
    </Navbar>
  )
}