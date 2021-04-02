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

### Step 5
Configure **Git** to ignore files you don't want to check in to **GitHub**<br />
Add one **.gitignore** file (for both backend and front-end) in your repository's root directory to tell Git which files and directories to ignore when you make a commit. 
Copy everything from **.gitignore** in the client side and paste in there
<img src="img/8.png" width="100%"><br/>
Change it
<img src="img/9.png" width="100%"><br/>
Run the following commands to delete **.gitignore** from client side
<img src="img/10.png" width="100%"><br/>
Delete **.gitignore** from **client** directory.
Create **git** repository in the root directory
<img src="img/11.png" width="100%"><br/>
