module.exports = function(grunt) {
  
  grunt.initConfig({
    watch: {
      src: {
        files: ['app/*'],
        tasks: ['requirejs']
      },
      style: {
        files: ['app/style/main.scss'],
        tasks: ['sass','autoprefixer','requirejs']
      }
    },
    sass: {
      dist: {
        files: {
          'app/style/main.css': 'app/style/main.scss'
        }
      }
    },
    autoprefixer: {
      single_file: {
        src: 'app/style/main.css',
        dest: 'app/style/common.css'
      }
    },
    requirejs: {
      compile: {
        options: {
          appDir: 'app/',
          baseUrl: '.',
          dir: 'dist/',
          mainConfigFile: 'app/config.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default',['watch']);
}