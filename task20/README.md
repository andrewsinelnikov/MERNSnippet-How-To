# MERNSnippet: How To
---
## Define Routes (part 2)

### Description
In [the last article](https://github.com/andrewsinelnikov/ReactSnippet-How-To/tree/main/task19), we learned how to define routes, in particular how to get data. But it is also important for us to be able to add new data, update or delete it. This article will teach you how to do it <br />

### Step 1
Add new data. In our project, we want to be able to add a new product. Let's create a function to manage it in **products.js** from **controllers** folder<br/>
  ![1](img/1.png) <br />  
Define our new product according to **Product model**. We can get the values of each field from the reques object `req.body`<br />
  ![2](img/2.png) <br />  
