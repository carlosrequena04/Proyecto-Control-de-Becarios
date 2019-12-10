import React,{Component} from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import {Image,Navbar,Form,Col,Button,Row,Container,ButtonGroup,Nav,Table,Const} from 'react-bootstrap';


class mBecario extends Component{

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
        <td> <span className = "table-remove"><Button id={idBecario} type="submit"
          className="btn btn-danger btn-rounded btn-sm my-0" onClick={e => this.deleteBecarios(idBecario)}>Eliminar</Button></span></td>

    </tr>

    deleteBecarios=(idBecario)=>{
      const {becario}=this.state;
      fetch(`/becarios/delete?idBecario=${idBecario}`)
      .then(response4 => response4.json())
      .then(response4 => response4.data)
      .catch(err => console.error(err))

      console.log("Se eliminó exitósamente")
      alert("Se eliminó exitósamente")

      this.getBecario();
    }


	render(){
		const {becarios, becario} = this.state;
		return(

	<div>
			<div className="fondoMenu">
				

				<div className= "barra">

            <div >
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

            <div className="table-responsive">
            <Table responsive ="x1" striped bordered hover className="TablaCaracteristicas">
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
                  <th>Eliminar</th>
                </tr>
              </thead>

              <tbody>
                 {becarios.map(this.renderBecario)}
              </tbody>
          </Table>
            </div>
			          
			    </div>
			 </div>

			

			</div>
			</div>

		);
	}
}

export default mBecario;