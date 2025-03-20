import React from 'react'
import './error.css'

function Error() {
  return (
   <section className="container-fluid">
    <div className="row error">
        <div className="col-md-4 m-auto">
            <div className="card p-3">
                <img src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg" alt="not found" className='w-100' />
                <a href="/" className="btn btn-dark"><i class="bi bi-arrow-left"></i> Return to Home</a>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Error