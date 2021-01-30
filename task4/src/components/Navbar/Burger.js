import React, {useEffect} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import s from "./Navbar.module.css";

const Burger = ({ open, setOpen }) => {
    useEffect(() => {
        if (open) {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '15px';
        }
        return () => {
          document.body.style.overflow = 'unset';
          document.body.style.paddingRight = '0px';
        };
      }, [open]);

    return (
        <div open={open} onClick={() => setOpen(!open)} className={s.nav__burger}>
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
    )
}

export default Burger