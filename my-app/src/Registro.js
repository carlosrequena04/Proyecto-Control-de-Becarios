import React,{Component} from 'react';
//Importacion de imagen Administrador
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import logo from './Imagenes/registro.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Navbar,Form,Col,Button,Row,Container,ButtonGroup,Nav,Table,Const} from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";

import './App.css';

class Registrar extends Component {

  state={
    becarios:[],
    becario: {
      idBecario:'',
      tipoServicio:'',
      nombre:'',
      apellidoPaterno:'',
      apellidoMaterno:'',
      carrera:'',
      procedencia:'',
      numCelular:'',
      hrsCubrir:'',
      contraseña:'',
      fechaInicio:'',
      fechaFin:''    
    },

     startDate: new Date(),
     endDate:new Date()
  }

  setStartDate(date){
    this.setState({startDate:date})
  }

  setEndDate(date){
    this.setState({endDate:date})
  }

  handleChange = date => {
    this.setState({
      startDate: date,
      endDate: date
    });
  }

  componentDidMount(){
    this.getBecario();
  }

  getBecario = _ => {
    fetch('http://localhost:4000/becario')
      .then(response => response.json())
      .then(response => this.setState({becarios: response.data}))
      .catch(err => console.error(err))
  }

  addBecario = _ => {
    const {becario,startDate,endDate}=this.state;

    var formatoFechaInicial=startDate.getFullYear()+'/'+startDate.getMonth()+'/'+startDate.getDate();
    var formatoFechaFinal=endDate.getFullYear()+'/'+endDate.getMonth()+'/'+endDate.getDate();
    console.log(formatoFechaInicial)

    fetch(`http://localhost:4000/becario/add?idBecario=${becario.idBecario}&tipoServicio=${becario.tipoServicio}&nombre=${becario.nombre}&apellidoPaterno=${becario.apellidoPaterno}&apellidoMaterno=${becario.apellidoMaterno}&carrera=${becario.carrera}&procedencia=${becario.procedencia}&numCelular=${becario.numCelular}&hrsCubrir=${becario.hrsCubrir}&fechaInicio=${formatoFechaInicial}&fechaFin=${formatoFechaFinal}&contraseña=${becario.contraseña}`)
      .then(response => response.json())
      .then(response=>this.getBecario)
      .catch(err=>console.error(err))

      console.log("becario")

  }
  render(){

  const {startDate,endDate}=this.state;
  const {becarios, becario} = this.state;

  return (
<div>
    <div className="FondoRegistrar">

      <div className='Margen'>

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

          <div className='Margen'>
              <Image src={logo} fluid />
          </div>

            <Form.Group controlId="" required>
              <Form.Control as="select" value = {becario.tipoServicio} 
              onChange = {e => this.setState( {becario:{...becario, tipoServicio: e.target.value}})}>
                <option>Seleccionar tipo de servicio</option>
                <option>Prácticas profesionales</option>
                <option>Servicio social</option>
                <option>Residencia</option>
              </Form.Control>
            </Form.Group>

            <Form.Group Id="" required>
              <Form.Control type="text" placeholder="Nombre (s):" required
              value = {becario.nombre} 
              onChange = {e => this.setState( {becario:{...becario, nombre: e.target.value}})} />
            </Form.Group>

            <Form.Group Id="" required>
              <Form.Control type="text" placeholder="Primer apellido:" required 
              value = {becario.apellidoPaterno} 
              onChange = {e => this.setState( {becario:{...becario, apellidoPaterno: e.target.value}})}/>
            </Form.Group>

            <Form.Group Id="" required>
              <Form.Control type="text" placeholder="Segundo apellido:" required 
              value = {becario.apellidoMaterno} 
              onChange = {e => this.setState( {becario:{...becario, apellidoMaterno: e.target.value}})} />
            </Form.Group>

            <Form.Group Id="" required>
              <Form.Control type="text" placeholder="Carrera:" required
              value = {becario.carrera} 
              onChange = {e => this.setState( {becario:{...becario, carrera: e.target.value}})} />
            </Form.Group>

            <Form.Group Id="" required>
              <Form.Control type="text" placeholder="Procedencia:" required
              value = {becario.procedencia} 
              onChange = {e => this.setState( {becario:{...becario, procedencia: e.target.value}})} />
            </Form.Group>

            <Form.Group Id="" required>
              <Form.Control type="text" placeholder="Número celular:" required
              value = {becario.numCelular} 
              onChange = {e => this.setState( {becario:{...becario, numCelular: e.target.value}})} />
            </Form.Group>

            <Form.Group Id=""required>
              <Form.Control type="number" min='0' max='300' placeholder="Horas a cubrir:" required
              value = {becario.hrsCubrir} 
              onChange = {e => this.setState( {becario:{...becario, hrsCubrir: e.target.value}})} />
            </Form.Group>

            <Form.Group Id="" required>
              <Form.Control type="text" placeholder="contraseña:" required
              value = {becario.contraseña} 
              onChange = {e => this.setState( {becario:{...becario, contraseña: e.target.value}})} />
            </Form.Group>

                <Form.Row>
                  <h6>Inicio</h6>
                  <Form.Group as={Col} controlId="formInicio" required>
                        <DatePicker 
                          selected={startDate}
                          onChange={date=>this.setStartDate(date)}
                          selectStart 
                          startDate={this.startDate}
                          endDate={this.endDate}
                          dateFormat='yyyy/MM/dd'                
                        />
                      </Form.Group>
                  </Form.Row>

                  <Form.Row>
                      <h6>Final</h6>
                      <Form.Group as={Col} controlId="formFinal" required>
                        <DatePicker 
                          selected={endDate}
                          onChange={date=>this.setEndDate(date)}
                          selectEnd 
                          startDate={this.startDate}
                          endDate={this.endDate}
                          dateFormat='yyyy/MM/dd'                
                        />
                      </Form.Group>
                </Form.Row>

            <Button variant="success" id='RegistrarBecario' onClick={this.addBecario}>Registrar</Button>
         </div>
      </div>
      
    </div>

  );

 }
}

export default Registrar;
