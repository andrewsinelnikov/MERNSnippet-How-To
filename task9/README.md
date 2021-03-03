# ReactSnippet: How To
---

## Make a Contact FORM with a MAP
---

### Description
Forms play an important role in user feedback. How to create a form with React? How do I add a map to visualize contact information?
Our goal to get a page, as shown in the illustration below

<img src="img/1.png" width="100%"><br/>

### Step 1
Add **Contact** folder for the required components in **pages** folder and create main component for this page
<img src="img/2.png" width="100%"><br/>
Add a route for the page
<img src="img/3.png" width="100%"><br/>
And some style for the page in **Contact.module.css**
<img src="img/4.png" width="100%"><br/>

### Step 2 (Map section)
* Create component **ContactMap** to show map
  <img src="img/5.png" width="100%"><br/>
  and import into **Contact** component
  <img src="img/6.png" width="100%"><br/>

* Choose or enter needed location on [Google Maps](https://maps.google.com/)
  <img src="img/7.png" width="100%"><br/>
  Click **Share or embed map** on **Menu** and from **Embed a map** tab copy html code<br />
  <img src="img/8.png" width="100%"><br/>
  Paste the code into **ContactMap.js**<br/>
  <img src="img/9.png" width="100%"><br/>
  Style the frame<br/>
  <img src="img/10.png" width="100%"><br/>

### Step 3 (Form section)
* Create component **ContactForm** and import into **Contact** <br/>
  <img src="img/11.png" width="100%"><br/>
  <img src="img/12.png" width="100%"><br/>
  
