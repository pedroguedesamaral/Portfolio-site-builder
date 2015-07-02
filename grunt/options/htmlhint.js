module.exports = {
    staging: {
        options: {
            htmlhintrc: '.htmlhintrc',
            force: true
        },
        src: [
            '<%= scaffold.staging.path %>/**/*.html',
            '!<%= scaffold.staging.path %>/{projects,includes,tpl,hbs}/**/*.html',
            '!<%= scaffold.staging.assets %>/bower/**/*.html'
        ]
    }
};
