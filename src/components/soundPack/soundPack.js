import React from 'react';
import PropTypes from 'prop-types';
import { StyledSoundPack, Category } from './soundPack.css';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const SoundPack = ({
	cartLink,
	descriptionLong,
	descriptionShort,
	name,
	price,
	videoLink,
	image,
	category,
}) => {
	return (
		<StyledSoundPack>
			<div className="heading">
				<h2 className="title">{name}</h2>
				<p className="subtitle">{descriptionShort}</p>
			</div>
			<div className="row">
				<div className="column">
					<div className="yt-wrapper">
						{videoLink ? (
							<iframe
								title={`${name} video`}
								className="yt-inner"
								src={videoLink}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen={true}
							></iframe>
						) : (
							<div className="yt-inner">
								<Img fluid={image.childImageSharp.fluid} />
							</div>
						)}
					</div>
				</div>
				<div className="column details">
					<Category>{category}</Category>

					<p className="description">{descriptionLong}</p>
					<h2 className="price">${price}</h2>
					<div>
						<Link to={cartLink}>
							<button>Add to Cart</button>
						</Link>
						<small>Delivered immediately via download link</small>
					</div>
				</div>
			</div>
			<hr />
		</StyledSoundPack>
	);
};

SoundPack.propTypes = {
	cartLink: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	descriptionLong: PropTypes.string.isRequired,
	descriptionShort: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	videoLink: PropTypes.string.isRequired,
	image: PropTypes.object,
};

export default SoundPack;
