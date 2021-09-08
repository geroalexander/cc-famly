# cc-famly

A web application built with React.js that allows the user to checkin and checkout children from an external API. 
Uses pagination to display 5 children at a time.

### Starting the development environment

1. install dependencies `npm install`
2. create a .env file in the root folder `touch .env`
3. in the .env file, set the variable `REACT_APP_ACCESS_TOKEN="YOUR ACCESS TOKEN"`
4. start the development server with `npm start` or `nodemon` - see how to install nodemon [here](https://www.npmjs.com/package/nodemon).

### Using the application

Child is checked in if its card is green, if the card is grey, the child is checked out. Click the card to toggle checkin status. Use the nav bar to list the next 5 children.

### Tech Stack

[React](reactjs.org)  
[TailwindCSS](tailwindcss.com)
