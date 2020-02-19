describe("to read json file", function () {
    it("try to read json file", function () {
        var fs = require('fs');
        var rawData = fs.readFileSync('e2e/shop_demoqa/src/JSONfile/Data.json');
        var data = JSON.parse(rawData);
        console.log(data);
        console.log(data["name"]);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9SZWFkSnNvbkZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UU0ZpbGVzL1RvUmVhZEpzb25GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsQ0FBQyxtQkFBbUIsRUFBQztJQUV6QixFQUFFLENBQUMsdUJBQXVCLEVBQUM7UUFDdkIsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUV4RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUU3QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=