import React from 'react';
import { motion } from 'framer-motion';
import { StyledScrollIcon } from './scrollIcon.css';
import Arrow from 'images/arrow-down-solid.svg';

const ScrollIcon = () => (
	<StyledScrollIcon>
		<motion.div
			initial={{ y: -20, rotate: 10, opacity: 0 }}
			animate={{ y: 0, rotate: 0, opacity: 1 }}
			transition={{
				duration: 1,
				delay: 2,
				type: 'spring',
				damping: 10,
				stiffness: 800,
			}}
		>
			<Arrow className="svg-container" />
		</motion.div>
	</StyledScrollIcon>
);

export default ScrollIcon;
