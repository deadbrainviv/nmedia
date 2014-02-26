nmedia
======

# Progress Bar demo application

## Features:
* One set of controls that can control each bar on the fly 
* Can't go under 0, Can go over 100, but limit the bar itself and change its colour 
* Display usage amount, centered 
* Consider animating the bar change 
* Consider linear gradient for the bar Consider a responsive solution: testing it on mobile, tablet, etc.

## Implementation
The application uses Backbone.js, underscore.js, jQuery and Require.js for the front-end. The back-end server is based on Express.js.

## Automated tools and deployment

You need to install Grunt in your environment to run the application. To install Grunt, please run:
```
npm install -g grunt-cli
```

In this application, the Grunt will do the following tasks: jshint, uglify Javacript files, minify CSS files, copy the files to dist directory for production site.

To start the server in development environment, please run:

```
grunt
```
To start the server in production environment, please run:
```
grunt prod
```
The Progress Bar demo application is on URL:
```
http://localhost:8080/
```
## Testing

The testing code uses the following libraries: Mocha, Chai and Sinon.

The testing html page is on URL:
```
http://localhost:8080/test
```

# Social media search demo application

A social media search web site demonstration using Node.js, Backbone.js and MongoDB. The node.js server provides restful APIs for the front-end.


