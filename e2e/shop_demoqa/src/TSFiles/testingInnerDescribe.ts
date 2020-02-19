describe('Outer Describe block', function() {
	afterEach(function(){
		console.log("After Each block of top describe block")
	})
	it('aaa', function() {
		console.log("test One in top describe block");
	});
	describe('inner describe block one', function() {
		afterEach(function(){
			console.log("After Each block in inner describe block one")
		})
		it('aaa', function() {
			console.log("test One in inner describe block one");
		});
		it('bbb', function() {
			console.log("test two in inner describe block one");
		});
	});
});