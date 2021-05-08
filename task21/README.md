# MERNSnippet: How To
---
## Test Your API with Postman

### Description
In [the previous article](https://github.com/andrewsinelnikov/ReactSnippet-How-To/tree/main/task20), we defined routes for our app. Do they work? How to check without front-end part? [Postman](https://www.postman.com/) is a good instrument to test it out <br />

> Postman is a API client that helps to create, test, save HTTP/s requests and get their responses.<br />

### Step 1
[Downloand](https://www.postman.com/downloads/) Postman and install on your computer. You're ready to test the routes we defined (make sure you launch the server in **Terminal**, `npm run dev`)<br/>

### Step 2
Create a collection for the project<br/>
  ![1](img/1.png) <br />  
Give it a name <br>
  ![2](img/2.png) <br />  
Open a Tab for a request<br>
  ![3](img/3.png) <br />  

### Step 3
Test route *Get All Products* <br />
Set **GET** method <br>
  ![4](img/4.png) <br />  
Enter request URL `http://localhost:5000/api/products` and send it<br />
  ![5](img/5.png) <br />  
Look at the response. We've got all products from the database <br />
  ![6](img/6.png) <br />  
Save the request for future reference <br />
  ![7](img/7.png) <br />  
Give request name and select a collection to save to <br />
  ![8](img/8.png) <br />  

### Step 4
Test route *Get a Product by ID* <br />
Choose one of the products that you received in the previous request and take its `_id`. <br />
Open a Tab. Set **GET** method and enter request URL with `_id` `http://localhost:5000/api/products/`**your id** and send it<br />
  ![9](img/9.png) <br />  
Save the request for future reference <br />

### Step 5
Test route *Add a Product* <br />
Open a Tab. Set **POST** method, enter request URL `http://localhost:5000/api/products`.<br />
Open the **Headers** tab and set a **KEY** to `Content-Type`, a **VALUE** to `application/json`. Save it as a preset *JSON content* for future reference <br />
  ![10](img/10.png) <br />  
On the **Body** tab with the **raw** option, set an *Product* object with the required fields. And send a request <br />
  ![11](img/11.png) <br />  
Save the request for future reference <br />
