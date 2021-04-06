# MERNSnippet: How To
---
## Connect to MongoDB Using Mongoose

### Description
> [Mongoose](https://mongoosejs.com/) is a ODM-library (Object Data Modelling) for representation data from the code ([Node.js](https://nodejs.org/)) in [MongoDB](https://mongodb.com/) <br />

Here we'll learn how to connect your application with database.

### Step 1
Add **config** folder into your backend part and create **db.js** file there for connection with database <br/>
![1](img/1.png) <br />
![2](img/2.png) <br />
![3](img/3.png) <br />

### Step 2
Import mongoose library <br/>
![4](img/4.png) <br />

### Step 3
Bring your connection string into **.env** file (See [Set Up MongoDB Atlas](https://github.com/andrewsinelnikov/ReactSnippet-How-To/edit/main/task15/README.md) step 6)<br/>
![5](img/5.png) <br />
And set your password there

### Step 4
In **db.js** import **.env**<br/>
![6](img/6.png) <br />

### Step 5
Create a function for connection to database<br/>
![7](img/7.png) <br />
where `{useNewUrlParser: true, // others }` is an object with required settings

### Step 6
Add case when somethign is wrong with connection<br/>
![8](img/8.png) <br />

### Step 7
Export your function<br/>
![9](img/9.png) <br />

### Step 8
Bring into **server.js** your **connectDB** function and run it there<br/>
![10](img/10.png) <br />

### Step 9
Run your server<br/>
![11](img/11.png) <br />
Here we go
![12](img/12.png) <br />


<img src="img/1.png" width="100%"><br/>
