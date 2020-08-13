import React from 'react';
import Title from 'components/title';
import Layout from 'components/layout';
import { motion } from 'framer-motion';

const NotFound = () => (
	<Layout margin={true} className="404 space">
		<motion.div
			initial={{ scale: 0, rotate: 20, x: 100, y: 100, opacity: 0 }}
			animate={{
				scale: [0, 0.5, 1],
				rotate: [20, 0, -20],
				x: [100, 0, -100],
				y: [100, 0, 100],
				opacity: [0, 1, 0],
			}}
			transition={{ duration: 7, loop: Infinity }}
		>
			<Title as="h1" className="404-inner">
				This page doesn&apos;t exist.
			</Title>
		</motion.div>
	</Layout>
);

export default NotFound;
