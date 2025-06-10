const Display = ({ partido }) => {
  return (
    <div className="display">    
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Local</th>
            <th>Visitante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">⚽</th>
            <td>{partido.golesLocal}</td>
            <td>{partido.golesVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟨</th>
            <td>{partido.tarjetasAmarillasLocal}</td>
            <td>{partido.tarjetasAmarillasVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟥</th>
            <td>{partido.tarjetasRojasLocal}</td>
            <td>{partido.tarjetasRojasVisitante}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Display