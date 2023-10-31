describe('Accept cookies', () => {
	it('Visit google.com', () => {
		// visit google.com
		cy.visit('https://google.com')
		// check if google.com is in the URL
		cy.url().should("include", "google.com")
	})
	it("Click \"Nõustu kõigiga\"", () => {
		cy.visit('https://google.com')
		// click "Accept all"
		cy.get("button").contains("Nõustu kõigiga").click()
		// check if "Accept all" button is invisible
		cy.get("button").contains("Nõustu kõigiga").should("not.be.visible")
	})
})

