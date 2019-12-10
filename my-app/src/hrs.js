import React,{Component} from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image,Navbar,Form,Col,Button,Row,Container,ButtonGroup,ToggleButton,Carousel,Jumbotron,Nav,NavDropdown,Table} from 'react-bootstrap';


class hrs extends Component{
	state={
    becarios:[],
    becario: {
      idBecario:'',
      nombre:'',
 	  fechaInicio:'',
      fechaFin:''
    },
  }


	renderBecario=({idBecario,nombre,fechaInicio,fechaFin}) =>
    <tr key= {idBecario}>
      	<td> {idBecario}</td>
        <td> {nombre}</td>
		<td> {fechaInicio.split('T',1)}</td>
        <td> {fechaFin.split('T',1)}</td>

    </tr>

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

		const {becarios, becario} = this.state;
		var fecha = new Date();
		var formatoFecha=fecha.getFullYear()+'/'+fecha.getMonth()+'/'+fecha.getDate();
		var formatoHora=fecha.getHours()+':'+fecha.getMinutes();

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

		       <div className="table-responsive">
		        <Table responsive ="x1" striped bordered hover className="TablaCaracteristicas">
			        <thead>
			          <tr>
			            <th>Id Becario</th>
			            <th>Nombre(s)</th>
			            <th>Hora Entrada</th>
        				<th>Hora Salida</th>
			 
			          </tr>
			        </thead>

			        <tbody>
			           {becarios.map(this.renderBecario)}
			        </tbody>
			    </Table>

			</div>
			</div>
		);
	}
}

export default hrs;