# CLI Employee Management System

## Personal Information
- **Name:** Pardhasaradhi  
- **UID:** 24BCF10009  
- **Group:** 24BCF1-B  

---

## Title
**Design and Implementation of a CLI-based Employee Management System using Node.js**

---

## Aim
To build a command-line employee management system using Node.js with array-based storage.

---

## Objective
- Implement CRUD operations for employees  
- Create an interactive CLI menu  
- Validate user input  
- Persist data between sessions  
- Perform efficient array operations  

---

## Course Outcomes Mapped
- **CO1:** Explain fundamental concepts of front-end and back-end technologies  
- **CO3:** Implement backend logic and data handling using Node.js  

---

## Hardware/Software Requirements
- **Software:** Node.js 18+, VS Code, Terminal  
- **Hardware:** i5 processor or above, 8GB RAM  

---

## About the Program
This project is a command-line interface (CLI) based Employee Management System developed using Node.js. It allows users to perform operations such as adding, viewing, updating, and deleting employee records.

The system uses an in-memory array to store employee data and persists the data using a JSON file (`data.json`) to maintain state between sessions.

---

## Features
- Add new employee  
- View all employees  
- Update employee details  
- Delete employee  
- Persistent storage using JSON file  
- Input validation for data integrity  

---

## Approach

### 1. CLI Interface
- Built using Node.js `readline` module  
- Provides interactive menu-driven system  

### 2. Data Management
- Employee data stored in an array  
- Each employee has unique ID, name, position, and salary  

### 3. Persistence
- Data saved to `data.json` file  
- Loaded automatically when application starts  

### 4. Validation
- Ensures valid inputs for name, position, and salary  

---

## Working Principle
- User selects an option from the CLI menu  
- Corresponding operation is executed  
- Data is updated in array and saved to file  
- System loops back to menu for next operation  

---

## Tech Stack
- Node.js  
- JavaScript  
- File System (fs module)  

---

## Important Note (Deployment)
This project is a **CLI-based application**, which runs in a terminal environment and cannot be directly deployed on platforms like Netlify that support only web applications.

To demonstrate the output and functionality, a **separate static website (showcase)** has been created. This website includes:
- Project description  
- Features  
- Screenshots of CLI output  

This approach allows the project to be presented in a deployable format.

---

## How to Run
1. Open terminal in project folder  
2. Run the command:
   ```bash
   node app.js