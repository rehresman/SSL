import styled from 'styled-components';

export const Text = styled.span`
	display: block;
	font-style: italic;
	color: ${({ color }) => color};
	font-size: 3.2rem;
	line-height: 1.2;
	cursor: default;
`;
