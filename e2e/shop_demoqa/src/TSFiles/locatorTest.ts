import { element,by,browser, } from "protractor";

//import { Browser, browser } from "protractor";

describe('to find locator',function(){

    it('How repeater works',function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
        var first = element(by.model('first'));
        var second = element(by.model('second'));
        var operation = element(by.model('operator'));
        var opera = element(by.options("value for (key, value) in operators"))
        var gobutton = element(by.id("gobutton"));
        var history = element.all(by.repeater("result in memory"));

        add(5,6);

        add(5,7);
        add(5,8);

        add(5,9);

       /* history.row(0).column(0).getText().then(function(text){
            console.log(text);
        })*/
        history.count().then(function(rowcount){

            console.log("count????????****"+rowcount);

        })

       // expect(history.count()).toEqual(5);
        var firstCell= history.get(0).$$('td');
        firstCell.get(0).getText().then(function(txt){
            expect(txt).toEqual("bdbshu");
        })
        history.get(0).getText().then(function(txt){
            expect(txt).toEqual("sdsdsdsf");
        })

       // expect(history.first().get(0)).toEqual("2:00:29 PM");

        //console.log(countt);
        
        console.log("working")
       // console.log(history[0].getText());
       // console.log(countt);
        browser.sleep(5000);
        findHistory(history);
        browser.sleep(5000);
        function findHistory(row: any){
            row.each(function(row: any){
                var cells = row.$$('td');
                expect(cells.count()).toEqual("3");
                //console.log(cells.count());
                cells.get(1).getText().then(function(txt){
                    expect(txt).toEqual("5 + 6")
                })

            })
        }
        function add(a: any,b: any){
             var opt = "ADDITION";
            first.sendKeys(a);
            second.sendKeys(b);
            operation.$('[value='+opt+']').click();
            //opera.get(1).click();
            gobutton.click();

            browser.sleep(2000);

        }


    })



});