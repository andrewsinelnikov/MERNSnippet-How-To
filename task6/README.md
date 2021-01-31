# ReactSnippet: How To

---

## Close Menu When Clicking OUTSIDE

---

### Description
Sometimes a user, having opened the navigation menu, wants to stay on the current web page. It is necessary to provide for the possibility of closing the menu when clicking outside its borders

<img src="img/1.png" width="100%"><br/>

### Step 1
To detect the sidebar menu we will use **useRef()** (see [useRef Hook](https://reactjs.org/docs/hooks-reference.html#useref)) in **Navbar.js**. We can have access to needed element by creating a React reference and passing it to the element itself
````Javascript
import React, { useState, useRef } from 'react';
// your imports

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    return (
        <nav className={s.navbar}>
            <Link to='/'>
                // code for logo
            </Link>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen}/>
                <NavItems  open={open} setOpen={setOpen}/>
            </div>
        </nav>
    
// code after
````

### Step 2
To handle our action (close menu when clicking outside) we create our own hook `useOnClickOutside()` (add **hooks.js** file to **Navbar** folder), where `ref` - the reference to needed elements, `handler` - action to do. For performing it we will use us [the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

````Javascript
import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
            return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};
````

### Step 3
Check if the current reference still exists (`ref.current` - gives us an access to the element we have the reference for, `ref.current.contains()` - indicates whether a node is a descendant of a given node, one of its direct children, one of the children's direct children, and so on).
If the click was outside the sidebsr menu we add a global click listener on the body element

````Javascript
import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
            return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
    }, [ref, handler]);
};
````

### Step 4
clean the listener when the element gets unmounted

````Javascript
import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        // code before
        
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};
````

### Step 5
Add created hook to **Navbar** and pass the action you need (in this case, in order to close menu set **open** value of the state to `false`)

````Javascript
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
// your imports

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    return (
        <nav className={s.navbar}>
            <Link to='/'>
                // code for logo
            </Link>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen}/>
                <NavItems  open={open} setOpen={setOpen}/>
            </div>
        </nav>
    
// code after
````
