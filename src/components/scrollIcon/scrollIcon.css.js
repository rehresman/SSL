import styled from 'styled-components';
import { orange } from 'constants/theme';

export const StyledScrollIcon = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;
	line-height: 100vh;
	text-align: center;

	.svg-container {
		height: 40px;
		width: 40px;
		color: ${orange};
	}
`;
