# ReactSnippet: How To

---

## Render Product LIST

---

### Description
A product list is needed to give an overview of a company’s goods.
Easy to build it by listing items like this way
````HTML
const Products = () => {
    return (
        <div className={s.products}>
            <ProductItem img='../../img/E_1.jpg' title='Navarra Ash' price={7}/>
            <ProductItem img='../../img/E_2.jpg' title='Sand Orleans Oak' price={10}/>
            <ProductItem img='../../img/E_3.jpg' title='Locarno Cherry' price={8}/>
            <ProductItem img='../../img/E_4.jpg' title='Black Sparkle Grain' price={15}/>
            <ProductItem img='../../img/E_5.jpg' title='Yellow' price={7}/>
        </div>
    )
}
````

### Step 1
In order to display a list products we need a component **Products**. So let's make it `rafce` command

<img src="img/1.png" width="100%"><br/>

Add path for this component into **App.js**

<img src="img/2.png" width="100%"><br/>
