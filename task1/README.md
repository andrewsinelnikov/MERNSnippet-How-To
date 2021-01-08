# ReactSnippet: How To

---

## Get Top Of The Page On Every Transition

---

### Description
It is necessary to get the top of the page when navigating from one page to another of the current website.
The image below shows an example: the user is on page PRODUCTS and wants to go to page ABOUT US

<img src="img/1.png" width="100%">
<br/>

It is likely that the new page will be in the same position as the previous one (at the bottom if the previous one was at the bottom)

<br/>

<img src="img/2.png" width="100%"><br/>

Such features is not friendly for user interface, especially when the page content is very long. Most likely, the user wants to get to the top of the page, as shown in the illustration below

<br/>

<img src="img/3.png" width="100%">

### How to fix this issue?

Solutions suggested with [React Router](https://reactrouter.com/web/guides/scroll-restoration) <br/>
Code files [here](src) <br/>

#### Step 1.
You need to create a component that fixes this issue
