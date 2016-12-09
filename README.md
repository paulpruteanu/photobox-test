# Photobox Fullstack Homework

## Instructions

Implement backend functionality to return a variable size set of numbers between -100 and 100.  The size of the set should be defined by an input parameter. 

On the frontend, use this backend functionality to obtain a set of numbers and represent each number in the set as a box in a grid. 
Each box should display its number and be decorated according to the properties of that number. The list of properties is as follows:

* prime number
* perfect square
* even or odd
* positive or negative

The UI should consist of controls that allow you to specify the size of a set and to obtain a new set. There should be additional 
controls to reorder the boxes in ascending order, descending order, randomise the order or to revert to the original order. 

## Notes

Feel free to use any approach on the backend and frontend components you feel appropriate to solve the problem.

The test should be completed in the language(s) relevant to the role you are applying for. 


## Installation

The solution has front-end and backend fully decoupled, residing in each of the "client" and "server" directories.
- back-end/ server's stack is ExpressJS + GraphQL, with a SQLite solution for storing the numbers.
- front-end/ client's stack is ReactJS, with Webpack responsible for bundling the logic

### Server installation

```cd server``` then run ```npm install```, ```cp .env.sample .env``` and ```npm start```.
for testing, run ```npm test```

Sensitive environment variables should be kept in non-versioned .env file. In development, these values usually are set
through .env files, but production workflows may have other tools such as terraform that exports these environment
variables when building the package (ie. docker image).

### Client installation

```cd client``` then run ```npm install``` and ```npm start```.

for testing, run ```npm test```

### Development

On both environments, you can use ```npm run start:dev``` and ```npm run test:watch```, which basically
watches for changes and refreshes the endpoint/ web-page/ tests.

### Demo

A online demo resource is available [here](http://pruteanu.uk:8080).