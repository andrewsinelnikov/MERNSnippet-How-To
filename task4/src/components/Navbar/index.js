import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDraftingCompass } from 'react-icons/fa';
import Burger from './Burger';
import NavItems from './NavItems';

import s from "./Navbar.module.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className={s.navbar}>
            <Link to='/'>
                <h1 className={s.nav__logo}>
                    <span className='text-primary'><FaDraftingCompass /></span>{" "}
                    Modern<span className='text-primary'>Design</span>
                </h1>
            </Link>
            <div className={s.nav__right}>
                <Burger open={open} setOpen={setOpen}/>
                <NavItems  open={open} setOpen={setOpen}/>
            </div>
        </nav>
    )
}

export default Navbar