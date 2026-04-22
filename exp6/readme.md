Step 1: Setup the Project
Created a Node.js project using npm init
Installed required packages: Express, JSON Web Token, Nodemon
Created main file index.js
Step 2: Create Express Server
Imported Express and initialized app
Used built-in middleware express.json() to handle JSON data
Started server on port 3000
Step 3: Implement Logging Middleware
Created a custom middleware function
It logs request method and URL (e.g., GET /dashboard)
Used next() to pass control to next middleware
Step 4: Implement Authentication Middleware
Used JWT to verify user identity
Checked token from request headers
Returned 401 error if token is missing or invalid
Allowed access if token is valid
Step 5: Apply Middleware & Test
Created routes:
/login → generates token
/dashboard → protected route
Applied authentication middleware to protected route
Tested using Postman:
Verified token-based access
Checked error handling