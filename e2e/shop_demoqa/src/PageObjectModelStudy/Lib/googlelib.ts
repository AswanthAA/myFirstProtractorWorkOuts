import { GooglePO } from "../PO/googlepo";

export class GoogleLib{

    public enterTextInSearchBar(){

        GooglePO.googleSearchBar.sendKeys("it's only a beginning");    
    }

    public setTextInGoogleSearchBar(searchTerm:string){

        GooglePO.getgoogleSearchBar().sendKeys(searchTerm);
        
    }


}