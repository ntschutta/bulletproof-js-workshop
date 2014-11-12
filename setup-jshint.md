#Setup JSHint#
* [Grunt contrib](https://github.com/gruntjs/grunt-contrib-jshint) is your friend! 
* Add JSHint plugin, at the command line:
` npm install grunt-contrib-jshint --save-dev`
* This will update your package.json file
* Enable the plugin by adding this to your Gruntfile: 
`grunt.loadNpmTasks(‘grunt-contrib-jshint');`
* You may want to register the task (saves on typing):
` grunt.registerTask('default', ['jshint']);`
