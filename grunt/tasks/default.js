module.exports = function (grunt) {
    grunt.registerTask('default', [
        'clean:staging',
        'copy:staging',
        'less:staging',
        'autoprefixer:staging',
        'assemble:staging',
        'prettify',
        'wiredep:staging',
        'browserSync:staging',
        'watch'
    ]);
};
