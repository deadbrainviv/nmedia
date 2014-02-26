module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
      dev: {
        NODE_ENV: 'development'
      },
      prod: {
        NODE_ENV: 'production'
      }
    },
    jshint: {
      options: {

      },
      all: ['Gruntfile.js', 'public/js/**/*.js', '!public/js/text.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'public/js',
          src: '**/*.js',
          dest: 'dist/js'
        }]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/css',
        src: ['*.css'],
        dest: 'dist/css'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'public', src: ['*'], dest: 'dist/', filter: 'isFile'},
          {expand: true, cwd: 'public/templates', src: ['**'], dest: 'dist/templates'},
          {expand: true, cwd: 'public/lib', src: ['**'], dest: 'dist/lib'},
          {expand: true, cwd: 'public/test', src: ['**'], dest: 'dist/test'}
          
        ]
      }
    },
    nodemon: {
      server: {
        script: 'server.js'
      },

    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-env');

  // Default task(s).
  grunt.registerTask(
    'default',
    ['env:dev', 'jshint', 'uglify', 'cssmin', 'copy', 'nodemon']
  );
  grunt.registerTask(
    'prod', 
    ['env:prod', 'jshint', 'uglify', 'cssmin', 'copy', 'nodemon']
  );

};