module.exports = {

/*
|--------------------------------------------------------------------------
|
| COPY
|
|--------------------------------------------------------------------------
*/
	copy: {


		// JS ONLY
		temp_js: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: ['**/*.js'],
					dest: '<%= project.temp.js %>'
				}
			]
		},


		// JS ONLY
		js: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: ['**/*.js'],
					dest: '<%= project.src.js %>'
				}
			]
		},

		// SASS ONLY
		temp_sass: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: [
						'**/*.scss',
						'**/*.sass'
					],
					dest: '<%= project.temp.sass %>'
				}
			]
		},


		// SASS ONLY
		sass: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: [
						'**/*.scss',
						'**/*.sass'
					],
					dest: '<%= project.src.sass %>'
				}
			]
		},


		// CSS ONLY
		temp_css: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: [
						'**/*.css'
					],
					dest: '<%= project.temp.css %>'

				}
			]
		},


		// CSS ONLY
		css: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: [
						'**/*.css'
					],
					dest: '<%= project.src.css %>'

				}
			]
		},



		// IMG ONLY
		temp_img: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: [
						'**/*.jpg',
						'**/*.png',
						'**/*.gif'
					],
					dest: '<%= project.temp.img %>'
				}

			]
		},

		// IMG ONLY
		img: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: [
						'**/*.jpg',
						'**/*.png',
						'**/*.gif'
					],
					dest: '<%= project.src.img %>'
				}

			]
		},

		// WEBFONTS ONLY
		temp_fonts: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: [
						'**/*.ttf',
						'**/*.eot',
						'**/*.svg',
						'**/*.woff'
					],
					dest: '<%= project.temp.fonts %>'
				}

			]
		},

		// WEBFONTS ONLY
		fonts: {
			files: [
				{
					expand: true,
					cwd: '<%= project.src.vendor %>/',
					src: [
						'**/*.ttf',
						'**/*.eot',
						'**/*.svg',
						'**/*.woff'
					],
					dest: '<%= project.src.fonts %>'
				}

			]
		}


	}
};
