var config = require('../../nightwatch.conf.BASIC.js');

var envName = 'test';

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

    'Whole E2E Journey (Web)': function(browser){
        browser
        .url(config[envName].endPoint)
        .waitForElementVisible('body')
        .assert.title("Solenya Couture")
        .pause(2000)
        .waitForElementVisible('.productLabelContainer')
        .click('.productLabelContainer')
        .waitForElementVisible('.Dropdown-control')
        .assert.visible('.Dropdown-control')
        .waitForElementVisible('.webImageCarousel')
        .assert.visible('.webImageCarousel')
        .pause(2000)
        .getLocationInView('.productExtraInfo')
        .pause(2000)
        .click('.Dropdown-control')
        .pause(2000)
        .click('.Dropdown-control')
        .pause(2000)
        .getLocationInView('.webImageCarousel')
        .pause(2000)
        .click('.logoLink')
        .pause(2000)
        .assert.visible('.productLabelContainer')
        .end()
    },

    'Product image takes to the product details page and back to home with team name link (Web)': function(browser) {
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
        .assert.visible('.productLabelContainer')
        .end()
    },

    'Product image takes to the product details page and back to home with product link (Web)': function(browser) {
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

    'Product image takes to the product details page and back to home with logo link (Web)': function(browser) {
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

    'Product image takes to the product details page and clicks the carousel (Web)': function(browser) {
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
  