#Ignoring Specific Warning#

* You may have a warning about “module is not defined”
* From the command line: 
`grunt jshint --verbose`
* Note the warning number
* To ignore that warning, add this to the JSHint options: 
`'-Wnnn': true,`
* At least it is *supposed* to work…  [Issue 177](https://github.com/gruntjs/grunt-contrib-jshint/issues/177)
