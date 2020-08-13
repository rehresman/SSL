import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { orange } from 'constants/theme';

export const StyledSoundPack = styled.section`
	padding-top: 6rem;
	padding-bottom: 3rem;
	cursor: default;

	.column > * {
		margin-bottom: 2rem;
	}
	small {
		font-size: 1.3rem;
	}

	.heading {
		text-align: center;
		margin-bottom: 3rem;
	}

	hr {
		margin-top: 6rem;
		border-color: whitesmoke;
	}

	.price {
		font-style: normal;
	}

	.subtitle {
		font-size: 1.6rem;
		margin-top: 1rem;
		font-style: italic;
	}
	.title {
		font-style: normal;
	}
	button {
		width: 100%;
		display: block;
		margin-bottom: 1rem;
	}

	${MEDIA.MIN_TABLET`
			button {
		width: 50%;
	}
		.details {
		padding-left: 3rem;
		}
	`}
`;

export const Category = styled.div`
	display: block;
	border: 1px solid ${orange};
	padding: 1rem;
	color: ${orange};
	width: fit-content;
`;
