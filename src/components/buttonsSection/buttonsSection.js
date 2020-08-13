import React from 'react';
import { StyledButtonsSection } from './buttonsSection.css';
import { useStaticQuery, graphql } from 'gatsby';
import HugeButton from 'components/hugeButton';
import {
	white,
	whitesmoke,
	black,
	orange,
	darkOrange,
	gray,
	darkBlack,
} from 'constants/theme';

const ButtonsSection = () => {
	const data = useStaticQuery(graphql`
		query ButtonsQuery {
			synthsJson {
				models {
					slug
					make
					model
				}
			}
		}
	`);
	return (
		<StyledButtonsSection>
			{data.synthsJson.models.map((m, i) => {
				let color, backgroundColor, hoverColor;
				switch (i) {
					case 0:
						color = black;
						backgroundColor = white;
						hoverColor = whitesmoke;
						break;
					case 1:
						color = white;
						backgroundColor = orange;
						hoverColor = darkOrange;
						break;
					case 2:
						color = white;
						backgroundColor = gray;
						hoverColor = black;
						break;
					default:
						color = black;
						backgroundColor = white;
						hoverColor = darkBlack;
						break;
				}
				return (
					<HugeButton
						model={m.model}
						key={i}
						color={color}
						backgroundColor={backgroundColor}
						hoverColor={hoverColor}
						slug={m.slug}
					/>
				);
			})}
		</StyledButtonsSection>
	);
};

export default ButtonsSection;
