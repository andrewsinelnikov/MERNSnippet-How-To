# ReactSnippet: How To

---

## Create a Product CARD

---

### Description
The product card is designed to showcase e-commerce products. We'll create a single card

### Step 1
In order to display a list products we need a component **Products**. So let's make it `rafce` command

<img src="img/1.png" width="100%"><br/>

Add path for this component into **App.js**

<img src="img/2.png" width="100%"><br/>

### Step 2
Create **ProductItem** component to display a single product card

<img src="img/3.png" width="100%"><br/>

Add **ProductItem** component into **Products.js**

<img src="img/4.png" width="100%"><br/>

### Step 3
Give a html structure to your card in **ProductItem.js**

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
