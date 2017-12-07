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

module.exports = {

    beforeEach : function (browser) {
        browser.resizeWindow(1280, 800);
      }, 

    'Solenya Couture renders': function(browser) {
         browser
            .url(config[envName].endPoint)
            .assert.title("Solenya Couture")
            .end()
    },
    
    'Product image takes to the product details page and back to home with team name link': function(browser) {
        browser
        .url(config[envName].endPoint)
        .waitForElementVisible('body')
        .pause(500)
        .waitForElementVisible('.productLabelContainer')
        .click('.productLabelContainer')
        .waitForElementVisible('.webImageCarousel')
        .assert.visible('.webImageCarousel')
        .waitForElementVisible('.nameLink')
        .pause(1000)
        .click('.nameLink')
        .pause(1000)
        .end()
    },

    'Product image takes to the product details page and back to home with product link': function(browser) {
        browser
        .url(config[envName].endPoint)
        .waitForElementVisible('body')
        .pause(500)
        .waitForElementVisible('.productLabelContainer')
        .click('.productLabelContainer')
        .waitForElementVisible('.webImageCarousel')
        .assert.visible('.webImageCarousel')
        .waitForElementVisible('.webHomeLink')
        .pause(1000)
        .click('.webHomeLink')
        .pause(1000)
        .end()
    },
    'Product image takes to the product details page and back to home with logo link': function(browser) {
        browser
        .url(config[envName].endPoint)
        .waitForElementVisible('body')
        .pause(500)
        .waitForElementVisible('.productLabelContainer')
        .click('.productLabelContainer')
        .waitForElementVisible('.webImageCarousel')
        .assert.visible('.webImageCarousel')
        .waitForElementVisible('.logoLink')
        .pause(1000)
        .click('.logoLink')
        .pause(1000)
        .end()
    },
    'Product image takes to the product details page and clicks the carousel': function(browser) {
        browser
        .url(config[envName].endPoint)
        .waitForElementVisible('body')
        .pause(500)
        .waitForElementVisible('.productLabelContainer')
        .click('.productLabelContainer')
        .waitForElementVisible('.webImageCarousel')
        .assert.visible('.webImageCarousel')
        .waitForElementVisible('.webImageCarousel > .slider .slider-decorator-1')
        .click('.webImageCarousel > .slider > .slider-decorator-1')
        .pause(1000)
        .end()
    }
  };
  