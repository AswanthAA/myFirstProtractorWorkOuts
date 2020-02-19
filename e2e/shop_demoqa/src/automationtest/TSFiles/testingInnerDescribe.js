describe('Outer Describe block', function () {
    afterEach(function () {
        console.log("After Each block of top describe block");
    });
    it('aaa', function () {
        console.log("test One in top describe block");
    });
    describe('inner describe block one', function () {
        afterEach(function () {
            console.log("After Each block in inner describe block one");
        });
        it('aaa', function () {
            console.log("test One in inner describe block one");
        });
        it('bbb', function () {
            console.log("test two in inner describe block one");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZ0lubmVyRGVzY3JpYmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UU0ZpbGVzL3Rlc3RpbmdJbm5lckRlc2NyaWJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtJQUNoQyxTQUFTLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7SUFDdEQsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsS0FBSyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLDBCQUEwQixFQUFFO1FBQ3BDLFNBQVMsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQTtRQUM1RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9