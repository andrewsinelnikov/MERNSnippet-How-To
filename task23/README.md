# MERNSnippet: How To
---
## Design Actions

> [**Actions**](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions) are plain JavaScript objects that describe what happens in the application <br />

### Description
This tutorial will teach you how to design action objects <br /> 

### Step 1
Create a **actions** folder in **client/src** folder. <br /> 
Each action has a `type` field. It's a string that describes the action. For convenience, create a file **types.js** where we will place them for all our actions<br/>
  ![1](img/1.png) <br />  

### Step 2
- Import a **createStore** function<br/>
  ```Javascript
    import { createStore } from 'redux'
  ```