import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import FAQ from 'components/faq';
import { motion } from 'framer-motion';

const Support = ({ data }) => {
	return (
		<Layout margin={true}>
			<div className="margin-mobile">
				<motion.h1
					className="page-title"
					initial={{ opacity: 0, x: 100 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					<Title>{data.supportJson.title}</Title>
				</motion.h1>
				<motion.hr
					className="page-title"
					initial={{ opacity: 0, x: -100 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				/>
				<FAQ questions={data.supportJson.questions} />
			</div>
		</Layout>
	);
};

Support.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Support;

export const query = graphql`
	query SupportPageQuery {
		supportJson {
			title
			questions {
				question
				answer
				content {
					childMarkdownRemark {
						html
						rawMarkdownBody
					}
				}
			}
		}
	}
`;
