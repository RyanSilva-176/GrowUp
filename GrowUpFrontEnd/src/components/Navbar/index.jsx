import React from 'react';

import Hamburguer from '../Hamburguer';

import "./style.css"

function Navbar() {
    return (
        <header className="header">
            <a className="logo" href="">RiseUp</a>
            <nav className="nav">
            <Hamburguer />
            <ul className="menu" role="menu">
                <li><a href="/">Comprar Passagem</a></li>
                <li><a href="/">Checkin</a></li>
                <li><a href="/">Status de Voo</a></li>
                <li><a href="/">Atendimento</a></li>
                <li><a href="/">Informações</a></li>
                <li><a className="login" href="/">Login</a></li>
                <li>
                <a className="bell" href="/"><i className="bi bi-bell-fill"></i></a>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Navbar;