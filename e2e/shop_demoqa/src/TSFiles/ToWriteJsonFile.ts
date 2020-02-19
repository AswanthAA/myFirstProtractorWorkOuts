const fs = require('fs');
let details = {
	name: 'Aswanth',
    previousName: "vava",
    age : "23",
    college : "CEAL" 
};
import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
let data = JSON.stringify(details);
fs.writeFileSync('e2e/shop_demoqa/src/JSONfile/details.json', data);

describe('Protractor Typescript Demo', function() {
	//const fs = require('fs');
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Javascript executions', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		// navigate to the url
		browser.get("https://google.com");
		// get attribute
		element(by.name("q")).getAttribute("title").then(function(toolTip){
			// get css value
			element(by.name("q")).getCssValue("font-size").then(function(font_size){
				let googleBar = {
					title: toolTip,
					fontSize: font_size
				};
				let data = JSON.stringify(googleBar , null, 3);
				fs.writeFileSync('e2e/shop_demoqa/src/JSONfile/searchbarDetails.json', data);
			})
		})
	});
});