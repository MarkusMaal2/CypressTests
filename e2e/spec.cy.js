describe('Visit Google', () => {
  it('Open Google.com', () => {
    cy.visit('https://google.com')
  })
})

describe('Sample Test', () => {
	it('Does not do much', () => {
		expect(true).to.equal(true);
	})
})

describe('Failing Test', () => {
	it('Does not do much', () => {
		expect(true).to.equal(false);
	})
})