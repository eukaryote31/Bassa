'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    reporters: ['spec'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        "karma-spec-reporter"
    ]
  });
};
