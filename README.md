# Happy Notes App

## Introduction

Happy Notes App is a full-featured, modern web application designed to help users manage their tasks and notes efficiently. Built using the MVC (Model-View-Controller) architecture, it leverages the power of Node.js, Express, and MongoDB, with Passport.js for secure authentication. This application offers a sleek, user-friendly interface implemented with EJS templating.

## Features

- **User Authentication**: Secure login and signup functionality using Passport.js.
- **Create, Read, Update, Delete (CRUD) Operations**: Users can create, view, edit, and delete notes and todo items.
- **Responsive Design**: A clean, responsive layout that adapts to various screen sizes, ensuring a seamless experience on desktop and mobile devices.
- **Search Functionality**: Easily search for specific notes or todo items.
- **Data Persistence**: Notes and todo items are saved in MongoDB, ensuring data is not lost between server restarts.

## Getting Started

### Prerequisites

Before running this app, you'll need to have Node.js and MongoDB installed on your local machine.

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/UmtHym/Happy-Notes-App.git
   cd Happy-Notes-App
2. Install the necessary npm packages:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following variables:

    ```bash
    DB_URL=your_mongodb_connection_string_here
    SESSION_SECRET=YourSecretHere
    ```

    Replace `your_mongodb_connection_string_here` with your own MongoDB connection string. If you're using MongoDB Atlas, you can find this in your cluster's "Connect" section. If you're hosting MongoDB locally, the string will typically look like `mongodb://localhost:27017/yourDatabaseName`.


4. Start the application:

    ```bash
    npm start
    ```

5. Open a web browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

After logging in or signing up, you can start creating notes and todo items by navigating to the respective sections via the navigation bar. You can edit or delete each item using the options provided alongside each entry.

## Contributing

Contributions to improve the Happy Notes App are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- Your Name - [@umthym](https://twitter.com/umthym) - umitbcn@gmail.com
- Project Link: [https://github.com/UmtHym/Happy-Notes-App](https://github.com/UmtHym/Happy-Notes-App)
