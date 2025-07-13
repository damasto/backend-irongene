# 🚀 backend-irongene

This is a Node.js + Express backend project, serving the Irongene-Client frontend. It uses MongoDB as the database and includes modular components for routes, middleware, configuration, error handling, and database models.

---

# Backlog
- clean up routes
- improve security (e.g. install helmet)
- Create API-documentation with Swagger-Ui

## 📁 Folder Structure

<pre>
project/root
├── config/ # App-wide configuration (e.g., CORS, tokens)
├── db/ # MongoDB connection logic
├── error-handling/ # Centralized error handling utilities
├── middleware/ # Custom middleware (e.g., auth, logging)
├── models/ # Mongoose schema definitions
├── routes/ # Route handlers organized by resource
├── node_modules/ # Dependencies
├── .env # Environment variables
├── .gitignore # Files to exclude from Git
├── app.js #  sets up middleware, routes, and error handling
├── server.js # App entry point — starts the server
├── package.json # Project metadata and scripts
├── package-lock.json # Dependency tree lock file
</pre>

## 🔧 Environment Variables

Create a `.env` file in the root of the project with the following keys:

- PORT=  The port your server will run on (e.g., 5000)
- ORIGIN= Your frontend origin for CORS (e.g., http://localhost:3000)
- TOKEN_SECRET= Secret key used for signing JWTs
- MONGODB_URI= MongoDB connection string

## Setup Instructions

1. **Clone the repository**  
   git clone (https://github.com/damasto/backend-irongene)
   cd <backend-irongene>
2. **Install dependencies**
    npm install
3. **Create .env file**
    Add environment variables as shown earlier
4. **Start server**
    npm run dev

## API Structure

<pre>
routes/
├── auth.routes.js         # Login, signup, token validation
├── users.routes.js        # User management (CRUD)
├── clinics.routes.js      # Clinics-related endpoints
├── booking.routes.js      # Booking-related endpoints
└── index.routes.js        # Main router that aggregates all routes that use /api
</pre>

## Security

- JWT is used for authentication via the TOKEN_SECRET.
- CORS configuration is managed in config/.

# Acknowledgements
- [Express](https://expressjs.com)
- [Node.js](https://nodejs.org/es)
- [Ironlauncher](https://www.ironhack.com/)

# Links

- [Presentation](https://docs.google.com/presentation/d/1d0hfJZPVnNRZYv-HnW_q43bWVexoFsWzaCw5zV3biEI/edit?usp=sharing)
- [Github-repository Frontend](https://github.com/damasto/irongene)
- [Github-repository Backend](https://github.com/damasto/backend-irongene)
- [Deployment Frontend](https://irongene.netlify.app/)
- [Deployment Backend](https://irongene-api.onrender.com)
