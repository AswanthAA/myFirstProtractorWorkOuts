describe('Protractor Typescript Demo', function() {
	it('Properties file Operations', function() {
		var fs = require("fs")
		var rawContent = fs.readFileSync("e2e/shop_demoqa/src/properties file/data.properties")
		var propertyMap = {}
        var fullContent = rawContent.toString()
        //console.log(fullContent)
		//var allPairs = fullContent.split("\\r?\\n")
		var allPairs = fullContent.split("\n")
		
        console.log(allPairs.length)
		for(var i = 0; i<allPairs.length; i++){
			var keyValue = allPairs[i].split("=")
			propertyMap[keyValue[0]] = keyValue[1]
		}
		console.log("****Full content  : ")
		console.log(propertyMap)
		console.log("****Spcific content  : "+propertyMap["age"])
	});
});