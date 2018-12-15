var conf = require('../../nightwatch.conf.js');

module.exports = {
  before: function(browser) {
    console.log('Minicart Smoke Tests');
    browser
      .maximizeWindow()
      .url('https://sheltered-tor-18362.herokuapp.com/')
      .useXpath()
      .waitForElementVisible(products.HEADER)
      .assert.containsText(products.HEADER, 'Minicart');
  },

  after: function(browser) {
    browser.end();
  },

  'All Products are displayed': function (browser) {
    browser
      .assert.visible(products.CHERRY, "Cherry is Present")
      .assert.visible(products.ORGANICCHERRY, "Organic Cherry is Present")
      .assert.visible(products.ORANGE, "Orange is Present")
      .assert.visible(products.CLEMENTINE, "Clementine is Present")
      .assert.visible(products.NUTS, "Nuts are Present")
      .assert.visible(products.STRAWBERRY, "Strawberry is Present")
      .assert.visible(products.STRAWBERRYPIECES, "Strawberry pieces are Present");
   },

   'All Products are clickable': function (browser) {
     clickCompareRemoveButton(browser, products.CHERRY);
     browser.assert.containsText(products.CHERRY+products.CompareRemoveButton, 'REMOVE', "Cherry is comparable");
     clickCompareRemoveButton(browser, products.ORGANICCHERRY);
     browser.assert.containsText(products.ORGANICCHERRY+products.CompareRemoveButton, 'REMOVE', "Organic Cherry is comparable");
     clickCompareRemoveButton(browser, products.ORANGE);
     browser.assert.containsText(products.ORANGE+products.CompareRemoveButton, 'REMOVE', "Orange is comparable");
     clickCompareRemoveButton(browser, products.CLEMENTINE);
     browser.assert.containsText(products.CLEMENTINE+products.CompareRemoveButton, 'REMOVE', "Clementine is comparable");
     clickCompareRemoveButton(browser, products.NUTS);
     browser.assert.containsText(products.NUTS+products.CompareRemoveButton, 'REMOVE', "Nuts are comparable");
     clickCompareRemoveButton(browser, products.STRAWBERRY);
     browser.assert.containsText(products.STRAWBERRY+products.CompareRemoveButton, 'REMOVE', "Strawberry is comparable");
     clickCompareRemoveButton(browser, products.STRAWBERRYPIECES);
     browser.assert.containsText(products.STRAWBERRYPIECES+products.CompareRemoveButton, 'REMOVE', "Strawberry Pieces are comparable");
    },



  };

  function clickCompareRemoveButton(browser, selector) {
    browser
     .moveToElement(selector, 50, 50)
     .waitForElementVisible(selector+products.CompareRemoveButton)
     .click(selector+products.CompareRemoveButton);
  };

  var products = {
    'allProductNames' : '//div[@class="product_name"]',
    'CompareRemoveButton' : '//div[@class="view_details"]',
    'HEADER' : '//h2[text()="Minicart"]',
    'CHERRY' : '//*[@id="root"]/div/div/div/div[2]/div[1]/div',
    'ORGANICCHERRY' : '//*[@id="root"]/div/div/div/div[2]/div[2]',
    'ORANGE' : '//*[@id="root"]/div/div/div/div[2]/div[3]',
    'CLEMENTINE' : '//*[@id="root"]/div/div/div/div[2]/div[4]',
    'NUTS' : '//*[@id="root"]/div/div/div/div[2]/div[5]',
    'STRAWBERRY' : '//*[@id="root"]/div/div/div/div[2]/div[6]',
    'STRAWBERRYPIECES' : '//*[@id="root"]/div/div/div/div[2]/div[7]'
    // 'CHERRY' :
    // 'CHERRY' :
  };
