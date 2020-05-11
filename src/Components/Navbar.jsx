import React from 'react';
const Navbar = () => {
    return (
        <header id="home">
            <nav className="navbar navbar-expand-lg fixed-top navbar-light main__nav">
                <div className="container">
                    <a className="navbar-brand text-white" href="#home"><img className="logo" src="/images/logo1.png" alt="logo OBWEB" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link link__nav" href="#">Accueil</a>
                            </li>
                            <li className="nav-item item">
                                <a className="nav-link" href="#skills">Compétences</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id="about">
                <div className="container-fluid">
                </div>
            </section>
        </header>
    );
}

export default Navbar;