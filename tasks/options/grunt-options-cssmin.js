module.exports = {

/*
|--------------------------------------------------------------------------
|
| CSSMIN
|
|--------------------------------------------------------------------------
*/

	cssmin: {
		prod: {
			options: {
				banner: '<%= banner %>'
			},
			files: {
				'<%= project.dist.css %>/app.min.css': [
					'<%= project.dist.css %>/application.css'
				],
				'<%= project.dist.css %>/normalize.min.css': [
					'<%= project.dist.css %>/normalize.css'
				]
			}
		}
	}


};
