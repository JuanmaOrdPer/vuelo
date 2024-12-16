import { useEffect, useState } from 'react';
import React  from 'react'
import PanelVuelo from './PanelVuelo.js';

function Vuelos() {

    const [vuelos, setVuelos] = useState([]);
    const [vueloSeleccionado, setVueloSeleccionado]= useState([]);


  useEffect(() => {
    const fetchVuelos = async () =>{
      const response = await fetch ('./vuelos.json') 
      const data = await response.json();
      data.map((destination)=> destination.flights.map ((vuelo)=>(vuelos["plazas disponibles"]= vuelo.seats), (vuelos["plazas ocupadas"]= 0), (vuelos["destino"]= destination.destination)))
      setVuelos(data);
    };
    fetchVuelos();
  }, []);

  const incrementarPlaza = (id) => {
    let aux = vuelos;
    let i=0
    for(i=0; i<aux.length;i++){
        aux[i].flights.map((vuelos) =>{
        if (vuelos["number"] === id){
        if(vuelos["plazas ocupadas"] < vuelos.seats)
            vuelos["plazas ocupadas"]= vuelos["plazas ocupadas"]+1;
            vuelos["plazas disponibles"]= vuelos["plazas disponibles"]-1;
            vueloSeleccionado(vuelos);
        }});
  }
setVuelos(aux);
  }


  return (
    <>
        <h1>Vuelos</h1>
        <ul>
            {vuelos.map((destino)=> 
        <ul>{destino.destination} {destino.flights.map((vuelo) => 
        <li>{vuelo.date} - {vuelo.number}
        <button onClick={()=>setVueloSeleccionado(vuelo)}>Seleccionar</button>
        </li>)}
        </ul>
        )} 
        </ul>
        {vueloSeleccionado!=undefined && Object.keys().length==0 &&
        <PanelVuelo>{vueloSeleccionado}</PanelVuelo>}
      
    </>
  )
}

export default Vuelos;
