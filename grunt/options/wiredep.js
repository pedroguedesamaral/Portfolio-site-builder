module.exports = {
    options: {
        exclude: []
    },
    staging: {
        src: ['<%= scaffold.staging.path %>/**/*.html']
    },
    build: {
        src: ['<%= scaffold.build.path %>/**/*.html']
    }
};
