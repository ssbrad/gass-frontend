module.exports = {


	watch: {

		all: {
			files: [
				// compiled css / js
				'<%= project.dist.css %>/app.css',
				'<%= project.dist.css %>/*.css',
				'<%= project.dist.css %>/**/*.css',
				'<%= project.dist.js %>/app.dist.js',
				'<%= project.dist.js %>/*.js',
				'<%= project.dist.js %>/**/*.js',



				// dev js
				'<%= project.dev.js %>/config.js',
				'<%= project.dev.js %>/main.js',
				'<%= project.dev.js %>/devtools/*.js',
				'<%= project.dev.js %>/devtools/**/*.js',
				'<%= project.dev.js %>/modules/*.js',
				'<%= project.dev.js %>/modules/**/*.js',
				'<%= project.dev.js %>/libs/*.js',
				'<%= project.dev.js %>/libs/**/*.js',

				// '<%= project.dev.js %>/vendor/*.js',
				// '<%= project.dev.js %>/vendor/**/*.js',

				// pages
				'*.php',
				'**/*.php'

			],
			options: {
				livereload: true,
			},
		},

//|------------------------------------------------------------------------------------------------------------------------------

		css: {
			files: [
				'<%= project.dist.css %>/app.css',
				'<%= project.dist.css %>/*.css',
				'<%= project.dist.css %>/**/*.css',
			],
			// tasks: [
			//	'compass'
			// ],
			options: {
				livereload: true,
			}
		},

		js: {
			files: [
				'<%= project.src.js %>/config.js',
				'<%= project.src.js %>/main.js',
				'<%= project.src.js %>/modules/*.js',
				'<%= project.src.js %>/modules/**/*.js'
			],
			tasks: [
				'compile'
			],
			options: {
				livereload: false,
			},
		},

		jsdist: {
			files: [
				'<%= project.dist.js %>/app.dist.js',
				'<%= project.dist.js %>/*.js',
				'<%= project.dist.js %>/**/*.js',
			],
			options: {
				livereload: true,
			},
		},

	}

};

