// An example configuration file
var reporter = require('chercher-tech-jasmine-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    // The address of a running selenium server.
    directConnect: true,

    //seleniumAddress: 'http://localhost:4040/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
     // chromeOptions:{
       // args:["--headless"]
      //},

      shardTestFiles: false,

      maxInstances: 5,    
    },
  
    
    //specs: ['e2e/shop_demoqa/src/automationtest/TSFiles/locatorTest.js',],
    //specs: ['e2e/shop_demoqa/src/automationtest/TSFiles/workingSpec.js'],
    specs: ['e2e/shop_demoqa/src/automationtest/PageObjectModelStudyCalculator/Spec/SuperCalculator.spec.js'],
  
//////////////////////ChercherTechJasmineReporter///////////////////////////////
/*
    onPrepare: function() {

      //return browser.getProcessedConfig().then(function (config){});
      var ChercherTechJasmineReporter = reporter.ChercherTechJasmineReporter;
      jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
          screenshotOnFail :true,
          reportName:"myfirstReport",
          showSkipped:false,
          browser:browser,
          showLineChart:true
      }));
    

  },
  onComplete:function(exitcode){
    reporter.write_consolidated();
  },

  afterLaunch:function(exitcode){

    return new Promise(function(resolve){
      reporter.processResults();
      return 0;
    });
  }
    
*/
//////////////////////////////////////////////////////////////////////////////////
    //framework: 'jasmine2' ,
     // onPrepare: function() {
      //    var jasmineReporters = require('C:/Users/X164614/asw_training_test/node_modules/jasmine-reporters');
      //    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
      //    );
     //}
/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////jasmine-allure-reporter/////////////////////////////
/*
     onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
    }
  */
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////Jasmine2HtmlReporter////////////////////////////////
/*
     onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(5000);
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                                      savePath: './Jasmine2HtmlReporter'
        }));
     },
  */
////////////////////////////SpecReporter////////////////////////////////////////
 onPrepare: function(){
  jasmine.getEnv().addReporter(new SpecReporter({
    displayFailuresSummary: true,
    displayFailuredSpec: true,
    displaySuiteNumber: true,
    displaySpecDuration: true
  }));
}
};