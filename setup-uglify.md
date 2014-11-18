#Setup Uglify2#

* Install Uglify2
* From a command line (you may need to use sudo) 
`npm install uglify-js -g`
* Change to the “app” directory
`${extract}/bulletproof-js/examples/angularjs`
* Make a build directory
* “uglify” a JavaScript file 
`uglifyjs js/app.js --output build/app-min.js`
* It should create new minified file
