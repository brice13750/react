import React from 'react';

const Service = () => {
    return (
        <section id="services">
            <div className="container service">
                <h2 className="text-center">Mes Services</h2>
                <div className="divider"></div>
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <div className="service__item">
                            <div className="row">
                                <div className="col-9 text-center">
                                    <h6>GESTION DE PROJET WEB</h6>
                                    <p>Site vitrine, e-commerce, corporate, application mobile</p>
                                </div>
                                <div className="col-3 text-center">
                                    <div className="icon">
                                        <span className="service__item_icon"><i className="far fa-address-book fa-2x"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service__item">
                            <div className="row">
                                <div className="col-9 text-center">
                                    <h6>INTÉGRATION WEB</h6>
                                    <p>Des intégrations HTML/CSS sur mesure en respectant les standards du web</p>
                                </div>
                                <div className="col-3 text-center">
                                    <div className="icon">
                                        <span className="service__item_icon"><i className="fab fa-html5 fa-2x"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service__item">
                            <div className="row">
                                <div className="col-9 text-center">
                                    <h6>DÉVELOPPEMENT SPÉCIFIQUES</h6>
                                    <p>Application adapté à vos besoins coder sur mesure</p>
                                </div>
                                <div className="col-3 text-center">
                                    <div className="icon">
                                        <span className="service__item_icon"><i className="fas fa-code fa-2x"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <img className="services__logo" src="images/logoVertical.png" alt="logo obweb" />
                    </div>

                    <div className="col-md-5 col-sm-12">
                        <div className="service__item">
                            <div className="row">
                                <div className="col-9 text-center">
                                    <h6>RÉFÉRENCEMENT NATUREL</h6>
                                    <p>Des pages propres pour un référencement optimal</p>
                                </div>
                                <div className="col-3 text-center item__icon">
                                    <div className="icon">
                                        <span className="service__item_icon"><i className="fas fa-search fa-2x"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service__item">
                            <div className="row">
                                <div className="col-9 text-center">
                                    <h6>INTERFACE ADMINISTRATION</h6>
                                    <p>Outils spécifique au bon fonctionnement de votre entreprise</p>
                                </div>
                                <div className="col-3 text-center item__icon">
                                    <div className="icon">
                                        <span className="service__item_icon"><i className="fas fa-users-cog fa-2x"></i></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="service__item">
                            <div className="row">
                                <div className="col-9 text-center">
                                    <h6>RESPONSIVE DESIGN</h6>
                                    <p>Compatible tous supports ordinateur, tablette & mobile</p>
                                </div>
                                <div className="col-3 text-center item__icon">
                                    <div className="icon">
                                        <span className="service__item_icon"><i className="fas fa-mobile-alt fa-2x"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;