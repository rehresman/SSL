import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Modal from 'components/modal';

const About = ({ data }) => (
	<Layout>
		<Head pageTitle={data.aboutJson.title} />
		<Box>
			<div
				dangerouslySetInnerHTML={{
					__html: data.aboutJson.content.childMarkdownRemark.html,
				}}
			/>
			<Modal>
				<video src="https://i.imgur.com/gzFqNSW.mp4" playsInline autoPlay muted />
			</Modal>
		</Box>
	</Layout>
);

About.propTypes = {
	data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
	query AboutQuery {
		aboutJson {
			title
			content {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;
