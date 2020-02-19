"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
let details = {
    name: 'Aswanth',
    previousName: "vava",
    age: "23",
    college: "CEAL"
};
const protractor_1 = require("protractor");
let data = JSON.stringify(details);
fs.writeFileSync('e2e/shop_demoqa/src/JSONfile/details.json', data);
describe('Protractor Typescript Demo', function () {
    //const fs = require('fs');
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    it('Javascript executions', function () {
        // set implicit time to 30 seconds
        protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        // navigate to the url
        protractor_1.browser.get("https://google.com");
        // get attribute
        protractor_1.element(protractor_1.by.name("q")).getAttribute("title").then(function (toolTip) {
            // get css value
            protractor_1.element(protractor_1.by.name("q")).getCssValue("font-size").then(function (font_size) {
                let googleBar = {
                    title: toolTip,
                    fontSize: font_size
                };
                let data = JSON.stringify(googleBar, null, 3);
                fs.writeFileSync('e2e/shop_demoqa/src/JSONfile/searchbarDetails.json', data);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9Xcml0ZUpzb25GaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vVFNGaWxlcy9Ub1dyaXRlSnNvbkZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsSUFBSSxPQUFPLEdBQUc7SUFDYixJQUFJLEVBQUUsU0FBUztJQUNaLFlBQVksRUFBRSxNQUFNO0lBQ3BCLEdBQUcsRUFBRyxJQUFJO0lBQ1YsT0FBTyxFQUFHLE1BQU07Q0FDbkIsQ0FBQztBQUNGLDJDQUFnRjtBQUNoRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLEVBQUUsQ0FBQyxhQUFhLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEUsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLDJCQUEyQjtJQUMzQixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtJQUNqRSxFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDM0Isa0NBQWtDO1FBQ2xDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELHNCQUFzQjtRQUN0QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLGdCQUFnQjtRQUNoQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsT0FBTztZQUNoRSxnQkFBZ0I7WUFDaEIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFNBQVM7Z0JBQ3JFLElBQUksU0FBUyxHQUFHO29CQUNmLEtBQUssRUFBRSxPQUFPO29CQUNkLFFBQVEsRUFBRSxTQUFTO2lCQUNuQixDQUFDO2dCQUNGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0MsRUFBRSxDQUFDLGFBQWEsQ0FBQyxvREFBb0QsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5RSxDQUFDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9