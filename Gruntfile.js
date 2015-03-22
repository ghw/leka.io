'use strict';

var request = require('request');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729, files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'bin/www'
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/style.css': 'public/css/style.scss',
          'public/css/style-wide.css': 'public/css/_alpha/style-wide.scss',
          'public/css/style-normal.css': 'public/css/_alpha/style-normal.scss',
          'public/css/style-narrow.css': 'public/css/_alpha/style-narrow.scss',
          'public/css/style-narrower.css': 'public/css/_alpha/style-narrower.scss',
          'public/css/style-mobile.css': 'public/css/_alpha/style-mobile.scss',
          'public/css/style-mobilep.css': 'public/css/_alpha/style-mobilep.scss',
          'public/css/ie/v8.css': 'public/css/_alpha/ie/v8.scss'
        }
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: reloadPort
      },
      server: {
        files: [
          'bin/www',
          'app.js',
          'routes/*.js'
        ],
        tasks: ['develop', 'delayed-livereload']
      },
      js: {
        files: ['public/js/*.js'],
        options: {
          livereload: reloadPort
        }
      },
      css: {
        files: [
          'public/css/*.scss',
		  'public/css/**/*.scss'
        ],
        tasks: ['sass'],
        options: {
          livereload: reloadPort
        }
      },
      views: {
        files: ['views/*.handlebars'],
        options: {
          livereload: reloadPort
        }
      },
      partials: {
        files: ['partials/*.handlebars'],
        options: {
          livereload: reloadPort
        }
      },
      layouts: {
        files: ['layouts/*.handlebars'],
        options: {
          livereload: reloadPort
        }
      }
    }
  });

  grunt.config.requires('watch.server.files');
  files = grunt.config('watch.server.files');
  files = grunt.file.expand(files);

  grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
    var done = this.async();
    setTimeout(function () {
      request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','),  function (err, res) {
          var reloaded = !err && res.statusCode === 200;
          if (reloaded) {
            grunt.log.ok('Delayed live reload successful.');
          } else {
            grunt.log.error('Unable to make a delayed live reload.');
          }
          done(reloaded);
        });
    }, 500);
  });

  grunt.registerTask('default', [
    'sass',
    'develop',
    'watch'
  ]);
};
