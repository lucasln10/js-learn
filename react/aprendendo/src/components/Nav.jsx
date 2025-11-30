import React from 'react';
import './Nav.css';

function Nav(props) {

    return (
        <nav>
            <div className={`${props.open ? "hidden" : "nav-closed"}`}>
                <div className="hamburger" onClick={props.onToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={`${props.open ? "nav-open" : "hidden"}`}>
                <span className={`${props.open ? "" : "hidden"}`} onClick={props.onToggle}>Voltar</span>
                <h1>Meu Site</h1>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;