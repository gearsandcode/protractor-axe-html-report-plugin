var env = require('./environment.js');

exports.config = {
  ...env,
  framework: 'jasmine',
  specs: ['fail_spec.js'],
  plugins: [{
    path: '../index.js',
    ignoreAxeFailures: true,
    htmlReportPath: 'reports',
    displayHelpUrl: true,
    displayContext: true,
    displayPasses: true,
    displayViolations: true,
    standardsToReport: []
  }]
};
