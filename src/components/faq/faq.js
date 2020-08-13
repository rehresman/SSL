import React from 'react';
import PropTypes from 'prop-types';
import { StyledFAQ } from './faq.css';
import { motion } from 'framer-motion';

const FAQ = ({ questions }) => {
	return (
		<StyledFAQ>
			<motion.h2
				initial={{ opacity: 0, y: 10 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				FAQs
			</motion.h2>
			<section className="overview">
				{questions.map((q, i) => (
					<motion.li
						key={i}
						initial={{ opacity: 0, y: 10 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.9 + i * 0.1 }}
					>
						<a href={'#' + i}>{q.question}</a>
					</motion.li>
				))}
			</section>
			<motion.section
				className="expanded"
				initial={{ opacity: 0.2 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{questions.map((q, i, arr) => (
					<section id={i} key={i + ' expanded'} className="header-offset">
						<h2>{q.question}</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: q.content ? q.content.childMarkdownRemark.html : q.answer,
							}}
						/>
						{i + 1 < arr.length ? <hr /> : <div className="spacer" />}
					</section>
				))}
			</motion.section>
		</StyledFAQ>
	);
};

FAQ.propTypes = {
	questions: PropTypes.array.isRequired,
};

export default FAQ;
