import React,{Component} from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Navbar,Form,Col,Button,Row,Container,ButtonGroup,ToggleButton,Carousel,Jumbotron,Nav,NavDropdown} from 'react-bootstrap';






class indice extends Component{


	render(){


		return(

			<div className="FondoRegistrar">
				

				<div className= "barra">
			          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			            <Navbar.Collapse id="responsive-navbar-nav">
			              <Nav className="mr-auto">
			                <Nav.Link href="/Registro">Registrar</Nav.Link>
			                <Nav.Link href="/mbecario">Mostrar Registros</Nav.Link>
			                <Nav.Link href="/hrs">Hrs Becario</Nav.Link>
			              </Nav>
		            </Navbar.Collapse>
			         </Navbar>
			    </div>

			
			</div>


		);
	}
}

export default indice;