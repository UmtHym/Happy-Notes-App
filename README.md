Happy Notes App

Introduction

Happy Notes App is a full-featured, modern web application designed to help users manage their tasks and notes efficiently. Built using the MVC (Model-View-Controller) architecture, it leverages the power of Node.js, Express, and MongoDB, with Passport.js for secure authentication. This application offers a sleek, user-friendly interface implemented with EJS templating.

Features

User Authentication: Secure login and signup functionality using Passport.js.
Create, Read, Update, Delete (CRUD) Operations: Users can create, view, edit, and delete notes and todo items.
Responsive Design: A clean, responsive layout that adapts to various screen sizes, ensuring a seamless experience on desktop and mobile devices.
Search Functionality: Easily search for specific notes or todo items.
Data Persistence: Notes and todo items are saved in MongoDB, ensuring data is not lost between server restarts.
Getting Started

Prerequisites
Before running this app, you'll need to have Node.js and MongoDB installed on your local machine.

Node.js
MongoDB
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/UmtHym/notes-todo-app.git
cd Happy-Notes-app
Install the necessary npm packages:

Copy code
npm install
Create a .env file in the root directory and add the following variables:

bash
Copy code
DB_URL=mongodb://localhost:27017/notesTodoApp
SESSION_SECRET=YourSecretHere
Start the application:

sql
Copy code
npm start
Open a web browser and navigate to http://localhost:3000 to see the app in action.

Usage

After logging in or signing up, you can start creating notes and todo items by navigating to the respective sections via the navigation bar. You can edit or delete each item using the options provided alongside each entry.

Contributing

Contributions to improve the Notes/ToDo App are welcome. Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.

License

Distributed under the MIT License. See LICENSE for more information.

Contact

Your Name - @umthym - umitbcn@gmail.com

Project Link: https://github.com/UmtHym/Happy-Notes-App