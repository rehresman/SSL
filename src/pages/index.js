import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';

import SVGBackground from 'components/svgBackground';
import ButtonsSection from 'components/buttonsSection';

const Index = () => {
	return (
		<Layout>
			<Box>
				<SVGBackground alt="a sick modular" />
			</Box>
			<ButtonsSection />
		</Layout>
	);
};

export default Index;
