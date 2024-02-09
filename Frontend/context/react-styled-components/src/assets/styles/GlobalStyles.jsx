import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	body {
		font-family: Arial, sans-serif;
		margin: 0;
		background-color: ${({ theme }) => theme.bodyBackground};
		color: ${({ theme }) => theme.text};
	}
`

export default GlobalStyles
