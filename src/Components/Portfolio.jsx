import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container portfolio text-center">
                <h2 className="text-center text-white">Mes Projets</h2>
                <div className="divider"></div>
                <div className="row">
                    <div className="col-lg-4 col-sm-12 mx-auto">
                        <div className="project">
                            <div className="project__img">
                                <a href="#"><img src="images/portfolio_project.png" alt="projet Portfolio" className="img-thumbnail" /></a>
                            </div>
                            <div className="project__text">
                                <h5>Portfolio</h5>
                                <div className="divider"></div>
                                <p>Portfolio v1</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 mx-auto">
                        <div className="project">
                            <div className="project__img">
                                <a href="#"><img src="images/projectfive.png" alt="projet projectfive" className="img-thumbnail" /></a>
                            </div>
                            <div className="project__text">
                                <h5>Project Five</h5>
                                <div className="divider"></div>
                                <p>Site vitrine Project Five Esport</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-sm-12 mx-auto">
                        <div className="project">
                            <div className="project__img">
                                <a href="#"><img src="images/run.png" alt="projet RunMap" className="img-thumbnail" /></a>
                            </div>
                            <div className="project__text">
                                <h5>RunMap</h5>
                                <div className="divider"></div>
                                <p>Application pour sportif</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;