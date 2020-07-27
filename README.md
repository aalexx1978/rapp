# Rapp

React Redux Hooks demo app.

# Scripts
First clone de repo:
``` git clone https://github.com/aalexx1978/rapp.git```
Install dependencies
``` npm i```
run
``` npm start```

## Redux Logger
Running on dev lets see the redux logger to track all actions and states
 ```action FETCH_DATA @ 22:31:54.651
redux-logger.js:1  prev state {appRed: {…}}
redux-logger.js:1  action     {type: "FETCH_DATA", data: Array(0)}
redux-logger.js:1  next state {appRed: {…}}
redux-logger.js:1  action RECEIVE_DATA @ 22:31:55.207
redux-logger.js:1  prev state {appRed: {…}}
redux-logger.js:1  action     {type: "RECEIVE_DATA", items: Array(20)}
redux-logger.js:1  next state {appRed: {…}}
```

## Testing

E2E basic testing as demo with testcafe
```npm test```


## Functionalities

* Fetch cors api and get information
* list all items retrieved
* able to delete items
* pagination
* search box
* modal with detailed information (comments)
* managed state with Redux
* hooks available in some components
* bootstrap 4
* responsive design
* basic test with testcafe
