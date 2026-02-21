import React from "react";

const Header = () => (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <img 
                src="/rotarylogo1.png"   
                    alt="Rotary Logo" 
                    width="225" 
                    height="70" 
                className="d-inline-block align-text-top"
                />
            
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button type="button" className="btn btn-underline-hover">Inicio</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-underline-hover">Quienes somos</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-underline-hover">Noticias - Notas</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-underline-hover">Fallos</button>
                    </li>
                    
                </ul>
                <button className="btn-outline-custom" type="submit">Contactanos</button>
            </div>
        </div>
    </nav>
);

export default Header;