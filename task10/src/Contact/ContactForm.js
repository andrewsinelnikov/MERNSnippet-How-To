import React, { useState } from 'react';
import s from "./Contact.module.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const {name, email, phone, message} = formData;

    const changeHandler = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const submitHandler = e => {
        e.preventDefault();
        console.log(formData)
        setFormData({name: '', email: '', phone: '', message: ''});
      };

    return (
        <div className={s.contact__formSection}>
            <p>Please use the form below to contact us</p>
            <form onSubmit={e => submitHandler(e)}>
                <div className={s.contact__formGroup}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        placeholder='Enter Name'
                        onChange={e => changeHandler(e)}
                    />
                </div>
                <div className={s.contact__formGroup}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        placeholder='Enter Email'
                        onChange={e => changeHandler(e)}
                    />
                </div>
                <div className={s.contact__formGroup}>
                    <label htmlFor='phone'>Phone</label>
                    <input
                        type='text'
                        name='phone'
                        id='phone'
                        value={phone}
                        placeholder='Enter Phone Number'
                        onChange={e => changeHandler(e)}
                    />
                </div>
                <div className={s.contact__formGroup}>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        name='message'
                        id='message'
                        value={message}
                        placeholder='Enter Message'
                        onChange={e => changeHandler(e)}></textarea>
                </div>
                <input type='submit' value='Send your message' className={s.contact__formBtn}/>
            </form>
        </div>
    )
}

export default ContactForm
