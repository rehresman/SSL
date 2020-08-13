import styled from 'styled-components';
import { black, white, whitesmoke } from 'constants/theme';

export const StyledFooter = styled.footer`
	color: ${white};
	background-color: ${black};
	padding-top: 4.6rem;
	padding-bottom: 2.6rem;
	font-size: 1.6rem;
	font-style: italic;
	position: absolute;
	bottom: 0;
	width: 100%;

	.links {
		display: flex;
		justify-content: space-around;
	}

	a {
		color: ${white};
		text-decoration: none;
	}
	a:hover {
		color: ${whitesmoke};
	}

	p {
		font-size: 1.2rem;
		padding-top: 2.6rem;
		text-align: center;
	}
`;
