
xdescribe("Scroll challnage in npmjs.com", function () {

	
	beforeAll(function(){
		// empty
	});

	beforeEach(function(){
		browser.driver.get("https://www.npmjs.com/");
		browser.sleep(3000);

		// sendkeys, click, clear
		// actions: mouseMove, mouseDown, mouseUp, dragAndDrop, doubleclick
	});

	it("Check login button is hide on small width window", function(){
		let aboutLink = $('a[href="/about"]');
		browser.actions().mouseMove(aboutLink).perform();

		// let student = {
		// 	fname: "test",
		// 	lname: "test"
		// }

		// student.fname = "test2";

		// Wrong way
		// let location = aboutLink.getLocation(); // {x, y}
		// console.log("x: " + location.x);
		// console.log("y: " + location.y);

		// expect(location.y).toBeGreaterThan(800);


		aboutLink.getLocation().then(function(location){
			console.log("x: " + location.x);
			console.log("y: " + location.y);
			expect(location.y).toBeGreaterThan(800);
			
			// expect(ActualResult).toBe(ExpectedResult);
		})
		expect(aboutLink.isPresent()).toBe(true, "");
		expect(aboutLink.isPresent()).toBeTrue("");

		// aboutLink.getLocation() -> browser.actions().mouseMove({x, y}).perform()


		// shouul add jasmine-matcher
		// expect(location).toHaveNumber(location.x);
		// expect(aboutLink).toHaveClass("");


		// // browser
		// // 	.actions()
		// // 	.mouseMove({x: 0, y:2000})
		// // 	.perform();

		// browser.sleep(100000);
		// // dragAndDrop(item1, item2)
		// browser
		// 	.actions()
		// 	.mouseDown(aboutLink)
		// 	.mouseUp()
		// 	.perform();

		// // aboutLink.click();
		// browser.sleep(3000);
		// expect(browser.getCurrentUrl())
		// 	.toBe("https://www.npmjs.com/about", "Check about page");
	});
})

function getLocation(){
	let location = {
		x: 10,
		y: 20
	}
	return location;

}