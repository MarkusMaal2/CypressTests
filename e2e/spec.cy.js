describe('Accept cookies', () => {
	it('Visit google.com', () => {
		// visit google.com
		cy.visit('https://google.com')
		// check if google.com is in the URL
		cy.url().should("include", "google.com")
		// check if title is Google
		cy.title("Google")
	})
	it("Click \"Nõustu kõigiga\"", () => {
		cy.visit('https://google.com')
		// click the last sibling of first button (Accept all)
		cy.get("button").siblings().last().click()
		// check if "Accept all" button is invisible
		cy.get("button").siblings().last().should("not.be.visible")
	})
})

