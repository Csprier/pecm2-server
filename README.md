# Welcome to PECM! (Physical Education Class Manager) Server
This is a tool teachers can use on their mobile devices to help organize daily class scheduling.

Create an account! Login to that account! It is protected with JWT authetnication, aswell as bcrypt hashing and salting, and passport!

This app uses:

Express
Node
MongoDB
Mongoose
mLab
Authentication:

passport
passport-jwt
passport-local
morgan
jsonwebtoken(JWT)
bcryptjs
cors
dotenv
Testing:

mocha
chai
chai-http
cross-env
nyc
From the backend, you have CRUD control over:

Users
Periods
Students
(All files are organized to include names of their respective processes)

Routes folder
Models folder
JWT/Auth are located in the passport folder.

All tied into the entry point of Server.js.

Deployed server on Heroku!
https://pecm.herokuapp.com (/api/users, /api/students, /api/periods)
