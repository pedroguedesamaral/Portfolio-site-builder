module.exports = {
    critical: {
        options: {
            width: 1080,
            height: 600,
            url: 'http://localhost:9000',
            outputfile: '<%= scaffold.tmp.assets %>/css/critical.css',
            filename: '<%= scaffold.tmp.path %>/concat/assets/css/main.css',
            buffer: 800*1024,
            ignoreConsole: true
        }
    }
};
