"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SuperCalculatorPage {
}
exports.SuperCalculatorPage = SuperCalculatorPage;
SuperCalculatorPage.superCalculatorSite = "https://juliemr.github.io/protractor-demo/";
SuperCalculatorPage.firstNumber = protractor_1.element(protractor_1.by.model('first'));
SuperCalculatorPage.secondNumber = protractor_1.element(protractor_1.by.model('second'));
SuperCalculatorPage.operation = protractor_1.element(protractor_1.by.model('operator'));
SuperCalculatorPage.opera = protractor_1.element(protractor_1.by.options("value for (key, value) in operators"));
SuperCalculatorPage.gobutton = protractor_1.element(protractor_1.by.id("gobutton"));
SuperCalculatorPage.history = protractor_1.element.all(protractor_1.by.repeater("result in memory"));
//public static currentResult = element(by.css('.ng-binding'));
SuperCalculatorPage.currentResult = protractor_1.element(protractor_1.by.xpath("/html/body/div/div/form/h2"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwZXJDYWxjdWxhdG9yLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUGFnZU9iamVjdE1vZGVsU3R1ZHlDYWxjdWxhdG9yL1BPL1N1cGVyQ2FsY3VsYXRvci5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUV6QyxNQUFhLG1CQUFtQjs7QUFBaEMsa0RBZ0JDO0FBZGlCLHVDQUFtQixHQUFHLDRDQUE0QyxDQUFDO0FBRW5FLCtCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDekMsZ0NBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMzQyw2QkFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzFDLHlCQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQTtBQUNsRSw0QkFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLDJCQUFPLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDckUsK0RBQStEO0FBRWpELGlDQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyJ9