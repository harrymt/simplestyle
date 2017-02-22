'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.initConfig({

    scsslint: {
      all: [
        'scss/_partials/*.scss',
        'scss/*.scss'
      ]
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },

        files: {
          'simplestyle.min.css': 'scss/style.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['scss/*.scss', 'scss/_partials/*.scss'],
        tasks: ['scsslint', 'sass'],
        options: {
          spawn: false
        }
      }
    }
  });



  grunt.loadNpmTasks('grunt-serve'); // Local server
  grunt.loadNpmTasks('grunt-scss-lint'); // Lint SCSS files
  grunt.loadNpmTasks('grunt-contrib-sass'); // Process Sass files
  grunt.loadNpmTasks('grunt-contrib-watch'); // On file update, do task

  grunt.registerTask('default', ['scsslint', 'sass']);
};
