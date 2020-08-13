import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const StyledButtonsSection = styled.section`
	position: relative;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	max-width: 100%;

	button:focus {
		outline: none;
	}

	${MEDIA.MIN_TABLET`
		max-width: 690px;
	`}

	${MEDIA.MIN_DESKTOP`
		max-width: 804px;
	`}
`;
