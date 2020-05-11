import React from 'react';

const Footer = () => {
    return (
        <div>
            <section id="footer">
                <div className="container">
                    <div className="social__media text-center">
                        <a className="link__social__media text-white" href="https://www.facebook.com/OB-WEB-103200171353583/" target="blank"><i className="fab fa-facebook-f fa-lg"></i></a>
                        <a className="link__social__media text-white" href="#"><i className="fab fa-linkedin-in fa-lg"></i></a>
                        <a className="link__social__media text-white" href="#"><i className="fab fa-twitter fa-lg"></i></a>
                        <p className="my-3">© 2020 OB WEB développeur web</p>
                    </div>
                </div>
            </section>
            <div className="arrow__up">
                <a href="#home"><i className="far fa-arrow-alt-circle-up fa-4x"></i></a>
            </div>
        </div>
    );
}

export default Footer;