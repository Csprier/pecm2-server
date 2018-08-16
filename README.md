# Welcome to PECM! (Physical Education Class Manager)

This is a tool teachers can use on their mobile devices, or desktops, to help organize daily class scheduling. 


## Create an account, or login! If you create an account, you will be automatically logged in on submission!
<img width="611" alt="screen shot 2018-08-08 at 5 25 29 pm" src="https://user-images.githubusercontent.com/26131912/43865395-7e44f3d4-9b30-11e8-8bb3-e36088a5ef3a.png">

### Add students to the database!
<img width="167" alt="screen shot 2018-08-08 at 5 32 17 pm" src="https://user-images.githubusercontent.com/26131912/43865569-f540dd86-9b30-11e8-96e4-149a39a25784.png">

### Filter a list of students by which period they are in!
<img width="180" alt="screen shot 2018-08-08 at 5 32 22 pm" src="https://user-images.githubusercontent.com/26131912/43865580-fc8c29c4-9b30-11e8-965e-4dae1ed69f20.png">

### Delete periods from a student, or delete a student from the database entirely!

<img width="45" alt="screen shot 2018-08-08 at 5 32 27 pm" src="https://user-images.githubusercontent.com/26131912/43865616-158d3d96-9b31-11e8-9c0b-278efb768394.png">

## Tech!
- bcryptjs
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- morgan
- passport
- passport-jwt
- passport-local

# API

#### Login
- /api/login
#### Auth
- /api/auth

#### Users:
- /api/users
- GET /users, /users/:id
- POST /users, /users/:id
- PUT /users/:id
- DELETE /users/:id

#### Students:
- /api/students
- GET /students
- POST /students
- PUT /students, /students/:id
- DELETE /students/:id

#### Periods:
- /api/periods
- GET /periods
- POST /periods
- PUT /periods/:id
- DELETE /periods/:id