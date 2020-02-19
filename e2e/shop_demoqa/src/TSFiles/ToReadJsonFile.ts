describe("to read json file",function(){

    it("try to read json file",function(){
        var fs = require('fs');

        var rawData = fs.readFileSync('e2e/shop_demoqa/src/JSONfile/Data.json');

        var data = JSON.parse(rawData);

        console.log(data);

        console.log(data["name"])

    })
})