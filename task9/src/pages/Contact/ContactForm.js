import React from 'react';
import s from "./Contact.module.css";

const ContactForm = () => {
    return (
        <div className={s.contact__formSection}>
            <p>Please use the form below to contact us</p>
            <form>
                <div className={s.contact__formGroup}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Enter Name'
                    />
                </div>
                <div className={s.contact__formGroup}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter Email'
                    />
                </div>
                <div className={s.contact__formGroup}>
                    <label htmlFor='phone'>Phone</label>
                    <input
                        type='text'
                        name='phone'
                        id='phone'
                        placeholder='Enter Phone Number'
                    />
                </div>
                <div className={s.contact__formGroup}>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        name='message'
                        id='message'
                        placeholder='Enter Message'></textarea>
                </div>
                <input type='submit' value='Send your message' className={s.contact__formBtn}/>
            </form>
        </div>
    )
}

export default ContactForm
