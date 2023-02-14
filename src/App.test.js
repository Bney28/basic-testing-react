const { screen } = require("@testing-library/react")

afterEach(() => {
	console.log("después");
})

beforeEach(() => {
	console.log("antes");
})


describe("App Component", () => {
// describe == suites test
// test == test

	test("App test", () => {
		console.log(1)
	})

	test("App test 2", () => {
		console.log(2)
	})

})

describe("App Component 2", () => {
	
		test("App test", () => {
			console.log(3)
		})
	
		test("App test 2", () => {
			console.log(4)
		})
	
	})
