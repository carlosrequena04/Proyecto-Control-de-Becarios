import React,{Component} from 'react';
//Importacion de imagen Administrador
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import logo from './Imagenes/registro.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Navbar,Form,Col,Button,Row,Container,ButtonGroup,Nav,Table} from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";

import Registro from './Registro.js'
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

  renderBecario=({idBecario,tipoServicio,nombre,apellidoPaterno,apellidoMaterno,carrera,procedencia,numCelular,hrsCubrir,fechaInicio,fechaFin,contraseña}) =>
    <tr key= {idBecario}>
      <td> {idBecario}</td>
        <td> {tipoServicio}</td>
        <td> {nombre}</td>
        <td> {apellidoPaterno}</td>
        <td> {apellidoMaterno}</td>
        <td> {carrera}</td>
        <td> {procedencia}</td>
        <td> {numCelular}</td>
        <td> {hrsCubrir}</td>
        <td> {contraseña}</td>
        <td> {fechaInicio.split('T',1)}</td>
        <td> {fechaFin.split('T',1)}</td>

    </tr>

  render(){

  const {startDate,endDate}=this.state;
  const {becarios, becario} = this.state;

  return (

    <div className="FondoRegistrar">

      <div className='Margen'>

      <div className='Margen'>
          <Image src={logo} fluid />
      </div>



            <Button variant="success" id='RegistrarBecario' onClick={this.addBecario}>Registrar</Button>
    </div>

      <Table>
        <thead>
          <tr>
            <th>Id Becario</th>
            <th>Tipo Servicio</th>
            <th>Nombre(s)</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Carrera</th>
            <th>Procedencia</th>
            <th>Número Celular</th>
            <th>Horas a cubrir</th>
            <th>Contraseña</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
          </tr>
        </thead>

        <tbody>
           {becarios.map(this.renderBecario)}
        </tbody>
      </Table>
      
      </div>

  );

 }
}

export default Registrar;
