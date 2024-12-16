import React from 'react'

function PanelVuelo(item, handlerIncrementar) {


  return (
    <div>
        <h3>{item.destino}</h3>
        <ul>
            <li>Date: {item.date}</li>
            <li>Plazas: {item.seats}</li>
            <li>Plazas disponibles: {item("plazas disponibles")}</li>
            <li>Plazas ocupadas: {item("plazas ocupadas")}</li>
            <button onClick={()=>handlerIncrementar(item.number)}Incrementar></button>
        </ul>
      
    </div>
  )
}

export default PanelVuelo;
