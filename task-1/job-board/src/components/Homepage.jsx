import React from 'react'
import Navbar from './Navbar'
import logo from "../images/job.jpg"
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className='d-flex justify-content-between bg-primary'>
      
      <div className='border border-primary bg-primary text-light' style={{padding:'20vh'}}>
        <h4 className='fs-2 fw-semibold'>4536+ Jobs listed</h4>
        <h2 className='fs-1 fw-semibold font-monospace'>Find your Dream Job</h2>
        <p className='fs-6'>We provide online instant cash loans with quick approval that suit your term length</p>
        <button className='btn btn-success'>Upload Your Resume</button>
      </div>
      <div className='w-50 p-5'>
        <img src={logo} alt="job" width={'100%'} />
      </div>
      </div>
      <div className='d-flex justify-content-between p-5'> 
        <input type="text" placeholder='Search Keyword' class="form-control mx-2"/>
        <input type="text" placeholder='Location' class="form-control mx-2" />
        <input type="text" placeholder='Category' class="form-control mx-2" />
        <button className='btn btn-success p-1 w-50 mx-2'>Find Job</button>
      </div>
    </div>
  )
}

export default Homepage
