/* global loadCSS, Blazy */

(function() {

    'use strict';

    loadCSS('//fonts.googleapis.com/css?family=Halant:300,500,700|Montserrat:400,700', document.getElementsByTagName('link')[0]);

    new Blazy();

    window.onload = function() {
        if (typeof window.Element === 'undefined' || 'classList' in document.documentElement) {
            document.body.classList.add('is-loaded');
        } else {
            document.body.className += ' is-loaded';
        }
    };

})();
