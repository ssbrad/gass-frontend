module.exports = {

/*
|--------------------------------------------------------------------------
|
| AUTOPREFIXER
|
|--------------------------------------------------------------------------
*/


  /**
  * Autoprefixer
  * Adds vendor prefixes if need automatcily
  * https://github.com/nDmitry/grunt-autoprefixer
  */

  autoprefixer: {
    options: {
    browsers: [
      'last 2 version',
      'safari 6',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
        ]
      },
      dev: {
        files: {
          '<%= project.assets %>/css/style.min.css': ['<%= project.assets %>/css/style.unprefixed.css']
        }
      },
      dist: {
        files: {
          '<%= project.assets %>/css/style.prefixed.css': ['<%= project.assets %>/css/style.unprefixed.css']
        }
      }
    },
};
