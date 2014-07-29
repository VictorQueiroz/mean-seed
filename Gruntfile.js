module.exports = function(grunt) {
	'use strict';

  // require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

	require('load-grunt-tasks')(grunt);

	var paths = {};
	paths.public = 'public';
	paths.views = 'app/views';
	paths.partials = paths.views + '/partials';
	paths.models = 'app/models';
	paths.src = 'src';
	paths.routes = 'app/routes';

	grunt.initConfig({
		paths: paths,

		pkg: grunt.file.readJSON('package.json'),

    ngtemplates: {
    	jshint: {
    	},

      partials: {
        src: '<%= paths.partials %>/**/{,*/}*.html',
        dest: '<%= paths.src %>/js/partials.js',
        options: {
          prefix: '',
          url: function(url) { return url.replace('app/views/partials/', ''); },
          standalone: true,
          htmlmin: {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true, // Only if you don't use comment directives!
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          }
        }
      }
    },		

		concat: {
			options: {
				separator: ';'
			},

			dist: {
				src: ['<%= paths.src %>/js/**/{,*/}*.js'],
				dest: '<%= paths.public %>/js/base.min.js'
			}			
		},

		uglify: {
			options: {
				mangle: false,
				beautify: true
			},

			my_target: {
				files: {
					'<%= paths.public %>/js/base.min.js': ['<%= paths.public %>/js/base.min.js']
				}
			}
		},

		sass: {
			dist: {
				options: {},
				files: {
					'<%= paths.public %>/css/style.min.css': ['<%= paths.src %>/scss/master.scss']
				}
			}
		},

		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					nodeArgs: ['--debug'],
					env: {
						PORT: 3000
					},
				}
			}
		},

		watch: {
			js: {
				files: [
					'<%= paths.src %>/**/{,*/}*.js',
					'<%= paths.partials %>/**/{,*/}*.html'
				],
				tasks: ['js'],
				options: {
					livereload: true
				}
			},
		},

		concurrent: {
			target: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}

	});

	grunt.registerTask('js', ['ngtemplates', 'concat', 'uglify']);
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('default', ['js', 'css', 'concurrent']);
}