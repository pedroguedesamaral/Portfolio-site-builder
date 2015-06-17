module.exports = {
    dist: {
        options: {
            ignore: [
                '.b-lazy',
                '.b-lazy.b-loaded',
                'body.is-loaded .main-header',
                'body.is-loaded .page-header',
                'body.is-loaded .main-footer'
            ],
            stylesheets: ['<%= scaffold.tmp.path %>/concat/assets/css/main.css'],
            csspath: '../'
        },
        files: {
            '<%= scaffold.tmp.path %>/concat/assets/css/main.css': ['<%= scaffold.build.path %>/index.html']
        }
    }
};
