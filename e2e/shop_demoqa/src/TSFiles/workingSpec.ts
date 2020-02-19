import { browser, element, by } from "protractor";

describe('to find locator',function(){

    it('How repeater works',function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
        var first = element(by.model('first'));
        var second = element(by.model('second'));
        var operation = element(by.model('operator'));
        var opera = element(by.options("value for (key, value) in operators"))
        var gobutton = element(by.id("gobutton"));
        var history = element.all(by.repeater("result in memory"));
        var result = element(by.xpath("/html/body/div/div/form/h2"));
        add(5,7);
        result.getText().then(function(text){
            expect(text).toEqual("12");
        })

        function add(a: any,b: any){
            first.sendKeys(a);
            second.sendKeys(b);
            operation.$('[value="ADDITION"]').click();
            //opera.get(1).click();
            gobutton.click();

            browser.sleep(2000);

        }

    })
})