import React from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
//Importacion de imagen Administrador
import logo from './Imagenes/Administrador.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Navbar,Form,Col,Button,Row,Container,ButtonGroup,ToggleButton,Carousel,Jumbotron,Nav,NavDropdown} from 'react-bootstrap';

import './App.css';



function App() {
  return (
    <Container class="center-block">

        <Image className= "perfilImagen"src={logo} roundedCircle />

          <Form.Group as={Row} controlId="Usuario">
            <Form.Label column sm="2">
              Usuario
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Usuario" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Button variant="success">Acceder</Button>
          

      </Container>


  );
}

export default App;