import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
	body, h1, h2, h3, h4, h5, h6, p, ul {
		margin: 0;
	}

	body {

		* {
			box-sizing: border-box;
		}
	}

	table {
		border-collapse: collapse;
	}

	ul {
		padding: 0;
		list-style: none;
	}

	img {
		width: 100%;
		height: auto;
	}

	button {
		padding: 0;
		border: 0;
		background: none;
	}

	a {
		text-decoration: none;
	}

	a,
	button,
	input {
		transition: all .3s ease;

		&:focus {
			outline: none;
		}
	}

	#__next {

		@media all and (min-width: 812px) and (max-width: 896px) and (max-height: 414px) {
			padding-left: 22px;
			padding-right: 22px;
		}
	}
`;

export default GlobalStyles;
