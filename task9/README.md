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

### Step 2 (Map display)
* Create component **ContactMap** to show map
  <img src="img/4.png" width="100%"><br/>
  and import into **Contact** component
  <img src="img/5.png" width="100%"><br/>

* Install @react-google-maps/api to your app with command
  `npm i -S @react-google-maps/api`
  and import needed elements from that library
  <img src="img/6.png" width="100%"><br/>

* Style your map and give required position
  <img src="img/7.png" width="100%"><br/>
