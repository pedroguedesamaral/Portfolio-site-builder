module.exports = {
    cave: {
        call: function(grunt, options) {
            var fs = require('fs'),
                cave = require('cave');

            fs.readFileSync('.tmp/assets/css/critical.css', 'utf8', function(error, data) {
                if (error) {
                    return console.log(error);
                }

                console.log(data);

                cave('.tmp/concat/assets/css/main.css', {
                    css: data
                });
            });
        }
    }
};
