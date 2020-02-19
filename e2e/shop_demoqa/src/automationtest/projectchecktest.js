describe('Protractor Demo', function() {
    it('to check the page title', function() {
       browser.ignoreSynchronization = true;
       browser.get('http://shop.demoqa.com/');
       
          browser.driver.getTitle().then(function(pageTitle) {
                console.log(pageTitle);
                expect(pageTitle).toEqual('ToolsQA Demo Site – ToolsQA – Demo E-Commerce Site');
            });
       browser.sleep(1000);
      });
});