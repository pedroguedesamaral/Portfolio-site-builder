module.exports = function (grunt) {
    grunt.registerTask('build', [
        'clean:build',
        'copy:build',
        'less:build',
        'cmq',
        'autoprefixer:build',
        'svgmin',
        'json-minify',
        'assemble:build',
        'wiredep:build',
        'useminPrepare',
        'concat',
        'uglify',
        'copy:build',
        'cssmin',
        'imagemin',
        'imageEmbed',
        'rev',
        'usemin',
        'htmlmin',
        'clean:tmp'
    ]);
};
