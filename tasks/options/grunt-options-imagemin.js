module.exports = {


// `optimizationLevel` is only applied to PNG files (not JPG)
    imagemin: {
        png: {
            options: {
                optimizationLevel: 7
            },

            files:
            [{
                expand: true,
                cwd: './app/images/',
                src: ['**/*.png'],
                dest: './app/images/compressed/',
                ext: '.png'
            }]
        },

        jpg: {
            options: {
                progressive: true
            },

            files:
            [{
                expand: true,
                cwd: './app/images/',
                src: ['**/*.jpg'],
                dest: './app/images/compressed/',
                ext: '.jpg'
            }]
        }
    }

};
