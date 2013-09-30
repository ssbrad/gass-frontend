module.exports = {

/*
|--------------------------------------------------------------------------
|
| BOWER INSTALL
|
|--------------------------------------------------------------------------
*/

	watch: {
		css: {
			files: [

				'*.css',
				'**/*.css',
				'<%= project.dist.css %>/*.css',
				'<%= project.dist.css %>/distlication.css',

				'*.js',
				'**/*.js',
				'<%= project.dist.js %>/*.js',
				'<%= project.dist.js %>/dist.js',
				'<%= project.dist.js %>/dist.min.js',

				'<%= project.src.js %>/*.js',
				'<%= project.src.js %>/**/*.js',
				'<%= project.src.js %>/core.js',
				'<%= project.src.js %>/home.js',

				'*.png',
				'**/*.png',
				'<%= project.dist.img %>/*.png',
				'<%= project.dist.img %>/**/*.png',

				'*.jpg',
				'**/*.jpg',
				'<%= project.dist.img %>/*.jpg',
				'<%= project.dist.img %>/**/*.jpg',

				'*.php',
				'**/*.php'

			],
			options: {
				livereload: true,
			}
			// tasks: ['compass'],
		}
	}

};

