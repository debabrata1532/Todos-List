import React from 'react';
import './css/header.css';
import PropTypes from 'prop-types';
// import logo from '../logo.svg';
import {
 Link
 
} from "react-router-dom";


export default function Header(props) {
  return (


    <>

      <div className="top-header">
        <div className="row">
          <div className="col-lg-6">
            <div className="logo">
              <img src={props.logo} alt="logo" width="500px" height="100px" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact">
              <div className="mobile"><fa className="fa fa-phone"></fa>8209047587</div>
              <div className="email"><fa className="fa fa-envelope"></fa>deyroydebabrata@gmail.com</div>



            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
              </li>
             
            </ul>
            <form className="d-flex ">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* <button className="btn-success">success</button> */}
    </>

  )
}

Header.defaultProps = {
  game: "Hello i am defaul prop"
}

Header.propTypes = {
  title: PropTypes.string
}