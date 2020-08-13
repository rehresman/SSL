import styled from 'styled-components';
import { white, whitesmoke, orange, black, darkBlack } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 2rem;
	padding-right: 2rem;
	background-color: ${whitesmoke};
	${MEDIA.MIN_HEADER`

    background: linear-gradient(to right, ${whitesmoke}, rgba(0, 0, 0, 0) 75%);
  `};

	a {
		color: ${black};
		transition: color 0.2s ease;
		text-decoration: none;

		&:hover {
			color: ${darkBlack};
		}
	}
`;

export const StyledHeader = styled.header`
	position: fixed;
	z-index: 3;
	width: 100%;
`;

export const LogoSquare = styled.section`
	font-size: 2.6rem;
	background-color: ${orange};
	padding: 1rem;

	.white {
		color: ${white};
	}
`;

export const Wrapper = styled.div`
	height: 71px;
`;
