# 📝 MERN Stack Todo List Application

A full-stack todo list application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create, read, update, and delete their tasks efficiently.

## 🚀 Features

- ✨ Create, Read, Update, and Delete (CRUD) operations for todos
- 🎯 Mark todos as complete/incomplete
- 📱 Responsive design for all devices
- 🔄 Real-time updates 
- 🎨 Modern and clean user interface  
- 🔒 Secure API endpoints 
 
## 🛠️ Tech Stack    
  
- **Frontend:**   
  - React.js
  - CSS3  
  - Axios for API calls 

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose ODM

## 📁 Project Structure

```
📦 todo-list-mern
 ┣ 📂 todo-list-frontend
 ┃ ┣ 📂 public
 ┃ ┃ ┣ 📜 index.html          # Main HTML file
 ┃ ┃ ┣ 📜 robots.txt          # Search engine configuration
 ┃ ┃ ┣ 📜 manifest.json       # Web app manifest
 ┃ ┃ ┣ 📜 logo192.png         # Small app logo
 ┃ ┃ ┣ 📜 logo512.png         # Large app logo
 ┃ ┃ ┗ 📜 favicon.ico         # Browser tab icon
 ┃ ┃
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📜 Todo.js             # Main todo component
 ┃ ┃ ┣ 📜 App.js              # Main application component
 ┃ ┃ ┣ 📜 App.css             # Main application styles
 ┃ ┃ ┣ 📜 index.js            # Application entry point
 ┃ ┃ ┣ 📜 index.css           # Global styles
 ┃ ┃ ┣ 📜 logo.svg            # React logo
 ┃ ┃ ┣ 📜 setupTests.js       # Test configuration
 ┃ ┃ ┣ 📜 reportWebVitals.js  # Performance monitoring
 ┃ ┃ ┗ 📜 App.test.js         # Application tests
 ┃ ┃
 ┃ ┣ 📜 package.json          # Frontend dependencies and scripts
 ┃ ┣ 📜 package-lock.json     # Dependency lock file
 ┃ ┗ 📜 .gitignore            # Git ignore rules
 ┃
 ┣ 📂 todo-list-backend
 ┃ ┣ 📜 server.js             # Main server file
 ┃ ┣ 📜 package.json          # Backend dependencies and scripts
 ┃ ┗ 📜 package-lock.json     # Dependency lock file
 ┃
 ┗ 📜 LICENSE.txt             # MIT License file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/HARIHARANS24/todo-list-mern.git
cd todo-list-mern
```

2. Install Frontend Dependencies
```bash
cd todo-list-frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../todo-list-backend
npm install
```

4. Start the Backend Server
```bash
npm start
```

5. Start the Frontend Development Server
```bash
cd ../todo-list-frontend
npm start
```

The application will be available at `http://localhost:3000`

## 🔧 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## 📝 API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 👥 Authors

- **HARIHARANS24** - *Initial work* - [GitHub Profile](https://github.com/HARIHARANS24)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by the need for a simple and efficient todo list application 
