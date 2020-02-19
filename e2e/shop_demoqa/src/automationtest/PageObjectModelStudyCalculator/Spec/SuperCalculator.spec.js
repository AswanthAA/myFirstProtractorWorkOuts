"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuperCalculator_lib_1 = require("../Lib/SuperCalculator.lib");
describe('Page Object Model with super calculator', function () {
    beforeEach(function () {
        SuperCalculator_lib_1.SuperCalculatorLib.getSuperCalculatorSite();
    });
    it('1.additon, subtraction and result checking', function () {
        SuperCalculator_lib_1.SuperCalculatorLib.add(4, 10);
        SuperCalculator_lib_1.SuperCalculatorLib.isCurrentResultEquals(14);
        SuperCalculator_lib_1.SuperCalculatorLib.isExpressionAt('4 + 1', 0); // will fail
        SuperCalculator_lib_1.SuperCalculatorLib.subtraction(10, 5);
        SuperCalculator_lib_1.SuperCalculatorLib.isCurrentResultEquals(5);
    });
    it('2.Multiplication, Division and result checking', function () {
        SuperCalculator_lib_1.SuperCalculatorLib.multiplication(5, 2);
        SuperCalculator_lib_1.SuperCalculatorLib.isCurrentResultEquals(10);
        SuperCalculator_lib_1.SuperCalculatorLib.division(10, 5);
        SuperCalculator_lib_1.SuperCalculatorLib.isCurrentResultEquals(2);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwZXJDYWxjdWxhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlT2JqZWN0TW9kZWxTdHVkeUNhbGN1bGF0b3IvU3BlYy9TdXBlckNhbGN1bGF0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9FQUFnRTtBQUVoRSxRQUFRLENBQUMseUNBQXlDLEVBQUM7SUFFL0MsVUFBVSxDQUFDO1FBQ1Asd0NBQWtCLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBQztRQUM1Qyx3Q0FBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLHdDQUFrQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLHdDQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO1FBRTNELHdDQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckMsd0NBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEQsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsZ0RBQWdELEVBQUM7UUFFaEQsd0NBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUV2Qyx3Q0FBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3Qyx3Q0FBa0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxDLHdDQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhELENBQUMsQ0FBQyxDQUFBO0FBR04sQ0FBQyxDQUFDLENBQUEifQ==