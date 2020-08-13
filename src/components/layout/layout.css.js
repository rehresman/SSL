import styled from 'styled-components';
import { black } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const StyledInnerLayout = styled.div`
	margin-left: ${({ margin }) => (margin ? '2.6rem' : '0')}
	margin-right: ${({ margin }) => (margin ? '2.6rem' : '0')}
	padding-bottom: 160px;


	${MEDIA.MIN_TABLET`
		max-width: 690px;
		margin-left: auto;
		margin-right: auto;
	`}

	${MEDIA.MIN_DESKTOP`
		max-width: 960px;
			margin-left: auto;
		margin-right: auto;
	`}

	.banner-container{
		height: 250px;
		width: 100%;
	}

	.column {
		width: 100%;
	}

	.more-info {
		max-width: 100%;
		margin-bottom: 6rem;
	}

	.row {
		display: block;
	}


		${MEDIA.MIN_TABLET`
			.column {
				width: 100%;
			}

			.more-info {
				max-width: 50%;
			}

			.row {
				display: flex;
				flex-direction: row;
			}
	
	`}

	hr {
		border-color: ${black};
	}

	.space{
		margin-top:2.6rem;
	}

	.404 {
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}

	.yt-wrapper {
		position: relative;
		display: block;
		text-align: center;
				width: 100%;
		overflow: hidden;
	}
	.yt-wrapper::before {
		display: block;
		content: '';
		padding-top: 56.25%;
	}

	.yt-inner {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

/*
${MEDIA.MIN_TABLET`	
		.yt-inner {
			width: 558px;
			height: 331px;
		}
			.yt-wrapper::before {
		display: block;
		content: '';
		padding-top: 331px;
	}
	`} */
`;

export const StyledOuterLayout = styled.div`
	position: relative;
	min-height: 100vh;
`;
