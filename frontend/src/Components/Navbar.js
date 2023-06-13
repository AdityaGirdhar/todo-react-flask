import React from 'react'
import PropTypes from 'prop-types'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Router,
    Routes,
    BrowserRouter
  } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className='m-2' src='https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png' width="30px"></img>
            {props.title}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link active">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">About</Link>
              </li>
            </ul>
              { props.button ? <a className="btn btn-outline-success" href='https://github.com/AdityaGirdhar' target='_blank'>GitHub</a> : ""}
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.defaultProps = {
    title: "Default Title",
    button: true
}

Navbar.propTypes = {
    title: PropTypes.string,
    button: PropTypes.bool
}
