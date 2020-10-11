import React from 'react';

function Nav() {
    return(
        <header>
            <nav>
                <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Vanessa Lane</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Nav;