//import { browser } from "protractor";

describe('to check login functionlity', function() {
    
    var myAccount = element(by.xpath('/html/body/div[2]/header/div[1]/div/ul[2]/li[2]/a'));   
    //var myAccount = element(by.linkText('My Account'));

    var username = 'dcbaaswanth';
    var email = 'dcbaaswanth@qaa.com';
    var password = 'dcbaaswanth!1';

    function wordMaker(){
        username = username + 'a';
        email = 'a'+email;
        password = password + '1'; 
    }

    //var myAccount = element(by.partialLinkText('Account'));
    
    var loginUsername = element(by.id('username'));
    var loginPassword = element(by.id('password'));
    var loginButton = element(by.name('login'));
    var registerUsername = element(by.id('reg_username'));
    var registerEmail = element(by.id('reg_email'));
    var registerPassword = element(by.id('reg_password'));
    var registerButton = element(by.name('register'));

    var toCheckLoginSuccessful = element(by.xpath('//*[@id="post-8"]/div/div/div/p[1]/strong[1]'));
    //wordMaker();
    beforeEach(function(){
       //
       
       console.log(username+" "+email+" "+password );
        browser.ignoreSynchronization = true;

        browser.driver.get('http://shop.demoqa.com/');
        browser.driver.sleep(500);
        var width = 800;
        var height = 600;
        //browser.driver.manage().window().setPosition(width, height);
        browser.driver.manage().window().maximize();
        browser.executeScript('window.scrollTo(0,1000);')
            
    });
    
    afterAll(function() {
        browser.quit();
    });
        
    
    it('register',function(){

        myAccount.click();
        browser.driver.getTitle().then(function(pageTitle){
            expect(pageTitle).toEqual('My Account – ToolsQA Demo Site');
        });
        registerUsername.sendKeys(username);
        registerEmail.sendKeys(email);
        registerPassword.sendKeys(password);
        registerButton.click();
        browser.driver.sleep(200);
        browser.driver.getTitle().then(function(pageTitle){
            expect(pageTitle).toEqual('Log In ‹ ToolsQA Demo Site — WordPress');
        });

    });

    it('try to login', function() {
        
        browser.driver.sleep(2000);
        myAccount.click();
        browser.driver.getTitle().then(function(pageTitle){
            expect(pageTitle).toEqual('My Account – ToolsQA Demo Site');
        });
        browser.driver.sleep(200);
        loginUsername.sendKeys(email);
        loginPassword.sendKeys(password);
        loginButton.click();
        browser.driver.sleep(5000);
        toCheckLoginSuccessful.getText().then(function(text){
            expect(text).toEqual(username); 
        });

        
    });
        
});
    