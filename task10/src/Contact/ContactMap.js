import React from 'react';
import s from "./Contact.module.css";

const ContactMap = () => {
    return (
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.768013003515!2d23.950988515129914!3d49.868883236979435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ade719f86e487%3A0xfe527d0395b75de0!2sShevchenka%20St%2C%20360%2C%20L&#39;viv%2C%20L&#39;vivs&#39;ka%20oblast%2C%2079000!5e1!3m2!1sen!2sua!4v1614706319379!5m2!1sen!2sua" 
            allowfullscreen="" 
            loading="lazy" 
            title='map'
            className={s.contact__mapFrame}>
        </iframe>
    )
}

export default ContactMap
