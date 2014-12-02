module.exports = function(grunt) { 
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json') ,

    //templates will go here
    
  });
    //tasks will go here

    //tasks can be registered here
    grunt.registerTask('default', ['jshint']);
};
