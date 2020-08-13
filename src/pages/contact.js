import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Obfuscate from 'react-obfuscate';

const Contact = ({ data }) => {
	return (
		<Layout margin={true}>
			<div className="margin-mobile">
				<motion.h1
					className="page-title"
					initial={{ opacity: 0, x: 100 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					<Title>{data.contactJson.title}</Title>
				</motion.h1>
				<motion.hr
					className="page-title"
					initial={{ opacity: 0, x: -100 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				/>
				<motion.h2
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.8 }}
				>
					{data.contactJson.content}
				</motion.h2>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.9 }}
					className="space"
				>
					<Obfuscate email={data.contactJson.email} />
				</motion.div>
			</div>
		</Layout>
	);
};

Contact.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
	query ContactPageQuery {
		contactJson {
			title
			content
			email
		}
	}
`;
