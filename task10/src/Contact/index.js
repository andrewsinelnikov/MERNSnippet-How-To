import React from 'react';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

import s from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={s.contact}>
            <ContactForm className={s.contact__form}/>
            <ContactMap className={s.contact__map}/>
        </div>
    )
}

export default Contact
