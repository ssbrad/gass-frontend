module.exports = {

/*
|--------------------------------------------------------------------------
|
| REQUIRE JS
| <%=  %>
|--------------------------------------------------------------------------
*/

	requirejs: {
		compile: {
			options: {
				baseUrl: 'path/to/base',
				mainConfigFile: 'path/to/config.js',
				out: 'path/to/optimized.js'
			}
		}
	}

};
