import React from 'react';
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="all-contacts">
            <div className="contact">
                <h3>Dane kontaktowe:</h3>
                <p>Healthy Life <br/> ul.Kowalczyka 1 <br/> 00-955 Warszawa <br/></p>
                <a href="mailto:healthylife@gmail.com">healthylife@gmail.com</a>
            </div>

            <ContactForm/>

            </div>

    );
};

export default Contact;