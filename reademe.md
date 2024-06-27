**Layout**
---

# Header

- logo
- Nav items

# body

- Search 
- RestaurentContainer
- RestaurentCard

# footer
- copyright
- links
- Address
- Contact




# Redux Toolkit
-install @reduxjs/toolkit and react-redux
-build our store
-connect our store 
-slice (cartSlice)
-dispatch (action)
-Selector



# Testing
- UNit Testing
- Integration testing 
- E2e testing
-    npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest @babel/preset-env @babel/preset-react
npm install --save-dev jest-environment-jsdom

-  Create a .babelrc file in the root of your project with the following content:
```Javascript
    {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
```

-   In Vite, you don't need to configure Vite itself to use Babel for your tests. Vite is designed to work seamlessly with modern JavaScript tools and frameworks, including Jest for unit testing and Cypress for end-to-end testing, without needing additional configuration for Babel. Here's how you can integrate testing into your Vite project:
```Javascript
    "scripts": {
  "test": "jest"
}

```


 npx jest --init


Configure Jest

During the initialization process, you'll be prompted to answer several questions. Here are suggested answers for a typical Vite project:

Choose the test environment that will be used for testing: jsdom (browser-like)
Do you want Jest to add coverage reports? Yes
Which provider should be used to instrument code for coverage? babel
Automatically clear mock calls and instances between every test? Yes



