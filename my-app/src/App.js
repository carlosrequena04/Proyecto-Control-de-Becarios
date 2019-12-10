import React,{Component} from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
//Importacion de imagen Administrador
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Navbar,Form,Col,Button,Row,Container,ButtonGroup,ToggleButton,Carousel,Jumbotron,Nav,NavDropdown} from 'react-bootstrap';
import logo from './Imagenes/CarruselLogo.png'

import Home from './Home'
import Registro from './Registro'
import indice from './indice'
import mbecario from './mbecario'
import hrs from './hrs'

import './App.css';

class App extends Component {

  state={
    becario:[],
    becarios: {
      idBecario:'',
      tipoServicio:'',
      nombre:'',
      apellidoPaterno:'',
      apellidoMaterno:'',
      carrera:'',
      procedencia:'',
      numCelular:'',
      hrsCubrir:'',
      fechaInicio:'',
      fechaFin:'',
      contraseña:''
    }
  }

  componentDidMount(){
    this.getBecario();
  }

  getBecario = _ => {
    fetch('http://localhost:4000/becario')
      .then(response => response.json())
      .then(response => this.setState({becario: response.data}))
      .catch(err => console.error(err))
  }

  addBecario = _ => {

  }

  addAdministrador= _ =>{

  }

  render(){
    const {becario, becarios} = this.state;

    var FechaYHora=new Date();
    var formatDate=FechaYHora.getFullYear()+'/'+(FechaYHora.getMonth()+1)+'/'+FechaYHora.getDate();

  return (

      <div className="barra">
        <Navbar sticky="top" expand="lg" bg="dark" variant="dark">

             <Navbar.Brand>
                <img
                  src={logo}
                  width="25"
                  height="35"
                  className="d-inline-block align-top"
                />{' '}
              </Navbar.Brand>    

                  <Navbar.Brand>Sistema de Registro de Becarios </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="">
                    <Nav className="mr-auto">
                      <Nav.Link href="/Home">Inicio</Nav.Link>

                        <NavDropdown title="Administrador" id="">
                            
                            <div className= "Margen">
                                <h6>Iniciar sesión</h6>

                                <form class="col-12" action="@{/login}" method="get">
                                    <div class="Margen" id="user-group">
                                        <input type="text" class="form-control" placeholder="Usuario" name="username"/>
                                    </div>
                                    <div class="Margen" id="">
                                        <input type="password" class="form-control" placeholder="Contraseña" name="password"/>
                                    </div>
                                    <Button href="./indice" variant="outline-success" >Acceder</Button>
                                    
                                </form>
                            </div>
                            
                        </NavDropdown>

                        <NavDropdown title="Becario" id="">

                            <div className="Margen">
                                  <h6>Iniciar sesión</h6>
                                  <form class="col-12" action="@{/login}" method="get">
                                    <div class="Margen" id="user-group">
                                      <input type="text" class="form-control" placeholder="Usuario" name="username"/>
                                    </div>
                                    <div class="Margen" id="">
                                      <input type="password" class="form-control" placeholder="Contraseña" name="password"/>
                                    </div>
                                    <Button variant="outline-success">Entrada</Button>
                                    <Button variant="outline-danger">Salida</Button>
                                </form>

                            </div>

                        </NavDropdown>

                      </Nav>

                  </Navbar.Collapse>

              </Navbar>

              <Router>
                  <Route exact path="/" component={Home} />
                  <Route path="/Home" component={Home} />
                  <Route path="/Registro" component={Registro} />
                  <Route path="/indice" component={indice}/>
                  <Route path="/mbecario" component={mbecario}/>
                  <Route path="/hrs" component={hrs}/>
              </Router>

      
              <div className="footer" id="footer">
                <ul class="copyright">
                  <li>&copy; <a href="http://www.tizimin.uady.mx">UADY. Unidad Multidiciplinaria Tizimin.</a></li><li>Design: <a href="https://www.facebook.com/ricardo.ayalacanche">Ricardo Ayala</a></li> <li> <a href="https://www.facebook.com/carlosalberto.requenarequena">Carlos Requena</a></li>
                </ul>
              </div>

          </div>
  );
 }
}

export default App;



