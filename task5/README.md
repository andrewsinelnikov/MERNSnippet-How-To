# ReactSnippet: How To

---

## Prevent SCROLL When The Nav Menu is Open

---

### Description
When the navigation menu is open, the user does not need to scroll the web page. Scrolling through the page on some websites makes the user interface ugly. So it's better to disable scrolling

Instead of this
<img src="img/1.png" width="100%"><br/>

We want to have this one
<img src="img/2.png" width="100%"><br/>

Since our menu is handled by **Burger.js** (see [Build A Responsive NAVBAR in React](https://github.com/andrewsinelnikov/ReactSnippet-How-To/edit/main/task4/README.md)) we will add a solution there.

### Step 1
To perform side effect (in this case, hiding scroll) we will use us [the Effect Hook](https://reactjs.org/docs/hooks-effect.html) - *useEffect()*
````Javascript
import React, {useEffect} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import s from "./Navbar.module.css";

const Burger = ({ open, setOpen }) => {
    useEffect(() => {
        
      }, []);

    return (
    
// code after
````

### Step 2
Add condition for the effect (we want this effect only when our nav menu is open)
````Javascript
// your imports

const Burger = ({ open, setOpen }) => {
    useEffect(() => {
        if (open) {
        
        }
      }, [open]);

    return (
    
// code after
````

### Step 3
Add style to hide scroll (`overflow='hidden'` and some padding to fill scrollbar place)
````Javascript
// your imports

const Burger = ({ open, setOpen }) => {
    useEffect(() => {
        if (open) {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '15px';
        }
      }, [open]);

    return (
    
// code after
````

### Step 4
Clean up effect from the previous render before running the effects next time. We return a function that sets `overflow` to **defaul** value with `[unset](https://developer.mozilla.org/en-US/docs/Web/CSS/unset)` (displays scroll)
````Javascript
// your imports

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
    
// code after
````
