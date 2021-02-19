# ReactSnippet: How To

---

## Render Product LIST

---

### Description
A product list is needed to give an overview of a company’s goods.<br />
Easy to build it by listing items like this
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
What if the list were hundreds, thousands, or even millions of items? Then the list will be difficult to maintain and update. Reducing the amount of code is considered best programming practice. Therefore, we will save the list data separately, and allow the component that displays the list to efficiently do its work (in this manual, we will store product information locally)

### Step 1
Save product information in a separate file **Products -> data.js**

<img src="img/1.png" width="100%"><br/>

Add path for this component into **App.js**

<img src="img/2.png" width="100%"><br/>
