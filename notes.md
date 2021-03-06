First create the Application

    npm install --global create-react-app
    create-react-app todo-app
    cd todo-app


    npm start - serves our application on http://localhost:3000, auto-reloads on file change and lints our JavaScript code using ESLint,

    npm run build - creates a production-ready build of our application, concatenating and compressing our assets,

    npm test — runs the tests, using Jest by default,

    npm run eject — fully exposes background configurations for Webpack, Babel and ESLint, giving us full control over the tools.


Installing and Configuring AVA

    npm install --save-dev ava



modify the test script in package.json to run AVA:


    {
      "name": "todo-app",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "react": "^16.2.0",
        "react-dom": "^16.2.0"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "ava",
        "eject": "react-scripts eject"
      },
      "devDependencies": {
        "ava": "^0.24.0",
        "react-scripts": "1.1.0"
      }
    }


    npm install --save-dev babel-preset-react-app


    Amend json again

    {
      "name": "todo-app",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "react": "^16.2.0",
        "react-dom": "^16.2.0"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "cross-env NODE_ENV=test ava",
        "eject": "react-scripts eject"
      },
      "devDependencies": {
        "ava": "^0.24.0",
        "babel-preset-react-app": "^3.1.1",
        "cross-env": "^3.0.0"
        "react-scripts": "1.1.0"
      },
      "babel": {
        "presents": "react-app"
      },
      "ava": {
        "babel": "inherit"
      }
    }

babel-preset-react-app requires us to set NODE_ENV before running tests, which lets React know in which environment it's running.

    npm install --save-dev cross-env

AVA only parses test files, not imported modules, i.e. our application code. To fix that, we should require babel-register before running tests. To install it, run:

    npm install --save-dev babel-register

Node.js can't import CSS files, so we need a way to ignore those imports. They aren't needed in our tests anyway.

    npm install --save-dev ignore-styles

    npm install --save-dev jsdom


Add src/test-setup.js

    // src/test-setup.js
    const jsdom = require('jsdom').jsdom;

    global.document = jsdom('<body></body>');
    global.window = document.defaultView;
    global.navigator = window.navigator;


    {
      "name": "todo-app",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "react": "^16.2.0",
        "react-dom": "^16.2.0"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "cross-env NODE_ENV=test ava",
        "eject": "react-scripts eject"
      },
      "devDependencies": {
        "ava": "^0.24.0",
        "babel-preset-react-app": "^3.1.1",
        "babel-register": "^6.16.3",
        "cross-env": "^5.1.3",
        "ignore-styles": "^5.0.1",
        "jsdom": "^11.5.1",
        "react-scripts": "1.1.0"
      },
      "babel": {
        "presents": "react-app"
      },
      "ava": {
        "babel": "inherit",
        "require": [
          "babel-register",
          "ignore-styles",
          "./src/test-setup"
        ]
      }
    }
