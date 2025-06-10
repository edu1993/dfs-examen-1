const Controles = ({ onGol }) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => { onGol('local_gol') }}>⚽ Gol</button>
        <button onClick={() => { onGol('local_amarilla') }}>🟨 Amarilla</button>
        <button onClick={() => { onGol('local_roja') }}>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante_gol') }}>⚽ Gol</button>
        <button onClick={() => { onGol('visitante_amarilla') }}>🟨 Amarilla</button>
        <button onClick={() => { onGol('visitante_roja') }}>🟥 Roja</button>        
      </div>
    </div>
  )
}

export default Controles