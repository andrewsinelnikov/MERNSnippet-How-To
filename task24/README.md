# MERNSnippet: How To
---
## Write Reducers

> [**Reducer**](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers) is a function that returns a new state based on the current `state` and [`action`](https://github.com/andrewsinelnikov/MERNSnippet-How-To/blob/main/task23/README.md) arguments<br />

### Description
An app shoud has only one reducer function. That root reducer we pass to the [`store`](https://github.com/andrewsinelnikov/MERNSnippet-How-To/blob/main/task22/README.md).<br /> 
This tutorial will teach you how to define reducer <br /> 

### Step 1
Create a **reducers** folder in **client/src** folder and a **cart.js** out there<br /> 
  ![1](img/1.png) <br />

### Step 2
Import type constants of your actions<br /> 
  ![2](img/2.png) <br />

Each action has a `type` field. It's a string that describes the action. For convenience, create a file **types.js** where we will place type constants for all our actions<br/>
