import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const StyledHugeButton = styled.button`
	color: ${({ color }) => color};
	background-color: ${({ backgroundColor }) => backgroundColor};
	width: 100%;
	padding-top: 2.6rem;
	padding-bottom: 2.6rem;
	font-size: 2.6rem;
	font-style: italic;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: ${({ hoverColor }) => hoverColor};
	}

	${MEDIA.MIN_TABLET`
		margin-bottom: 4rem;
		`}
`;
