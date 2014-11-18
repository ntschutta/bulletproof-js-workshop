#Setup Uglify2#

* Install Uglify2
* From a command line (you may need to use sudo) 
`npm install uglify-js -g`
* Change to the “app” directory
` ${extract}/bulletproof-js/examples/angularjs/js`
* Make a dist directory
* “uglify” the JavaScript file 
`uglifyjs app.js --output dist/app-min.js`
* It should create new minified file
