import React from 'react';
import Layout from '../components/layout';
import SoundPack from 'components/soundPack';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Title from 'components/title';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export default function SynthPageTemplate({ data, pageContext }) {
	//filtering results on the front end because it's too much
	//of a pain to set it up on the back end right now for so
	//little data

	const current = data.synthsJson.models.filter((m) => {
		return m.slug === pageContext.slug;
	})[0];
	return (
		<Layout margin={true}>
			<motion.h1
				className="page-title"
				initial={{ opacity: 0, x: 100 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
			>
				<Title>{`${current.make} ${current.model}`}</Title>
			</motion.h1>
			<motion.hr
				className="page-title"
				initial={{ opacity: 0, x: -100 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
			/>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 0.85 }}
			>
				<Img
					className="banner-container"
					fluid={current.image.childImageSharp.fluid}
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1 }}
			>
				{current.soundPacks.map((s, i) => {
					return <SoundPack key={i} {...s} />;
				})}
			</motion.div>
			<section className="more-info">
				<Title>~</Title>
				<p>{data.synthsJson.info}</p>
			</section>
		</Layout>
	);
}

export const query = graphql`
	query SynthPageQuery {
		synthsJson {
			info
			models {
				slug
				make
				model
				soundPacks {
					cartLink
					category
					descriptionLong
					descriptionShort
					name
					price
					slug
					videoLink
					image {
						childImageSharp {
							fluid(maxWidth: 715, maxHeight: 402) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				image {
					childImageSharp {
						fluid(maxWidth: 804, maxHeight: 250) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;

SynthPageTemplate.propTypes = {
	data: PropTypes.object.isRequired,
	pageContext: PropTypes.object.isRequired,
};
