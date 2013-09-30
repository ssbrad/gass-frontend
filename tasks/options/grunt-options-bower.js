module.exports = {

/*
|--------------------------------------------------------------------------
|
| BOWER INSTALL
| <%=  %>
|--------------------------------------------------------------------------
*/

		bower: {
			install: {
				options: {
					cleanup: false,
					copy: true,
					install: true,
					layout: 'byType',
					targetDir: '<%= project.src.vendor %>',
					verbose: false
				}
			}
		}

};
