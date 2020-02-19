describe('Protractor Typescript Demo', function () {
    it('Properties file Operations', function () {
        var fs = require("fs");
        var rawContent = fs.readFileSync("e2e/shop_demoqa/src/properties file/data.properties");
        var propertyMap = {};
        var fullContent = rawContent.toString();
        //console.log(fullContent)
        //var allPairs = fullContent.split("\\r?\\n")
        var allPairs = fullContent.split("\n");
        console.log(allPairs.length);
        for (var i = 0; i < allPairs.length; i++) {
            var keyValue = allPairs[i].split("=");
            propertyMap[keyValue[0]] = keyValue[1];
        }
        console.log("****Full content  : ");
        console.log(propertyMap);
        console.log("****Spcific content  : " + propertyMap["age"]);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9SZWFkUHJvcGVydGllc0ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UU0ZpbGVzL1RvUmVhZFByb3BlcnRpZXNGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRTtJQUN0QyxFQUFFLENBQUMsNEJBQTRCLEVBQUU7UUFDaEMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMscURBQXFELENBQUMsQ0FBQTtRQUN2RixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUE7UUFDZCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDdkMsMEJBQTBCO1FBQ2hDLDZDQUE2QztRQUM3QyxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3JDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN0QztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDMUQsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9