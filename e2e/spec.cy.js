//
// Google tests
//

// function to accept cookies without typing these command every time
Cypress.Commands.add("acceptCookies", () => {
	// click the last sibling of first button (Accept all)
	cy.get("button").siblings().last().click()
})

describe('Accept cookies', () => {
	it('Visit Google', () => {
		// visit google.com
		cy.visit('https://google.com')
		// check if google.com is in the URL
		cy.url().should("include", "google.com")
		// check if title is Google
		cy.title("Google")
	})
	it("Click \"Accept all\"", () => {
		// visit google.com
		cy.visit('https://google.com')
		// run accept cookies function
		cy.acceptCookies()
		// check if "Accept all" button is invisible
		cy.get("button").siblings().last().should("not.be.visible")
	})
})

describe("Regular search", () => {
	it('Type to search field', () => {
		// visit google.com
		cy.visit('https://google.com')
		// accept cookis
		cy.acceptCookies()
		// type search term to first text area
		cy.get("textarea").first().type("Cypress E2E testing")
		// check if the textarea has the correct value
		cy.get("textarea").first().should("have.value", "Cypress E2E testing")
	})
	it('Perform search', () => {
		// visit google.com
		cy.visit('https://google.com')
		// accept cookis
		cy.acceptCookies()
		// type search term to first text area
		cy.get("textarea").first().type("Cypress E2E testing")
		// check if the textarea has the correct value
		cy.get("textarea").first().should("have.value", "Cypress E2E testing")
		// wait a bit to avoid multi-line input
		cy.wait(500)
		// press ENTER key to search
		cy.get("textarea").first().type("{enter}")
		// let's make sure the title isn't just Google anymore and contains the search term
		cy.title().should('not.equal', 'Google')
		cy.title().should('include', 'Cypress E2E testing')
		// let's go back
		cy.go('back')
		// let's make sure the title is Google again
		cy.title().should('equal', 'Google')
	})
	it('Click first result', () => {
		// visit google.com
		cy.visit('https://google.com')
		// accept cookis
		cy.acceptCookies()
		// type search term to first text area
		cy.get("textarea").first().type("Cypress E2E testing")
		// check if the textarea has the correct value
		cy.get("textarea").first().should("have.value", "Cypress E2E testing")
		// wait a bit to avoid multi-line input
		cy.wait(500)
		// press ENTER key to search
		cy.get("textarea").first().type("{enter}")
		// let's make sure the title isn't just Google anymore and contains the search term
		cy.title().should('not.equal', 'Google')
		cy.title().should('include', 'Cypress E2E testing')
		// let's find the first result
		cy.get("#search").children().first().children().eq(1).children().first().children().first().children().first().children().first().children().first().children().first().children().first().children().first().click()
		// let's make sure we're not on Google
		cy.title().should('not.include', 'Google')
	})
})

