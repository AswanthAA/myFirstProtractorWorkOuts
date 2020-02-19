"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
//import { Browser, browser } from "protractor";
describe('to find locator', function () {
    it('How repeater works', function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        var first = protractor_1.element(protractor_1.by.model('first'));
        var second = protractor_1.element(protractor_1.by.model('second'));
        var operation = protractor_1.element(protractor_1.by.model('operator'));
        var opera = protractor_1.element(protractor_1.by.options("value for (key, value) in operators"));
        var gobutton = protractor_1.element(protractor_1.by.id("gobutton"));
        var history = protractor_1.element.all(protractor_1.by.repeater("result in memory"));
        add(5, 6);
        add(5, 7);
        add(5, 8);
        add(5, 9);
        /* history.row(0).column(0).getText().then(function(text){
             console.log(text);
         })*/
        history.count().then(function (rowcount) {
            console.log("count????????****" + rowcount);
        });
        // expect(history.count()).toEqual(5);
        var firstCell = history.get(0).$$('td');
        firstCell.get(0).getText().then(function (txt) {
            expect(txt).toEqual("bdbshu");
        });
        history.get(0).getText().then(function (txt) {
            expect(txt).toEqual("sdsdsdsf");
        });
        // expect(history.first().get(0)).toEqual("2:00:29 PM");
        //console.log(countt);
        console.log("working");
        // console.log(history[0].getText());
        // console.log(countt);
        protractor_1.browser.sleep(5000);
        findHistory(history);
        protractor_1.browser.sleep(5000);
        function findHistory(row) {
            row.each(function (row) {
                var cells = row.$$('td');
                expect(cells.count()).toEqual("3");
                //console.log(cells.count());
                cells.get(1).getText().then(function (txt) {
                    expect(txt).toEqual("5 + 6");
                });
            });
        }
        function add(a, b) {
            var opt = "ADDITION";
            first.sendKeys(a);
            second.sendKeys(b);
            operation.$('[value=' + opt + ']').click();
            //opera.get(1).click();
            gobutton.click();
            protractor_1.browser.sleep(2000);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UU0ZpbGVzL2xvY2F0b3JUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBRWpELGdEQUFnRDtBQUVoRCxRQUFRLENBQUMsaUJBQWlCLEVBQUM7SUFFdkIsRUFBRSxDQUFDLG9CQUFvQixFQUFDO1FBQ3BCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDMUQsSUFBSSxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQTtRQUN0RSxJQUFJLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLE9BQU8sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUUzRCxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVQsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNULEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFVCxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVY7O2FBRUs7UUFDSixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLENBQUMsQ0FBQyxDQUFBO1FBRUgsc0NBQXNDO1FBQ3JDLElBQUksU0FBUyxHQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRztZQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO1lBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUE7UUFFSCx3REFBd0Q7UUFFdkQsc0JBQXNCO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkIscUNBQXFDO1FBQ3JDLHVCQUF1QjtRQUN0QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsU0FBUyxXQUFXLENBQUMsR0FBUTtZQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBUTtnQkFDdEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkMsNkJBQTZCO2dCQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUc7b0JBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFBO1lBRU4sQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBQ0QsU0FBUyxHQUFHLENBQUMsQ0FBTSxFQUFDLENBQU07WUFDckIsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsdUJBQXVCO1lBQ3ZCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVqQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixDQUFDO0lBR0wsQ0FBQyxDQUFDLENBQUE7QUFJTixDQUFDLENBQUMsQ0FBQyJ9