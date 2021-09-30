This is a MERN Project to make a food discovery Single Page Application.
JWT token is used for login and register, and the value is stored in local storage, when gets erased when logged out.
MongoDB is used in the backend to get the details of the query form and the registered users.
Redux-saga is used for the API call to list the restaurants from the backend.
Testing of express API is done in frontend.
Testing of react components is done in backend.

Download the zip file, open in VS Code and in the terminal type the following commands:
1) cd assignment-mern/client
2) npm install (or npm i --force)
3) npm audit fix

4) cd .. (the directory is assignment-mern now)
5) npm install (or npm i --force)
6) npm audit fix

7) npm run dev (both client and server will run together as I have used "concurrently")


To run test commands:
For server:
1) cd assignment-mern
2) npm run test

For client:
1) cd assignment-mern/client
2) npm run test
