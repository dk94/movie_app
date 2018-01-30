# Movies app (picture palace)

Application built with React/Redux/Node JS/Mongo DB. This application is a mini-storage for movies information. App consists of two parts: client and server(api). There is the React/Redux on the client, Node JS, Mongo DB on the server.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

To run the application you should have Mongo DB on your machine up-and-running
```
You can find it at https://www.mongodb.com/
```
### Installing

To install app to your local machine, you should

1. Clone the repo

```
git clone git@github.com:dk94/movie_app.git
cd /movie_app

```
2. Install necessary dependencies:

```
yarn install or npm install
```

3. Run Mongo DB, type in the terminal/command line:

```
linux: mongod
windows: mongod.exe
```

4. Run server part of the application. In the app folder, run the command

```
yarn api
or
npm run api
```

5. Run client side of the application. In the app folder, run the command

```
yarn start
or
npm start
```


Now you should have running app (client on the port:3000, server on the port:8080)

### Build

To build client side of the application. In the app folder, run the command

```
yarn build
or
npm build
```


