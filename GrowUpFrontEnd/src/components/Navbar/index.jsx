import React from 'react';

import Hamburguer from '../Hamburguer';

import "./style.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h1>RiseUp</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Comprar Passagem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Checkin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Status de Voo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Atendimento</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Informações</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary" role='button' href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;