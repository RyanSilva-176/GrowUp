import React from 'react';

import "./style.css"

function Navbar() {
    return (
        <header className="header">
            <a className="logo" href="">RiseUp</a>
            <nav className="nav">
            <button className="btn-mobile"
                area-label="Abrir Menu"
                aria-haspopup="true"
                aria-controls="menu"
                aria-expanded="false"
            >
                <span className="hamburguer"></span>
            </button>
            <ul className="menu" role="menu">
                <li><a href="/">Comprar Passagem</a></li>
                <li><a href="/">Checkin</a></li>
                <li><a href="/">Status de Voo</a></li>
                <li><a href="/">Atendimento</a></li>
                <li><a href="/">Informações</a></li>
                <li><a class="login" href="/">Login</a></li>
                <li>
                <a class="bell" href="/"><i class="bi bi-bell-fill"></i></a>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Navbar;