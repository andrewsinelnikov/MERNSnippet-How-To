import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import s from "./Navbar.module.css";

const Burger = ({ open, setOpen }) => {
    return (
        <div open={open} onClick={() => setOpen(!open)} className={s.nav__burger}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
    )
}

export default Burger
