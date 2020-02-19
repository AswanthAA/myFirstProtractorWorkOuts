import { element, by } from "protractor";

export class SuperCalculatorPage{

    public static superCalculatorSite = "https://juliemr.github.io/protractor-demo/";

    public static firstNumber = element(by.model('first'));
    public static secondNumber = element(by.model('second'));
    public static operation = element(by.model('operator'));
    public static opera = element(by.options("value for (key, value) in operators"))
    public static gobutton = element(by.id("gobutton"));
    public static history = element.all(by.repeater("result in memory"));
    //public static currentResult = element(by.css('.ng-binding'));

    public static currentResult = element(by.xpath("/html/body/div/div/form/h2"));

    

}