module.exports = function(config) {
  config.set({
    basePath: ''
  , frameworks: ['jasmine']
  , files: ['tests/setup.js']
  , exclude: []
  , plugins: [
      'karma-webpack'
    , 'karma-jasmine'
    , 'karma-firefox-launcher'
    , 'karma-chrome-launcher'
    , 'karma-phantomjs-launcher'
    , 'karma-html-reporter'
    ]
  , preprocessors: {
     "tests/setup.js": ['webpack']
    }
  , reporters: ['progress']
  , port: 9876
  , colors: true
  , logLevel: config.LOG_INFO
  , autoWatch: true
  , browsers: ['FirefoxNightly', 'Chrome', 'PhantomJS']
  , singleRun: false
  , concurrency: Infinity
  , webpack: {
      module: {
        loaders: [{
          loaders: ['babel?cacheDirectory'],
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
        }]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    },
    htmlReporter: {
      outputDir: 'karma_html', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'report-summary-filename', // report summary filename; browser info by default
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    }
  });
}
