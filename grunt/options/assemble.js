module.exports = {
    options: {
        layoutdir: '<%= scaffold.dev.templates %>',
        layoutext: '.html',
        layout: 'default',
        partials: ['<%= scaffold.dev.projects %>/**/*.html'],
        flatten: true
    },
    staging: {
        expand: true,
        cwd: '<%= scaffold.dev.path %>',
        dest: '<%= scaffold.staging.path %>',
        src: [
            '**/*.html',
            '!templates/**/*',
            '!projects/**/*'
        ]
    },
    build: {
        expand: true,
        cwd: '<%= scaffold.dev.path %>',
        dest: '<%= scaffold.build.path %>',
        src: [
            '**/*.html',
            '!templates/**/*',
            '!projects/**/*'
        ]
    }
};
