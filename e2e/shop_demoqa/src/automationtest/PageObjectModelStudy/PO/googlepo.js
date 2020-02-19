"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class GooglePO {
    static getgoogleSearchBar() {
        console.log("finding search bar");
        return protractor_1.element(protractor_1.by.name('q'));
    }
}
exports.GooglePO = GooglePO;
GooglePO.googleSearchBar = protractor_1.element(protractor_1.by.name('q'));
GooglePO.googleSearchButton = protractor_1.element(protractor_1.by.name('btnK'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QYWdlT2JqZWN0TW9kZWxTdHVkeS9QTy9nb29nbGVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUV6QyxNQUFhLFFBQVE7SUFJVixNQUFNLENBQUMsa0JBQWtCO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O0FBUkwsNEJBWUM7QUFWaUIsd0JBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQVF4QywyQkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyJ9