import React from 'react';
import PropTypes from 'prop-types';
import { StyledHugeButton } from './hugeButton.css';
import { Link } from 'gatsby';

const HugeButton = ({ model, slug, color, backgroundColor, hoverColor }) => {
	return (
		<Link to={slug}>
			<StyledHugeButton
				color={color}
				backgroundColor={backgroundColor}
				hoverColor={hoverColor}
			>
				{model} Sound Packs
			</StyledHugeButton>
		</Link>
	);
};

HugeButton.propTypes = {
	color: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	hoverColor: PropTypes.string.isRequired,
};

export default HugeButton;
