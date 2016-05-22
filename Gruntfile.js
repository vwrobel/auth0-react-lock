var pkg = require('./package');

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var filesToWatch = [
    'src/**/*.js',
    'Gruntfile.js'
  ];

  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: false
      }
    }
  });


  grunt.registerTask('test', ['karma']);
  grunt.registerTask('default', ['test']);

};
