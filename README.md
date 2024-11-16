# Taskpin.io

![Taskpin.io thumbnail](/src/assets/readme-files/thumbnail.png)

Welcome to Taskpin.io
Taskpin.io is a task management application that allows the user to easily track and manage their task. 

## App Features
- Add, edit and delete a task
- Filterable task by group
  - Todo
  - Ongoing
  - Done
- View your task in table mode
- Filter task by level of priority
  - Low
  - Medium
  - High
- Mobile responsive
- Includes a landing page to promote the app

## Technology used behind
- Vue.JS for building the frontend
- Typescript for functionality and modeling types
- Vuex for state management
- TailwindCSS for styling the components
- JSON server for mock data and api endpoints integration
- Figma for design and prototype [Figma design here](https://www.figma.com/design/5HrQanZelDESZQRNpq7Pr5/Taskpin.io---UI?node-id=5-2&t=VjWyYUSYTMvqHSnW-1)

## Requirements to run the app 
Here are some of requirements to run the app, 
- VScode, I highly recommend to use this one but you can choose any code editor you like.
- Make sure also that you have a node js installed on your pc. you can see the installation page here [Node.JS](https://nodejs.org/en)
- Please make sure that you have also installed the JSON server as it will serve as the running backend of the application. See intallation and guide here [JSON server](https://www.npmjs.com/package/json-server)

## How to run the app localy
- Open a cmd or terminal from your pc
- Select your directory by typing... "cd desktop" (you may choose your own directory if you want, but in my case I use desktop)
![cd desktop](/src/assets/readme-files/cd-desktop.png)

- Once you get in deskop, you can now type "git clone https://github.com/Mel1207/Taskpin-App.git"

- After you cloned the repository, change now your directory by typing... "cd Taskpin-App"
![cd taskpin](/src/assets/readme-files/cd-taskpin.png)

- Once your in the Taskpin-App directory you can now type "code ." to open the folder in vscode. 
![cd code.](/src/assets/readme-files/cd-code.png)

- Once your in vscode project open a 2 terminal by clicking terminal tab at the top or do ctrl + ` in your keyboard
![open terminal](/src/assets/readme-files/open-terminal.png)

- To make sure you have 2 opened terminal you can simply look at the bottom of vscode and see the tabs 
![open tabs](/src/assets/readme-files/terminals-2.png)

### First Terminal
- For the first terminal run these command by typing "npm i" or "npm install" to install project dependencies
![npm install](/src/assets/readme-files/npm-install.png)

- After you finished installing the dependencies, you can now run the app by typing "npm run dev", and open the Local link that will provide for you (ctrl + click) and it will open a browser running the app.
![run dev](/src/assets/readme-files/run-dev.png)

### Second Terminal
- Now switch to the second tab on your terminal and run these command "npx json-server --watch data/db.json" these will provide the endpoints for the app to run the backend. You can also check the endpoint data by opening the provided link (ctrl + click)
![json server](/src/assets/readme-files/json-server.png)

- If you don't have the json-server install on your machine you can simply install it globaly by typing "npm install -g json-server"

- Please refresh the browser if no data shown yet after running the json-server. 
![refresh page](/src/assets/readme-files/refresh-page.png)

Now you can explore the app locally 🔥 Feel free to reach me out for some questions or concerns.