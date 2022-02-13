import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="menu">
            <Link to="/"><img src="./img/Logo_offertide.png" alt="logo offertide" /></Link>
            <Link to="/Destinos">Destinos</Link>
            <Link to="/Ofertas">Ofertas</Link>
            <Link to="/Contato">Contato</Link>
        </nav>
    );
}
