# React-Django To Do List Application

This repository contains a simple ToDo List web application built with a React.js frontend and a Django backend. The project demonstrates the integration of a modern JavaScript library with a traditional web framework, showcasing how to create a full-stack web application.

![alt text](https://github.com/06kevin29/todo/blob/master/client/src/images/sample.png)

## Features

- **React.js Frontend**: The frontend is built using React.js and Material-UI (MUI) for the UI components.
- **Django Backend**: The backend API is built using Django and Django REST framework (DRF).
- **CRUD Operations**: The application allows users to create, read, update, and delete ToDo items.
- **Persistent Data**: ToDo items are stored in a SQLite database.
- **Responsive Design**: The UI is responsive and works well on different screen sizes.

## Project Structure

```plaintext
.
├── server/       # Django project directory
│   ├── manage.py         # Django management script
│   ├── backend/          # Django application
│   │   ├── settings.py   # Django settings
│   │   ├── urls.py       # Application URLs
│   │   └── ...
│   └── ...
└── client/       # React project directory
    ├── public/           # Public directory for static assets
    ├── src/              # Source directory for React components
    │   ├── Components/   # React components
    │   ├── App.js        # Main App component
    │   └── ...
    ├── package.json      # Node.js dependencies and scripts
    └── ...
```

## Getting Started

### Prerequisites

- **Python** (version 3.6+)
- **Node.js** (version 14+)
- **npm** or **yarn**
- **Git** (for version control)

### Setting Up the Django Backend

1. **Navigate to the Django directory**:

   ```sh
   cd server
   ```
   
2. **Install the Python dependencies**:

3. ***Apply the migrations to set up the database**:

  ```sh
  python manage.py migrate
  ```
4. Run the Django development server:

  ```sh
  python manage.py runserver
  ```
The backend should now be running on http://localhost:8000.

### Setting Up the React Frontend

1. **Navigate to the React directory**:

  ```sh
  cd ../client
  ```
2. **Install the Node.js dependencies**:

  ```sh
  npm install
  ```
  or

  ```sh
  yarn install
  ```
3. **Start the React development server**:

  ```sh
  npm start
  ```
or

  ```sh
  yarn start
  ```

The frontend should now be running on http://localhost:3000.

### Running the Full Application

With both the Django backend and React frontend running, you should be able to use the ToDo List application by navigating to http://localhost:3000.
