import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/ClientNavbar';

const home = () => {
  return (
    <section>
      <Navbar />
      <div>
          <h1 id='welcome'>Bienvenido a VeneTrips</h1>
      </div>
      
    </section>
  )
}

export default home