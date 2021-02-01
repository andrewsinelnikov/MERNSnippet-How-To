import React from 'react';
import { Link } from 'react-router-dom';

import s from "./Navbar.module.css";

const NavItems = ({ open, setOpen }) => {
    const navData = [{id: 1, to: '/about', item: 'about us'},
                     {id: 2, to: '/products', item: 'products'},
                     {id: 3, to: '/contact', item: 'contact us'}];
    
    return (
        <ul className={open ? s.nav__active : s.nav__list}>
          { navData.map((element) => 
            <li key={element.id} onClick={() => setOpen(!open)}>
              <Link to={element.to} className={s.nav__link}>
                {element.item}
              </Link>
          </li>
          )}

          <li onClick={() => setOpen(!open)}>
            <Link to='/cart'  className={s.nav__cart}>
              my cart
            </Link>
          </li>
        </ul>
    )
}

export default NavItems