import React, { useState } from 'react'
import './home.css'
import axios from 'axios';
import AllUsers from './AllUsers';

function Home() {
    
  return (
    <section className="container-fluid bg-light p-3 p-md-5">
        <h1 className='fs-4'>Dashboard</h1>
        <hr />
      <AllUsers/>
    </section>
  )
}

export default Home