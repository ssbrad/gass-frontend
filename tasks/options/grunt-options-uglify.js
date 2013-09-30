module.exports = {

/*
|--------------------------------------------------------------------------
|
| UGLIFY
|
|--------------------------------------------------------------------------
*/

	uglify: {
		options: {
			// the banner is inserted at the top of the output
			banner: '<%= banner %>'
		},
		dist: {
			files: {
				// Output
				'<%= project.dist.js %>/app.min.js': [
					// Inputs
					'<%= project.dist.js %>/app.js'
				]
			}
		}
	}

};
