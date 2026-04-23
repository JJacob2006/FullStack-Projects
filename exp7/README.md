# Full Stack Chat Application

**Name:** John Jacob  
**UID:** 24BCF10037  
**Section:** 24BCF-1(B)

A real-time chat application built with Node.js, Express, Socket.IO, and React with Vite.

## Project Structure

- **Root (`index.js`, `package.json`)**: Node.js backend server
- **`vite-project/`**: React frontend application with Vite

## Features

- Created a backend server using Node.js, Express, and Socket.IO
- Added socket events to handle users joining, sending messages, typing, and leaving
- Created a React frontend and connected it to the backend using Socket.IO
- Built a simple chat UI with username login, message box, and online users list
- Enabled real-time features like instant messaging, typing indicator, and user join/leave updates

## Setup Instructions

### Backend
1. Install dependencies: `npm install`
2. Start the server: `node index.js`

### Frontend
1. Navigate to the frontend: `cd vite-project`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Technologies Used

- **Backend**: Node.js, Express, Socket.IO
- **Frontend**: React, Vite
- **Real-time Communication**: WebSockets (Socket.IO)
