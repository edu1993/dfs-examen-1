import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0,
    tarjetasAmarillasVisitante: 0,
    tarjetasAmarillasLocal: 0,
    tarjetasRojasVisitante: 0,
    tarjetasRojasLocal: 0 
  })

  const onGol = (equipo) => {
    if (equipo === 'visitante_gol') {
      setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 })
      return
    } 
    if (equipo === 'local_gol') {
      setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })
      return
    }
    if (equipo === 'visitante_amarilla') {
      setPartido({ ...partido, tarjetasAmarillasVisitante: partido.tarjetasAmarillasVisitante + 1 })
      return
    }
    if (equipo === 'local_amarilla') {
      setPartido({ ...partido, tarjetasAmarillasLocal: partido.tarjetasAmarillasLocal + 1 })
      return
    }
    if (equipo === 'visitante_roja') {
      setPartido({ ...partido, tarjetasRojasVisitante: partido.tarjetasRojasVisitante + 1 })
      return
    }
    if (equipo === 'local_roja') {
      setPartido({ ...partido, tarjetasRojasLocal: partido.tarjetasRojasLocal + 1 })
      return
    }
    if (equipo === 'reset') {
      setPartido({
        golesLocal: 0,
        golesVisitante: 0,
        tarjetasAmarillasVisitante: 0,
        tarjetasAmarillasLocal: 0,
        tarjetasRojasVisitante: 0,
        tarjetasRojasLocal: 0 
      })
      return
    }
  }

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} />
      <Display partido={partido} />
    </div>
  )
}

export default App
