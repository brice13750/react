import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact">
                <h2 className="text-center">Contactez-moi</h2>
                <div className="divider"></div>
                <form action="../#contact" method="POST">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label for="exampleInputPassword1">Nom/Prénom</label>
                                <input name="name" type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input name="mail" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Téléphone</label>
                                <input name="tel" type="text" className="form-control" id="tel" />
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12" >
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea name="message" className="form-control" id="message" rows="8"></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="contact__submit" name="mailform" id="submit" type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;