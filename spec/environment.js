var puppeteer = require('puppeteer');

// Common configuration files with defaults plus overrides from environment vars
var webServerDefaultPort = 8081;

module.exports = {

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName':
      (process.env.TEST_BROWSER_NAME || 'chrome'),
    'version':
      (process.env.TEST_BROWSER_VERSION || 'ANY'),
    'goog:chromeOptions': {
      binary: puppeteer.executablePath(),
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  },

  // Default http port to host the web server
  webServerDefaultPort: webServerDefaultPort,

  // Protractor interactive tests
  interactiveTestPort: 6969,

  // A base URL for your application under test.
  baseUrl:
    'http://' + (process.env.HTTP_HOST || 'localhost') +
    ':' + (process.env.HTTP_PORT || webServerDefaultPort),

  directConnect: true
};