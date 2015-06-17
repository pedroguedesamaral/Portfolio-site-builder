module.exports = {
    options:{
        cssmin: true,
        tag: 'inline'
    },
    critical: {
        expand: true,
        cwd: '<%= scaffold.build.path %>',
        dest: '<%= scaffold.build.path %>',
        src: ['**/*.html']
    }
};
