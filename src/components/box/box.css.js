import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
	height: 481px;

	${MEDIA.MIN_TABLET`
		height: 100vh;
		margin-bottom: -71px;
	`}

	.bg {
		position: fixed;
		top: 0px;
		left: 0;
		z-index: -1;
	}
`;
