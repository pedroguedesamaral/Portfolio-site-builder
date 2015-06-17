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
        'copy:build',
        'uncss',
        'criticalcss',
        'execute',
        'inline',
        'cssmin',
        'imagemin',
        'imageEmbed',
        'rev',
        'usemin',
        'htmlmin',
        'clean:tmp'
    ]);
};
