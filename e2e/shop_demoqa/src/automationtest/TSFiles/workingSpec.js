"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('to find locator', function () {
    it('How repeater works', function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        var first = protractor_1.element(protractor_1.by.model('first'));
        var second = protractor_1.element(protractor_1.by.model('second'));
        var operation = protractor_1.element(protractor_1.by.model('operator'));
        var opera = protractor_1.element(protractor_1.by.options("value for (key, value) in operators"));
        var gobutton = protractor_1.element(protractor_1.by.id("gobutton"));
        var history = protractor_1.element.all(protractor_1.by.repeater("result in memory"));
        var result = protractor_1.element(protractor_1.by.xpath("/html/body/div/div/form/h2"));
        add(5, 7);
        result.getText().then(function (text) {
            expect(text).toEqual("12");
        });
        function add(a, b) {
            first.sendKeys(a);
            second.sendKeys(b);
            operation.$('[value="ADDITION"]').click();
            //opera.get(1).click();
            gobutton.click();
            protractor_1.browser.sleep(2000);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2luZ1NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UU0ZpbGVzL3dvcmtpbmdTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBRWxELFFBQVEsQ0FBQyxpQkFBaUIsRUFBQztJQUV2QixFQUFFLENBQUMsb0JBQW9CLEVBQUM7UUFDcEIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUMxRCxJQUFJLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLElBQUksUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksT0FBTyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDN0QsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFFRixTQUFTLEdBQUcsQ0FBQyxDQUFNLEVBQUMsQ0FBTTtZQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLHVCQUF1QjtZQUN2QixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFakIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIsQ0FBQztJQUVMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==