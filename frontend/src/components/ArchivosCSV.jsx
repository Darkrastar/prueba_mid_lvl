import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class ArchivosCSV extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      personas: []
    }
  }

  async componentDidMount() {
    axios.get('http://localhost:3050/prueba1').
    then(res=>{
      this.setState({ datosCargados: true, personas: res.data })
    })
  }

  

  render() {

    const { datosCargados, personas } = this.state;

    if (!datosCargados) { return (<div>Cargando...</div>); }
    else {

      return (
        <div>
          <h1>Lista de clientes</h1>
          <table>
            <thead>
              <tr>
                <th>nombre</th>
                <th>apellido</th>
                <th>email</th>
                <th>genero</th>
                <th>ip</th>
              </tr>
            </thead>
            <tbody>
              {
                personas.map((empleado,i) =>
                  <tr key={i}>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.email}</td>
                    <td>{empleado.genero}</td>
                    <td>{empleado.ip}</td>
                  </tr>
                )
              }

            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default ArchivosCSV;