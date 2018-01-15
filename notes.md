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
        "test": "ava",
        "eject": "react-scripts eject"
      },
      "devDependencies": {
        "ava": "^0.24.0",
        "babel-preset-react-app": "^3.1.1",
        "react-scripts": "1.1.0"
      },
      "babel": {
        "presents": "react-app"
      },
      "ava": {
        "babel": "inherit"
      }
    }
