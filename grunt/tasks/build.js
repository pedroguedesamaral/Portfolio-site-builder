module.exports = function (grunt) {
    grunt.registerTask('build', [
        'clean:build',
        'copy:buildHtml',
        'less:build',
        'cmq',
        'autoprefixer:build',
        'svgmin',
        'json-minify',
        'wiredep:build',
        'useminPrepare',
        'concat',
        'uglify',
        'csso',
        'copy:build',
        'cssmin',
        'imageoptim',
        'imageEmbed',
        'rev',
        'usemin',
        'htmlmin',
        'compress',
        'clean:tmp'
    ]);
};
