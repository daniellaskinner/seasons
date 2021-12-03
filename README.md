# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` `or npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Notes from learning
 - Any time state is updated, react will re-render the component.
 - Callback functions in the constructor will not get invoked until we eventually return from the constructor, 
the callback will run when we successfully get a response from our API request.
 - You shouldn't put calls that take any amount of time e.g. API calls in the render method as these get called a lot, 
 - put them in the constructor of a class component.
 - Component did mount: called every time a component renders, it's called after the component output has been rendered to the DOM.
 - Do not do data loading or requests inside constructor e.g. API request, do this in component did mount method. 
 - Component did update: called everytime component updates, maybe state changes or component gets a new set of props from its parent. 
Make a network request every time a user clicks a button, inputs some data, or new props come from a parent component.
 - Component did update will be called AFTER render.
 - Component will unmount: used every time we are about to remove a component from the screen and we need to do some cleanup after it.
 - You can use a constructor and initialise state here or not have a constructor and initialise state inside the component.
 - If you use state = {} this will get compiled to the constructor method with super and this.state anyway.
 - 