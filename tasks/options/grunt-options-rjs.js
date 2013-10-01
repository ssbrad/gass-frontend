module.exports = {

    requirejs: {
        compile: {
            options: {
                name: 'main',
                baseUrl: '<%= project.dev.js %>',
                mainConfigFile: '<%= project.dev.js %>/config.js',
                out: '<%= project.dist.js %>/app.dist.js'
            }
        }
    }


};
