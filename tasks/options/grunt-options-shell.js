module.exports = {

/*
|--------------------------------------------------------------------------
|
| SHELL
|
|--------------------------------------------------------------------------
*/

	shell: {                                // Task
		listFolders: {                      // Target
			options: {                      // Options
				stdout: true
			},
			command: 'echo <%= cleanupDirs %>'
		}
	}

};
