# AngularJS Smart Table With Print Tutorial Application

## Overview

This application takes the developer can use smart table without pagination when printing the table data



### Git

- A good place to learn about setting up git is [here][git-github].
- Git [home][git-home] (download, documentation).

### Node.js and Tools

- Get [Node.js][node-download].
- Install the tool dependencies (`npm install`).


## Using Angular Smart Table without pagination when printing the table data

The following docs describe how you can test and develop further this application.


### Installing dependencies

The application relies upon various node.js tools, such as Bower, Karma and Protractor.  You can
install these by running:

```
npm install
```

This will also run bower, which will download the angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.

### What is the customization of the smart table

- js/smart-table.js file
For printing the entire scope data, the new model that ends with 'Print' is added in the st-table directive
Please check the partials/smart-table.html how to use this new model

- partials/smart-table.html
You can see the rowCollectionPrint model without declaring, which is declared in customized smart table for printing entire scope data.

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> stylesheet file
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        smart-table.js  --> updated smart table js file
      partials/         --> angular view partials (partial html templates) used by ngRoute
        smart-table.html
      bower_components  --> 3rd party js libraries, including angular and jquery


