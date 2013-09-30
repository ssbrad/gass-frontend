module.exports = {

/*
|--------------------------------------------------------------------------
|
| COPY
|
|--------------------------------------------------------------------------
*/

	copy: {
		vendor: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>',
					src: [
						'<%= vendor.js %>'
					],
					dest: '<%= project.src.js %>/vendor'
				}
			]
		}
	}
};
