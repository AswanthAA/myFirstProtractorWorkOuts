class loginPageObjectPattern{

    
    getbrowser(){
        browser.ignoreSynchronization = true;
        var loadSite = browser.get('http://shop.demoqa.com/');
        return loadSite;
    }

    getMyAccount(){
       
        return (element(by.partialLinkText('Account')));
    }





}




