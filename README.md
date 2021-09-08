# cc-famly

A web application built with React.js that allows the user to checkin and checkout children from an external API. 
Uses pagination to display 5 children at a time.

### Starting the development environment

1. install dependencies `npm install`
2. create a .env file in the root folder `touch .env`
3. in the .env file, set the variable `REACT_APP_ACCESS_TOKEN="YOUR ACCESS TOKEN"`
4. start the development server with `npm start` or `nodemon` - see how to install nodemon [here](https://www.npmjs.com/package/nodemon).

### Design decisions

Due to the 2 hour time limit for this challenge, I decided to **NOT** use TypeScript within my React application. I used Tailwind CSS for rapid styling and designing the layout. 

I chose pagination over infinite scroll for displaying the rendered data; pagination allows the user to more easily find what they are looking for (eg a child to check (in/out), whereas infinite scroll is intended for content exploration. For the UI, I wanted to keep it simple, yet clearly display if a child was checked in by changing the color of their name card. 

Throughout the application I used functional components and hooks, rather than class components and life cycle methods. 

Seeing as the API does not support offset/limit, and simply returns 60 childen I decided to fetch the data every time the user switched to a new page. This would not have been my design choice if the data set were much larger. In that case, I would have implemented state mangerment, either with React Context or Redux.

### Using the application

Child is checked in if its card is green, if the card is grey, the child is checked out. Click the card to toggle checkin status. Use the nav bar to list 5 other children.

### Tech Stack

[React](reactjs.org)  
[TailwindCSS](tailwindcss.com)
