import { element, by } from "protractor";

export class GooglePO{

    public static googleSearchBar = element(by.name('q'));

    public static getgoogleSearchBar(){

        console.log("finding search bar");
        return element(by.name('q'));
    }

    public static googleSearchButton = element(by.name('btnK'));
    
}