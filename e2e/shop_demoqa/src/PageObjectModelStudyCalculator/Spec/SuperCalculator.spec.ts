import { SuperCalculatorLib } from "../Lib/SuperCalculator.lib";

describe('Page Object Model with super calculator',function(){

    beforeEach(function(){
        SuperCalculatorLib.getSuperCalculatorSite();
    })

    it('1.additon, subtraction and result checking',function(){
        SuperCalculatorLib.add(4,10);

        SuperCalculatorLib.isCurrentResultEquals(14);

        SuperCalculatorLib.isExpressionAt('4 + 1', 0); // will fail

        SuperCalculatorLib.subtraction(10,5);

        SuperCalculatorLib.isCurrentResultEquals(5);

    })
    it('2.Multiplication, Division and result checking',function(){
        
        SuperCalculatorLib.multiplication(5,2);

        SuperCalculatorLib.isCurrentResultEquals(10);

        SuperCalculatorLib.division(10,5);

        SuperCalculatorLib.isCurrentResultEquals(2);

    })


})