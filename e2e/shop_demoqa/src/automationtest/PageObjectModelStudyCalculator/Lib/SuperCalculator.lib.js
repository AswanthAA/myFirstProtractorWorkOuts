"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuperCalculator_po_1 = require("../PO/SuperCalculator.po");
const protractor_1 = require("protractor");
class SuperCalculatorLib {
    static add(a, b) {
        SuperCalculator_po_1.SuperCalculatorPage.firstNumber.sendKeys(a);
        SuperCalculator_po_1.SuperCalculatorPage.operation.$('[value = "ADDITION"]').click();
        SuperCalculator_po_1.SuperCalculatorPage.secondNumber.sendKeys(b);
        SuperCalculator_po_1.SuperCalculatorPage.gobutton.click();
    }
    static subtraction(a, b) {
        SuperCalculator_po_1.SuperCalculatorPage.firstNumber.sendKeys(a);
        SuperCalculator_po_1.SuperCalculatorPage.operation.$('[value = "SUBTRACTION"]').click();
        SuperCalculator_po_1.SuperCalculatorPage.secondNumber.sendKeys(b);
        SuperCalculator_po_1.SuperCalculatorPage.gobutton.click();
    }
    static modulo(a, b) {
        SuperCalculator_po_1.SuperCalculatorPage.firstNumber.sendKeys(a);
        SuperCalculator_po_1.SuperCalculatorPage.operation.$('[value = "MODULO"]').click();
        SuperCalculator_po_1.SuperCalculatorPage.secondNumber.sendKeys(b);
        SuperCalculator_po_1.SuperCalculatorPage.gobutton.click();
    }
    static multiplication(a, b) {
        SuperCalculator_po_1.SuperCalculatorPage.firstNumber.sendKeys(a);
        SuperCalculator_po_1.SuperCalculatorPage.operation.$('[value = "MULTIPLICATION"]').click();
        SuperCalculator_po_1.SuperCalculatorPage.secondNumber.sendKeys(b);
        SuperCalculator_po_1.SuperCalculatorPage.gobutton.click();
    }
    static division(a, b) {
        SuperCalculator_po_1.SuperCalculatorPage.firstNumber.sendKeys(a);
        SuperCalculator_po_1.SuperCalculatorPage.operation.$('[value = "DIVISION"]').click();
        SuperCalculator_po_1.SuperCalculatorPage.secondNumber.sendKeys(b);
        SuperCalculator_po_1.SuperCalculatorPage.gobutton.click();
    }
    static getCurrentResult() {
        return SuperCalculator_po_1.SuperCalculatorPage.currentResult.getText();
    }
    static isCurrentResultEquals(a) {
        return SuperCalculator_po_1.SuperCalculatorPage.currentResult.getText().then(function (txt) {
            expect(txt).toEqual('' + a + '');
        });
    }
    static getHistoryRowCount() {
        SuperCalculator_po_1.SuperCalculatorPage.history.count();
    }
    static getAllExpression() {
        var Expressions = [];
        SuperCalculator_po_1.SuperCalculatorPage.history.each(function (row, index) {
            var cells = row.$$('td');
            cells.get(1).getText().then(function (txt) {
                Expressions[index] = txt;
            });
        });
        return Expressions;
    }
    static isExpressionAt(myExperssion, index) {
        var row = SuperCalculator_po_1.SuperCalculatorPage.history.get(index);
        var cells = row.$$('td');
        cells.get(1).getText().then(function (txt) {
            expect(txt).toEqual('' + myExperssion + '');
        });
    }
    static getLastTimeStamp() {
        var lastTime = [];
        SuperCalculator_po_1.SuperCalculatorPage.history.first().then(function (row) {
            var cells = row.$$('td');
            cells.get(0).getText().then(function (txt) {
                lastTime = txt;
            });
        });
        return lastTime;
    }
    static getAllResult() {
        var result = [];
        SuperCalculator_po_1.SuperCalculatorPage.history.each(function (row, index) {
            var cells = row.$$('td');
            cells.get(2).getText().then(function (txt) {
                result[index] = txt;
            });
        });
        return result;
    }
    static clickGoButton() {
        SuperCalculator_po_1.SuperCalculatorPage.gobutton.click();
    }
    static enterFirstNumber(a) {
        SuperCalculator_po_1.SuperCalculatorPage.firstNumber.sendKeys(a);
    }
    static enterOperator(operator) {
        SuperCalculator_po_1.SuperCalculatorPage.operation.$('[value=["' + operator + '"]]').click();
    }
    static enterSecondNumber(b) {
        SuperCalculator_po_1.SuperCalculatorPage.secondNumber.sendKeys(b);
    }
    static getSuperCalculatorSite() {
        protractor_1.browser.get(SuperCalculator_po_1.SuperCalculatorPage.superCalculatorSite);
    }
}
exports.SuperCalculatorLib = SuperCalculatorLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwZXJDYWxjdWxhdG9yLmxpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BhZ2VPYmplY3RNb2RlbFN0dWR5Q2FsY3VsYXRvci9MaWIvU3VwZXJDYWxjdWxhdG9yLmxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUE2RDtBQUM3RCwyQ0FBcUM7QUFFckMsTUFBYSxrQkFBa0I7SUFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUMvQix3Q0FBbUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLHdDQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRSx3Q0FBbUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLHdDQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV0QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUN2Qyx3Q0FBbUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLHdDQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRSx3Q0FBbUIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLHdDQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV0QyxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUNsQyx3Q0FBbUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLHdDQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxL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