'use strict';

module.exports = function(config) {
  config.set({
    autoWatch : false,

    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-ng-html2js-preprocessor'
    ],

    ngHtml2JsPreprocessor: {
        moduleName: 'templates'
    }
  });
};
