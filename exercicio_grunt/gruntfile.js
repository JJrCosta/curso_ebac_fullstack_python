module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJASON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        }
    })
}

grunt.registerTask('nomeDaTarefa', function() {
    const done = this.async();

})

grunt.loadNpmTasks('grunt-contrib-less');

grunt.registerTask('default', ['less']);