# MERNSnippet: How To
---
## Insert Data into MongoDB

### Description
This guide will teach you how to fill up [MongoDB](https://www.mongodb.com/) database with data

### Step 1
- Add **data** folder into your backend part, create **products.js** file there<br/>
  ![1](img/1.png) <br />
- Create an array of data objects <br />
  ![2](img/2.png) <br />

### Step 2
Import your data into MongoDB<br/>
- Add **dataScript.js** file into **server** folder. Import **.env**, **db**, **products** and **Products** files. <br/>
  ![3](img/3.png) <br />
- Connect MongoDB <br/>
  ![4](img/4.png) <br />
- Create a function to import your data. And then, first of all, run **deleteMany()** function to make sure your **Product** collection is empty <br/>
  ![5](img/5.png) <br />
- Run **insertMany()** function to insert your data into **Product** collection. And give a message if evreything went ok<br/>
  ![6](img/6.png) <br />
- Since the job is done and the Node.js event loop no longer having anywork to perform, add [`process.exit()`](https://nodejs.org/api/process.html#process_event_exit) method<br/>
  ![7](img/7.png) <br />
- Handle the situation when something went wrong. `process.exit()` means there was an uncaught exception<br/>
  ![8](img/8.png) <br />
