module.exports = {
    options: {
        optimizationLevel: 7
    },
    build: {
        files: [{
            expand: true,
            cwd: '<%= scaffold.build.path %>',
            src: '**/*.{png,jpg,gif}',
            dest: '<%= scaffold.build.path %>'
        }]
    }
};
