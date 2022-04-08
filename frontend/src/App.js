import React from 'react';
import ArchivosCSV from './components/ArchivosCSV'
import Papa from "papaparse";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class App extends React.Component {

  state = {
    data: []
  }

  sendHandler(data) {

    console.log(data.data.length)


    if (!data) {
      alert("Se debe cargar un archivo CSV para cargar")
      return
    }
    for (var i = 0; i < data.data.length-1; i++) {
      axios.post('http://localhost:3050/add', data.data[i])
        .then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        });
    }
  }

  render() {

    return (
      <div className="App">
        <header>Archivos CSV Identidad</header>

        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={(e) => {
            const files = e.target.files;
            console.log(files);
            if (files) {
              console.log(files[0]);
              Papa.parse(files[0], {
                header: true,
                complete: results => {
                  this.setState({ data: results });
                  console.log(results.data);
                  console.log(this.state.data.data);
                  this.sendHandler(results)
                }
              }
              )
            }
          }}
        />
        <div>
          <ArchivosCSV></ArchivosCSV>
        </div>
      </div>
    );
  }
}
export default App;
