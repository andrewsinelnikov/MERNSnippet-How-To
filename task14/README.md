# MERNSnippet: How To
---
## Express Setup

### Description
> [Express](http://expressjs.com/) is a flexible web framework for [Node.js](https://nodejs.org/) <br />

This guide will give you a good start on getting comfortable with it.

### Step 1
Set up a **package.json** for your project. 
>**package.json** - gives information that allows to identify the project as well as handle the project's dependencies

Run the next command in **Terminal**<br />
`npm init -y` <br />
where ` -y ` helps to generate it without any questions.
Change the main field there for the entry point of the program <br />
`"main": "server.js"`<br />
Set the folder structure
<img src="img/1.png" width="100%"><br/>

### Step 2
Install needed dependencies for backend
<img src="img/2.png" width="100%"><br/>
<img src="img/3.png" width="100%"><br/>

### Step 3
Create front-ent part of the project. Run the next one in **client** folder
<img src="img/4.png" width="100%"><br/>

### Step 4
Create **server.js** file in **server** folder. It will be the entry point of the project
<img src="img/5.png" width="100%"><br/>
where ` require('express') ` - includes **express** module, ` app ` - an express application object, <br />
`app.listen()` - the app starts a server and listens on port 5000 for connections<br />
Add **.env** file to the root of the project and set a port
<img src="img/6.png" width="100%"><br/>
Bring it into **server.js** and tun the server
<img src="img/7.png" width="100%"><br/>
