module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["dev/components/bootstrap/less"]
        },
        files: {
          "css/bootstrap.css": "dev/less/styles.less"
        }
      },
    },
    uglify: {
      bootstrap: {
        files: {
          'js/bootstrap.min.js': ['dev/components/bootstrap/js/carousel.js']
        }
      },
      jquery: {
        files: {
          'js/jquery.js': ['dev/components/jquery/dist/jquery.js']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('css', ['less']);
  grunt.registerTask('js', ['uglify']);

};