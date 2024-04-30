import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (

    <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn1" type="submit">Search</button>
          </form>

          <button className='Dark-Mode-btn' style={{backgroundColor: props.mode==='light'?'lightgray':'light gtay',color: props.mode==='light'?'yellow':'white'}} onClick={props.themeMode}>
          <i className="bi bi-brightness-high-fill h3"></i>
          </button>

          <Link className="btn-cart" to="/login" role="button"><i className="bi bi-person-circle h2"></i></Link>

        </div>
      </div>
    </nav>
  );
};


