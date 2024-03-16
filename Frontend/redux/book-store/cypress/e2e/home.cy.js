describe('Bookstore CRUD spec', () => {
	it('open the view', () => {
		cy.visit('http://localhost:5173')
		cy.contains('Book')
	})
})

describe('home spec', () => {
	it('the title of the page contains the indicated text', () => {
		cy.visit('http://localhost:5173')
		cy.wait(500)
		cy.get('[data-test="hero-title"]').contains('Book')
	})
	it('verify the title of the books', () => {
		cy.visit('http://localhost:5173')
		cy.wait(500)
		cy.get('h2').eq(0).contains('Dune')
		cy.get('h2').eq(1).contains('Harry Potter')
	})
	it('Get Books', function () {
		cy.visit('http://localhost:5173')
		cy.window()
			.its('store')
			.invoke('getState')
			.its('books')
			.should('deep.equal', {
				bookList: [],
				book: {},
			})
	})
	it('Post Book', function () {
		cy.visit('http://localhost:5173')
		cy.get('#name').click()
		cy.get('#name').type('Book 2')
		cy.get('#GenreId').click()
		cy.get(
			'.rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content'
		).click()
		cy.get('body').click()
		cy.get('#price').click()
		cy.get('#price').type('20')
		cy.wait(2000)
		cy.get('[type="submit"]').click()
		cy.wait(3000)
		cy.window()
			.its('store')
			.invoke('getState')
			.its('books.books')
			.should('have.length', 7)
	})
	it('Edit Book', function () {
		cy.visit('http://localhost:5173')
		cy.get('.anticon-edit').eq(0).click()
		cy.get('.ant-modal').should('be.visible')
		cy.window()
			.its('store')
			.invoke('getState')
			.its('books.book')
			.should('not.be.empty')
		cy.get('[data-test="book-name"]').clear().type('Book 1')
		cy.wait(500)
		cy.get('[data-test="edit-submit"]').click()
		cy.get('[data-test="book-title"]').first().contains('Book 1')
		cy.wait(500)
	})
	it.only('Delete Book', function () {
		cy.visit('http://localhost:5173')
		cy.get('.anticon-delete').eq(0).click()
	})
})
