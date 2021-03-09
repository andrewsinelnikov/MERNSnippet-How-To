import React from 'react';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import Title from '../../components/Title';

import s from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={s.contact}>
            <Title info='contact' highlighted='us'/>
            <div className={s.contact__info}>
                <ContactForm className={s.contact__form}/>
                <ContactMap className={s.contact__map}/>
            </div>
        </div>
    )
}

export default Contact
