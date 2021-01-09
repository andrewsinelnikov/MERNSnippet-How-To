# ReactSnippet: How To

---

## Stick A Footer To Bottom Of The Webpage

---

### Description
Making a footer fixed at the bottom of the page prevents ugly broken design. Otherwise you will end up with unnecessary white space as shown below 👇

<img src="img/1.png" width="100%">

<br/>

How to get rid of this? By improving the style, you will get 👍 

<br/>

<img src="img/2.png" width="100%"><br/>

### How to do it?

Solution is suggested with [flexbox](https://www.w3schools.com/css/css3_flexbox.asp) <br/>

#### Step 1
Make a project structure in **App.js**

```JavaScript
import React from 'react'
// your inports

const App = () => {
  return (
    <Fragment>
      <div className='content'>
        // your components
      </div>
      
      <Footer className='footer'/>
    </Fragment>
  )
}

export default App
```
