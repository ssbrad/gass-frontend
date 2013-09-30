module.exports = {

/*
|--------------------------------------------------------------------------
|
| CONCAT
|
|--------------------------------------------------------------------------
*/

	/**
	* Concatenate JavaScript files
	* https://github.com/gruntjs/grunt-contrib-concat
	* Imports all .js files and appends project banner
	*/
	concat: {
		dev: {
			files: {
				'<%= project.dist.js %>/dist.js': [
					// Inputs
					'src/input1.js',
					'src/input2.js'
				]
			}
		},

		options: {
			stripBanners: true,
			nonull: true,
			banner: '<%= banner %>'
		}
	}


};
