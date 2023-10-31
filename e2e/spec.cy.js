Cypress.Commands.add("acceptCookies", () => {
	// visit Google
	cy.visit('https://google.com')
	// click the last sibling of first button (Accept all)
	cy.get("button").siblings().last().click()
})

describe('Accept cookies', () => {
	it('Visit google.com', () => {
		// visit google.com
		cy.visit('https://google.com')
		// check if google.com is in the URL
		cy.url().should("include", "google.com")
		// check if title is Google
		cy.title("Google")
	})
	it("Click \"Accept all\"", () => {
		// run accept cookies function
		cy.acceptCookies()
		// check if "Accept all" button is invisible
		cy.get("button").siblings().last().should("not.be.visible")
	})
})

describe("Regular search", () => {
	it('Type to search field', () => {
		// accept cookis
		cy.acceptCookies()
		// type search term to first text area
		cy.get("textarea").first().type("Cypress E2E testing")
		// check if the textarea has the correct value
		cy.get("textarea").first().should("have.value", "Cypress E2E testing")
	})
})

