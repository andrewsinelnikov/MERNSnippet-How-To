# MERNSnippet: How To
---
## Define Routes (Express)

### Description
This guide will teach you how to create routes in your App <br />
> [Route](http://expressjs.com/en/starter/basic-routing.html) is a description of the application's response to client requests <br />

### Step 1
Set a structure in your backend part. Add the `routes` folder, and in it the `api` folder and create the **products.js** file<br/>
  ![1](img/1.png) <br />  
### Step 2   
Import `express` and create a router object <br />
  ![2](img/2.png) <br />
### Step 3
Describe your route <br />
  ![3](img/3.png) <br />
### Step 4
Call a method on your router object. Method corresponds to an HTTP methods (GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, CONNECT, PATCH) in lower case<br />
```JavaScript
  router.get(/*parameters*/);
```
**GET** retrieves data<br />
**POST** sends data to the server <br />
**PUT** creates or replaces data <br />
**DELETE** deletes data<br />
### Step 5
Set route path. Path is the URL requested by the client. It can be<br />
1.  **strings**
  - '/' path will match requests to the root route <br />
  - '/contact' path will match requests to `/contact` <br />
2.  **string patterns**
  - '/' path will match requests to the root route <br />
  - '/contact' path will match requests to `/contact` <br />
3.  **regular expressions**
  - '/' path will match requests to the root route <br />
  - '/contact' path will match requests to `/contact` <br />
