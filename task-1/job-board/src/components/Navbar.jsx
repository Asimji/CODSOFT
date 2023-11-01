import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-between shadow-lg text-light" data-bs-theme="dark">
    <div className="d-flex justify-content-center align-items-center">
      <div className="mx-2">
        <input type="text"  height={'20%'} placeholder='search' className='form-control' />
      </div>
      <div className="mx-2">
        <h4>Job Board</h4>
        <p>Find your dream job</p>
      </div>
    </div>
    <div>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        
          <Link className="nav-link link-offset-2 link-underline link-underline-opacity-0">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link-offset-2 link-underline link-underline-opacity-0">Job</Link>
        </li>
        <li className="nav-item">
          <select class="form-select" aria-label="Default select example">
            <option selected>Pages</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </li>
        <li className="nav-item">
          <select class="form-select" aria-label="Default select example">
            <option selected>Blogs</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </li>
        <li className="nav-item">
          <Link className="nav-link link-offset-2 link-underline link-underline-opacity-0">Contact</Link>
        </li>
      </ul>
    </div>

    </div>
    <div>
      <Link className="mx-2 link-offset-2 link-underline link-underline-opacity-0">Login</Link>
      <button className="btn btn-success ml-10 mx-2">Post A Job</button>
    </div>
  </nav>
  
  )
}

export default Navbar
