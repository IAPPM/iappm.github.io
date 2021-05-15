import React from 'react'
import logo from '../img/logo.png'

export default function header(){
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
      }
    return(
        //Navbar icone do app
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand paddingMenu" >
                <a className="navbar-item" href="/#" >
                    <img src={logo} alt="Logo" width="125" height="28" />                    
                </a>

            {/* Responsivo */}
                <button className="navbar-burger button is-white" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleBurgerMenu} >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            {/* Menu do app */}
            <div className="navbar-menu" id="navbarBasicExample">
                <div className="navbar-start paddingMenu">
                    <a href="#home" className="navbar-item">INÍCIO</a>                
                    <a href="#metodologia" className="navbar-item">METODOLOGIA</a>
                    <a href="#contato" className="navbar-item">CONTATO</a>
                </div> 
            </div>
        </nav>
    )
}