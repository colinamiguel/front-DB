import React from 'react'
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <section>
      <div>
          <h1 id='welcome'>Bienvenido a VeneTrips</h1>
      </div>
      <div id='buttons1'>
      <Link className="nav-link" to='/clienthomepage'><button type="button" class="btn btn-outline-danger">Cliente</button></Link>
        <Link className="nav-link" to='/adminhomepage'><button type="button" class="btn btn-outline-danger">Administrador</button></Link> 
      </div>

    
      
    </section>
  )
}

export default home