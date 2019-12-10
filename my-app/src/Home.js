import React,{Component} from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
//Importacion de imagen Administrador
import logo from './Imagenes/Administrador.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Navbar,Form,Col,Button,Row,Container,ButtonGroup,ToggleButton,Carousel,Jumbotron,Nav,NavDropdown} from 'react-bootstrap';

import imagen1 from './Imagenes/Carrusel1.png';
import imagen2 from './Imagenes/Carrusel2.png';
import imagen3 from './Imagenes/Carrusel3.jpg';
import imagen4 from './Imagenes/Carrusel4.jpg';
import Bienvenidos from './Imagenes/bienvenidos.png';


import './App.css';



class App extends Component {

  render(){

  return (



      <Container class="center-block">

            <div className='containerCarrusel'>
              <img src={Bienvenidos}/>
            </div>
            

                <Carousel>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={imagen1}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={imagen2}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={imagen3}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={imagen4}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>

                  </Carousel>

             </Container>

   );
 }
}

export default App;