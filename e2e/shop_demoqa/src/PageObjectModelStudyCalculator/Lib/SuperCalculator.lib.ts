import {SuperCalculatorPage} from "../PO/SuperCalculator.po";
import { browser } from "protractor";

export class SuperCalculatorLib{
   public static add(a: any ,b: any){
    SuperCalculatorPage.firstNumber.sendKeys(a);
    SuperCalculatorPage.operation.$('[value = "ADDITION"]').click();
    SuperCalculatorPage.secondNumber.sendKeys(b);
    SuperCalculatorPage.gobutton.click();

   }

   public static subtraction(a: any ,b: any){
    SuperCalculatorPage.firstNumber.sendKeys(a);
    SuperCalculatorPage.operation.$('[value = "SUBTRACTION"]').click();
    SuperCalculatorPage.secondNumber.sendKeys(b);
    SuperCalculatorPage.gobutton.click();

   }

   public static modulo(a: any ,b: any){
    SuperCalculatorPage.firstNumber.sendKeys(a);
    SuperCalculatorPage.operation.$('[value = "MODULO"]').click();
    SuperCalculatorPage.secondNumber.sendKeys(b);
    SuperCalculatorPage.gobutton.click();

   }

   public static multiplication(a: any ,b: any){
    SuperCalculatorPage.firstNumber.sendKeys(a);
    SuperCalculatorPage.operation.$('[value = "MULTIPLICATION"]').click();
    SuperCalculatorPage.secondNumber.sendKeys(b);
    SuperCalculatorPage.gobutton.click();

   }

   public static division(a: any ,b: any){
    SuperCalculatorPage.firstNumber.sendKeys(a);
    SuperCalculatorPage.operation.$('[value = "DIVISION"]').click();
    SuperCalculatorPage.secondNumber.sendKeys(b);
    SuperCalculatorPage.gobutton.click();

   }

   public static getCurrentResult(){
        return SuperCalculatorPage.currentResult.getText();
   }

   public static isCurrentResultEquals(a: any){
       return SuperCalculatorPage.currentResult.getText().then(function(txt){
            expect(txt).toEqual(''+a+'');
      });
   }

   public static getHistoryRowCount(){
        SuperCalculatorPage.history.count();
   }

    public static getAllExpression(){
        var Expressions : any[] = [];
        SuperCalculatorPage.history.each(function(row, index){
            var cells =row.$$('td');
            cells.get(1).getText().then(function(txt){
                Expressions[index]=txt;
           });
            
        });
        return Expressions;
    }
    

    public static isExpressionAt(myExperssion: any, index: number){
        
            var row = SuperCalculatorPage.history.get(index);
            var cells =row.$$('td');
            cells.get(1).getText().then(function(txt){
                expect(txt).toEqual(''+myExperssion+'');
           });
    }
    public static getLastTimeStamp(){
        var lastTime : any[] = [];
        SuperCalculatorPage.history.first().then(function(row){
            var cells =row.$$('td');
            cells.get(0).getText().then(function(txt){
                lastTime = txt;
           });
            
        });
        return lastTime;
    }

    public static getAllResult(){
        var result : any = [];
        SuperCalculatorPage.history.each(function(row, index){
            var cells =row.$$('td');
            cells.get(2).getText().then(function(txt){
                result[index]=txt;
           });
            
        });
        return result;
    } 

    public static clickGoButton(){
        SuperCalculatorPage.gobutton.click();
    
    }
    
    public static enterFirstNumber(a: any){
        SuperCalculatorPage.firstNumber.sendKeys(a)
    }

    public static enterOperator(operator: any){
        SuperCalculatorPage.operation.$('[value=["'+operator+'"]]').click();
        
    }

    public static enterSecondNumber(b: any){
        SuperCalculatorPage.secondNumber.sendKeys(b);
    }


    public static getSuperCalculatorSite(){
        browser.get(SuperCalculatorPage.superCalculatorSite);

    }
    
  
}
 