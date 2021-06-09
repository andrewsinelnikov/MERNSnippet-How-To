# MERNSnippet: How To
---
## Design Actions

> [**Actions**](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions) are plain JavaScript objects that describe what happens in the application <br />

### Description
This tutorial will teach you how to design action objects <br /> 

### Step 1
Create a **actions** folder in **client/src** folder. <br /> 
Each action has a `type` field. It's a string that describes the action. For convenience, create a file **types.js** where we will place type constants for all our actions<br/>
  ![1](img/1.png) <br />  
Add some constants for our cart <br>  
  ![2](img/2.png) <br />  
An action object can have a field `payload` that contains additional data for the event.<br />
For example, if we want to add a product to the cart, then we need to pass information about this product as the value of the `payload` field. <br />
Thus, our action may take the form <br />
  ```Javascript
    {
      type: ADD_TO_CART,
      payload: { product, title, info, price, company, img, count, total }
    }
  ```

### Step 2
- Import a **createStore** function<br/>
  ```Javascript
    import { createStore } from 'redux'
  ```
