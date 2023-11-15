describe('isIsogram kata', () => {
	it('should exist a variable named isIsogram', () => {
		// Arrange
		// Act
		// Assert
		expect(isIsogram).not.toBe(undefined)
	})
	it('isIsogram should be a function', () => {
		expect(typeof isIsogram).toEqual('function')
	})
	it('isIsogram should return a boolean', () => {
		expect(typeof isIsogram()).toEqual('boolean')
	})
	it('should exist a variable named toLower', () => {
		expect(toLower).not.toBe(undefined)
	})
	it('toLower should be a function', () => {
		expect(typeof toLower).toEqual('function')
	})
	it('should return a string', () => {
		expect(typeof toLower('')).toEqual('string')
	})
	it('should return a lower case string', () => {
		expect(toLower('HOLA')).toEqual('hola')
	})
	it('should return true if arg is "Dermatoglyphics"', () => {
		expect(isIsogram('Dermatoglyphics')).toBe(true)
	})
	it('should return false if received arg is "moOse"', () => {
		expect(isIsogram('moOse')).toBe(false)
	})
})
