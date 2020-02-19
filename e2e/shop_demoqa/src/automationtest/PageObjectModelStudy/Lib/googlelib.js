"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googlepo_1 = require("../PO/googlepo");
class GoogleLib {
    enterTextInSearchBar() {
        googlepo_1.GooglePO.googleSearchBar.sendKeys("it's only a beginning");
    }
    setTextInGoogleSearchBar(searchTerm) {
        googlepo_1.GooglePO.getgoogleSearchBar().sendKeys(searchTerm);
    }
}
exports.GoogleLib = GoogleLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlbGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUGFnZU9iamVjdE1vZGVsU3R1ZHkvTGliL2dvb2dsZWxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUUxQyxNQUFhLFNBQVM7SUFFWCxvQkFBb0I7UUFFdkIsbUJBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLHdCQUF3QixDQUFDLFVBQWlCO1FBRTdDLG1CQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFdkQsQ0FBQztDQUdKO0FBZEQsOEJBY0MifQ==