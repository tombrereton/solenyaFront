var config = require('../../nightwatch.conf.BASIC.js');

var envName = 'dev';

var config = {
    dev: {
        endPoint: "http://team-solenya-rg-dev-client.azurewebsites.net"
    },
    test: {
        endPoint: "http://team-solenya-rg-test-client.azurewebsites.net/"
        },
    preProd: {
        endPoint: "http://team-solenya-rg-pre-prod-client.azurewebsites.net/"
        },
    prod: {
        endPoint: "http://team-solenya-rg-prod-client.azurewebsites.net/"
        }
}

module.exports = { // adapted from: https://git.io/vodU0
    'Solenya Couture End To End': function(browser) {
      browser
        .url(config[envName].endPoint)
        .waitForElementVisible('body')
        .assert.title("Solenya Couture")
        .end()
    }
  };
  