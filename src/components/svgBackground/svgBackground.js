import React, { useState, useEffect } from 'react';
import BREAKPOINTS from 'constants/breakpoints';
import { orange, black } from 'constants/theme';
import { motion } from 'framer-motion';

const SVGBackground = () => {
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const [light1, setLight1] = useState(black);
	const [light2, setLight2] = useState(black);
	const [light3, setLight3] = useState(black);

	useEffect(() => {
		const timeout1 = setTimeout(
			() => setLight1((light1) => getBlackOrOrange(light1)),
			Math.random() * 16000
		);
		return () => clearTimeout(timeout1);
	}, [light1]);

	useEffect(() => {
		const timeout2 = setTimeout(
			() => setLight2((light2) => getBlackOrOrange(light2)),
			Math.random() * 16000
		);
		return () => clearTimeout(timeout2);
	}, [light2]);

	useEffect(() => {
		const timeout3 = setTimeout(
			() => setLight3((light3) => getBlackOrOrange(light3)),
			Math.random() * 16000
		);
		return () => clearTimeout(timeout3);
	}, [light3]);

	useEffect(() => {
		setHeight(window.innerHeight);
	}, [height]);

	useEffect(() => {
		setWidth(window.innerWidth), [width];
	});

	useEffect(() => {
		window.addEventListener('resize', resizeListener);
		return () =>
			window.removeEventListener('resize', (height) => resizeListener(height));
	});

	const resizeListener = (height) => {
		if (window.innerHeight !== height) {
			setHeight(window.innerHeight);
		}
		if (window.innerWidth !== width) {
			setWidth(window.innerWidth);
		}
	};

	const getImage = (height, width, light1, light2, light3) => {
		const slider1 = (
			<motion.use
				initial={{ x: -4, y: -15 }}
				animate={{ x: 4, y: 15 }}
				transition={{ duration: 4.5, yoyo: Infinity, ease: 'easeInOut' }}
				xlinkHref="#J"
				fill="#000"
				fillOpacity={1}
				stroke="#000"
			/>
		);
		const slider2 = (
			<motion.use
				initial={{ x: 7, y: 25 }}
				animate={{ x: -5, y: -20 }}
				transition={{ duration: 7, yoyo: Infinity, ease: 'easeInOut' }}
				xlinkHref="#N"
				fillOpacity={1}
				stroke="#000"
			/>
		);

		const portrait = (
			<svg
				preserveAspectRatio="xMinYMin slice"
				viewBox={`0 0 375 ${height}`}
				width={width}
				height={height}
			>
				<defs>
					<path d="M0 0h375v500H0V0z" id="a" />
					<path
						d="M141.89 112.26c55.09 8.41 75.92 54.72 86.54 147.64 3.08 26.94 13.52 67.88 33.22 89.79 25.59 28.47 65.51 51.53 119.76 69.19"
						id="b"
					/>
					<path
						d="M141.89 106.04c55.09 8.41 81.44 52.29 92.06 145.21 3.15 27.56 13.58 73.36 33.27 94.39 24.57 26.22 62.63 47.99 114.19 65.32"
						id="c"
					/>
					<path
						d="M103.78 111.23c0 1.71 1.53 2.61 4.59 2.7h29.67c2.6 0 3.88-.54 3.85-1.62v-6.27"
						id="d"
					/>
					<path d="M106.81 103.4c-2.02 0-3.03.59-3.03 1.77v6.12" id="e" />
					<path d="M141.9 106.69c-.03-2.19-.73-3.29-2.1-3.29h-33.4" id="f" />
					<path d="M72.18 107.89l6.41-2.64h25.19" id="g" />
					<path d="M84.23 111.29c-1.7-2.46-3.84-2.46-6.44 0l-5.61-3.68" id="h" />
					<path d="M103.78 111.29H83.81h19.97z" id="i" />
					<path d="M85.81 104.97v6-6z" id="j" />
					<path
						d="M176.75 92.89c55.09 8.4 75.92 54.71 86.54 147.63 3.08 26.95 13.52 67.88 33.22 89.8 25.58 28.47 65.5 51.53 119.76 69.18"
						id="k"
					/>
					<path
						d="M176.75 86.66c55.09 8.41 81.44 52.29 92.06 145.21 3.15 27.57 13.57 73.37 33.27 94.39 24.57 26.22 62.63 48 114.19 65.33"
						id="l"
					/>
					<path
						d="M138.64 91.86c0 1.7 1.53 2.6 4.59 2.69h29.67c2.59 0 3.88-.54 3.85-1.62v-6.27"
						id="m"
					/>
					<path d="M141.67 84.03c-2.02 0-3.03.59-3.03 1.77v6.11" id="n" />
					<path d="M176.75 87.31c-.02-2.19-.72-3.28-2.09-3.28h-33.4" id="o" />
					<path d="M107.04 88.52l6.41-2.65h25.19" id="p" />
					<path d="M119.09 91.91c-1.7-2.45-3.85-2.45-6.44 0l-5.61-3.67" id="q" />
					<path d="M138.64 91.91h-19.98 19.98z" id="r" />
					<path d="M120.67 85.59v6-6z" id="s" />
					<path
						d="M175.42 149.21c54.01 13.72 70.24 61.84 71.77 155.35.45 27.12 6.86 68.87 24.34 92.6 22.69 30.82 60.18 57.66 112.46 80.5"
						id="t"
					/>
					<path
						d="M175.42 143.02c54.01 13.72 75.97 59.96 77.51 153.47.45 27.74 6.37 74.34 23.93 97.18 21.9 28.48 57.67 53.85 107.3 76.11"
						id="u"
					/>
					<path
						d="M137.01 144.48c-.17 1.7 1.27 2.74 4.31 3.13 17.11 1.67 26.95 2.63 29.53 2.89 2.58.25 3.91-.16 3.99-1.24l.61-6.24"
						id="v"
					/>
					<path d="M140.78 136.98c-2.01-.19-3.07.3-3.18 1.47l-.6 6.09" id="w" />
					<path d="M175.38 143.67c.19-2.19-.39-3.34-1.76-3.48l-33.24-3.25" id="x" />
					<path d="M105.88 138.08l6.64-2 25.07 2.45" id="y" />
					<path d="M117.54 142.64c-1.45-2.61-3.58-2.82-6.4-.63l-5.23-4.2" id="z" />
					<path d="M137 144.54l-19.88-1.94 19.88 1.94z" id="A" />
					<path d="M119.73 136.5l-.58 5.97.58-5.97z" id="B" />
					<path d="M25.5 417.42l286-170.73L229.8 0" id="C" />
					<path
						d="M47.64 106.74c.73 2.78-.62 5.55-3.02 6.18-2.4.64-4.95-1.1-5.68-3.88-.74-2.78.62-5.55 3.02-6.18 2.4-.64 4.94 1.1 5.68 3.88z"
						id="D"
					/>
					<path
						d="M65 132.23c.73 2.78-.62 5.55-3.02 6.19-2.4.63-4.95-1.11-5.68-3.88-.74-2.78.62-5.55 3.02-6.19 2.4-.63 4.94 1.11 5.68 3.88z"
						id="E"
					/>
					<path
						d="M69.57 89.46c.74 2.77-.62 5.54-3.02 6.18-2.4.64-4.94-1.1-5.68-3.88-.74-2.78.62-5.55 3.02-6.18 2.4-.64 4.95 1.1 5.68 3.88z"
						id="F"
					/>
					<path
						d="M238.72 77.73c.73 2.78-.62 5.55-3.02 6.19-2.4.63-4.95-1.11-5.68-3.89-.74-2.77.61-5.54 3.01-6.18 2.41-.63 4.95 1.11 5.69 3.88z"
						id="G"
					/>
					<path
						d="M187.28 228.99c.73 2.78-.62 5.55-3.02 6.18-2.4.64-4.95-1.1-5.68-3.88-.74-2.78.61-5.55 3.02-6.18 2.4-.64 4.94 1.1 5.68 3.88z"
						id="H"
					/>
					<path
						d="M62.17 251.17l4.42-1.17 15.6 58.97-4.42 1.17-15.6-58.97z"
						id="I"
					/>
					<path d="M66.3 276.37l8.7-2.3.85 3.18-8.71 2.3-.84-3.18z" id="J" />
					<path d="M-4.89 413.59l30.39 3.83-30.39-3.83z" id="K" />
					<path d="M-59.89 109.98l83 307.44-83-307.44z" id="L" />
					<path
						d="M72.18 240.29l4.42-1.16 15.6 58.97-4.42 1.17-15.6-58.98z"
						id="M"
					/>
					<path d="M76.31 265.5l8.71-2.3.84 3.17-8.7 2.31-.85-3.18z" id="N" />
					<path d="M220.41 173.91c-4.59-6.36-12.64-13.08-24.17-20.16" id="O" />
					<path d="M238.81 294.43l-1.9-7.08 1.9 7.08z" id="P" />
					<path d="M249.67 287.47l-.17-7.33.17 7.33z" id="Q" />
					<path d="M273.57 274.33l-1.97-7.07 1.97 7.07z" id="R" />
					<path d="M252.11 328.44l-1.89-20.3 1.89 20.3z" id="S" />
					<path d="M245.31 322.14h13.67v15.62h-13.67v-15.62z" id="T" />
					<path d="M255.78 348.95l-3.67-19" id="U" />
				</defs>
				<use xlinkHref="#a" fill="#fff" />
				<use xlinkHref="#b1HOwuRRSF" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#b" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#c" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#d" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#e" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#f" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#g" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#h" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#i" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#j" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#b2OiQBONDu" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#k" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#l" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#m" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#n" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#o" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#p" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#q" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#r" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#s" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#elrf6nibo" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#t" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#u" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#v" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#w" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#x" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#y" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#z" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#A" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#B" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#C" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#D" fill="#fff" fillOpacity={0} />
				<use xlinkHref="#D" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#E" fill="#fff" fillOpacity={0} />
				<use xlinkHref="#E" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#F" fill="#fff" fillOpacity={0} />
				<use xlinkHref="#F" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#G" fill="#fff" fillOpacity={0} />
				<use xlinkHref="#G" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#H" fill="#fff" fillOpacity={0} />
				<use xlinkHref="#H" fillOpacity={0} stroke="#000" />
				<use xlinkHref="#I" fill="#fff" fillOpacity={0} />
				<use xlinkHref="#I" fillOpacity={0} stroke="#000" />
				{slider2}
				<use xlinkHref="#K" fillOpacity={0} stroke="#3c240a" />
				<use xlinkHref="#L" fillOpacity={0} stroke="#3c240a" />
				<use xlinkHref="#M" fill="#fff" fillOpacity={0} />
				<use xlinkHref="#M" fillOpacity={0} stroke="#000" />
				<g>{slider1}</g>
				<g>
					<use xlinkHref="#O" fill="#fff" fillOpacity={0.05} />
					<use xlinkHref="#O" fillOpacity={0} stroke="#fff" strokeWidth={4.5} />
				</g>
				<g>
					<use xlinkHref="#P" fillOpacity={0} stroke="#fff" strokeWidth={6} />
				</g>
				<g>
					<use xlinkHref="#Q" fillOpacity={0} stroke="#fff" strokeWidth={4.95} />
				</g>
				<g>
					<use xlinkHref="#R" fillOpacity={0} stroke="#fff" strokeWidth={6} />
				</g>
				<g>
					<use xlinkHref="#S" fillOpacity={0} stroke="#fff" strokeWidth={5} />
				</g>
				<g>
					<use xlinkHref="#T" fill="#fff" fillOpacity={0.05} />
				</g>
				<g>
					<use xlinkHref="#U" fillOpacity={0} stroke="#fff" strokeWidth={5.2} />
				</g>
			</svg>
		);

		if (width < height) {
			return portrait;
		}
		if (width >= height) {
			return width > BREAKPOINTS.HEADER ? (
				<svg
					preserveAspectRatio="xMinYMin slice"
					viewBox={`0 0 667 ${width}`}
					width={width}
					height={height}
				>
					<defs>
						<path d="M184.92-31.33h375v500h-375v-500z" id="a" />
						<path
							d="M326.84 80.93c55.08 8.41 75.91 54.72 86.53 147.64 3.08 26.95 13.52 67.88 33.22 89.8 25.59 28.47 102.9 64.62 231.95 108.47"
							id="b"
						/>
						<path
							d="M326.84 75.21c55.08 8.41 81.43 52.29 92.05 145.21 3.15 27.57 13.58 73.37 33.27 94.39 24.57 26.22 100.53 61.07 227.88 104.56"
							id="c"
						/>
						<path
							d="M288.72 79.9c0 1.71 1.53 2.61 4.59 2.7h29.68c2.59 0 3.87-.54 3.85-1.62v-6.27"
							id="d"
						/>
						<path d="M291.75 72.07c-2.02 0-3.03.59-3.03 1.77v6.12" id="e" />
						<path d="M326.84 75.36c-.03-2.19-.73-3.29-2.1-3.29h-33.4" id="f" />
						<path d="M257.12 76.56l6.42-2.64h25.18" id="g" />
						<path d="M269.17 79.96c-1.7-2.46-3.84-2.46-6.44 0l-5.61-3.68" id="h" />
						<path d="M288.72 79.96h-19.97 19.97z" id="i" />
						<path d="M270.75 73.64v6-6z" id="j" />
						<path
							d="M361.69 61.56c55.09 8.4 75.92 54.71 86.54 147.63 3.08 26.95 13.52 67.88 33.22 89.8 25.58 28.47 91.28 60.02 197.09 94.64"
							id="k"
						/>
						<path
							d="M361.69 55.34c55.09 8.4 81.44 52.28 92.06 145.2 3.15 27.57 13.57 73.37 33.27 94.39 24.57 26.23 88.91 56.61 193.02 91.16"
							id="l"
						/>
						<path
							d="M323.58 60.53c0 1.71 1.53 2.6 4.59 2.69h29.67c2.59 0 3.88-.54 3.85-1.61v-6.27"
							id="m"
						/>
						<path d="M326.61 52.7c-2.02 0-3.03.59-3.03 1.77v6.12" id="n" />
						<path d="M361.69 55.99c-.02-2.2-.72-3.29-2.09-3.29h-33.4" id="o" />
						<path d="M291.98 57.19l6.41-2.64h25.19" id="p" />
						<path d="M304.03 60.59c-1.7-2.46-3.85-2.46-6.44 0l-5.61-3.68" id="q" />
						<path d="M323.58 60.59H303.6h19.98z" id="r" />
						<path d="M305.61 54.27v6-6z" id="s" />
						<path
							d="M360.36 117.88c54.01 13.73 70.24 61.84 71.77 155.35.45 27.12 6.86 68.88 24.34 92.61 22.7 30.82 96.72 71.98 222.07 123.49"
							id="t"
						/>
						<path
							d="M360.36 111.69c54.01 13.72 75.97 59.96 77.51 153.47.45 27.74 6.37 74.34 23.93 97.18 21.9 28.48 94.15 67.66 216.74 117.52"
							id="u"
						/>
						<path
							d="M321.95 113.15c-.17 1.7 1.27 2.75 4.31 3.13 17.11 1.67 26.95 2.64 29.53 2.89 2.58.25 3.91-.16 3.99-1.24l.61-6.24"
							id="v"
						/>
						<path d="M325.72 105.66c-2.01-.2-3.07.29-3.18 1.46l-.6 6.09" id="w" />
						<path d="M360.33 112.34c.18-2.18-.4-3.34-1.77-3.48l-33.24-3.24" id="x" />
						<path d="M290.82 106.76l6.64-2.01 25.07 2.45" id="y" />
						<path d="M302.48 111.31c-1.45-2.61-3.58-2.82-6.4-.62l-5.23-4.21" id="z" />
						<path d="M321.94 113.21l-19.88-1.94 19.88 1.94z" id="A" />
						<path d="M304.67 105.18l-.58 5.97.58-5.97z" id="B" />
						<path d="M210.44 386.09l286-170.73-81.7-246.69" id="C" />
						<path
							d="M232.58 75.41c.73 2.78-.62 5.55-3.02 6.18-2.4.64-4.95-1.1-5.68-3.88-.74-2.77.62-5.54 3.02-6.18 2.4-.64 4.94 1.1 5.68 3.88z"
							id="D"
						/>
						<path
							d="M249.94 100.91c.73 2.77-.62 5.54-3.02 6.18-2.4.63-4.95-1.1-5.68-3.88-.74-2.78.62-5.55 3.02-6.18 2.4-.64 4.94 1.1 5.68 3.88z"
							id="E"
						/>
						<path
							d="M254.51 58.13c.74 2.78-.62 5.55-3.02 6.18-2.4.64-4.94-1.1-5.68-3.88-.73-2.78.62-5.55 3.02-6.18 2.4-.64 4.95 1.1 5.68 3.88z"
							id="F"
						/>
						<path
							d="M423.66 46.4c.73 2.78-.62 5.55-3.02 6.19-2.4.63-4.95-1.11-5.68-3.88-.74-2.78.61-5.55 3.02-6.19 2.4-.63 4.94 1.11 5.68 3.88z"
							id="G"
						/>
						<path
							d="M372.22 197.66c.73 2.78-.62 5.55-3.02 6.18-2.4.64-4.95-1.1-5.68-3.88-.74-2.77.62-5.54 3.02-6.18 2.4-.64 4.94 1.1 5.68 3.88z"
							id="H"
						/>
						<path
							d="M247.11 219.84l4.42-1.17 15.6 58.97-4.42 1.17-15.6-58.97z"
							id="I"
						/>
						<path d="M251.24 245.05l8.71-2.31.84 3.18-8.7 2.3-.85-3.17z" id="J" />
						<path d="M-8.56 370.13l219 15.96-219-15.96z" id="K" />
						<path d="M87.55-3.34l120.5 389.43L87.55-3.34z" id="L" />
						<path
							d="M257.12 208.97l4.42-1.17 15.6 58.97-4.42 1.17-15.6-58.97z"
							id="M"
						/>
						<path d="M261.26 234.17l8.7-2.3.84 3.18-8.7 2.3-.84-3.18z" id="N" />
						<path d="M405.35 142.59c-4.59-6.37-12.64-13.09-24.17-20.17" id="O" />
						<path d="M423.75 263.11l-1.9-7.09 1.9 7.09z" id="P" />
						<path d="M434.61 256.14l-.17-7.33.17 7.33z" id="Q" />
						<path d="M458.51 243l-1.96-7.07 1.96 7.07z" id="R" />
						<path d="M437.05 297.12l-1.89-20.31 1.89 20.31z" id="S" />
						<path d="M430.25 290.81h13.67v15.62h-13.67v-15.62z" id="T" />
						<path d="M440.72 317.62l-3.67-19" id="U" />
						<path
							d="M558.7 103.26c.18 10.36-9.53 18.94-21.67 19.15-12.14.22-22.14-8.02-22.32-18.38-.18-10.36 9.53-18.95 21.67-19.16 12.14-.21 22.14 8.03 22.32 18.39z"
							id="V"
						/>
						<path
							d="M524 131.67c1.18 5.04-2.65 10.27-8.56 11.66-5.91 1.39-11.67-1.58-12.86-6.62-1.19-5.05 2.65-10.27 8.56-11.66 5.91-1.39 11.67 1.57 12.86 6.62z"
							id="W"
						/>
						<path
							d="M498.21 147.48c.81 3.44-1.81 7-5.84 7.95-4.02.94-7.95-1.08-8.76-4.52-.81-3.44 1.8-7 5.83-7.94 4.03-.95 7.96 1.07 8.77 4.51z"
							id="X"
						/>
						<path d="M503.44 63.17c-46.43-2.23-40.76-54.82-26.64-64.7" id="Y" />
						<path d="M565.92 75.21c-23.5 11.67-44.33 7.65-62.48-12.04" id="Z" />
						<path d="M626.72 85.99c-26 9.17-46.27 5.58-60.8-10.78" id="aa" />
						<path d="M678.54 68.27c-9.81 17.41-27.26 23.25-52.37 17.5" id="ab" />
						<path
							d="M-12.84 471.48c-.73 2.78.62 5.55 3.02 6.19 2.4.63 4.95-1.11 5.68-3.88.74-2.78-.62-5.55-3.02-6.19-2.4-.63-4.94 1.11-5.68 3.88z"
							id="ac"
						/>
						<path d="M10.69 207.8l12.18.96-12.18-.96z" id="ad" />
						<path d="M26.23 208.54l12.18.96-12.18-.96z" id="ae" />
						<path d="M42.11 209.5l12.18.96-12.18-.96z" id="af" />
						<path d="M10.69 217.59l12.18.96-12.18-.96z" id="ag" />
						<path d="M26.23 218.55l12.18.96-12.18-.96z" id="ah" />
						<path d="M42.11 219.51l12.18.96-12.18-.96z" id="ai" />
						<path d="M10.69 207.8v9.79-9.79z" id="aj" />
						<path d="M22.87 208.54v10.01-10.01z" id="ak" />
						<path d="M26.23 208.54v10.01-10.01z" id="al" />
						<path d="M38.41 209.5v10.01-10.01z" id="am" />
						<path d="M42.11 209.5v9.53-9.53z" id="an" />
						<path d="M54.29 210.46v9.53-9.53z" id="ao" />
						<path d="M10.69 221.1l12.18.96-12.18-.96z" id="ap" />
						<path d="M26.23 221.84l12.18.96-12.18-.96z" id="aq" />
						<path d="M42.11 222.8l12.18.96-12.18-.96z" id="ar" />
					</defs>
					<use xlinkHref="#a" fill="#fff" />
					<use xlinkHref="#h4b4t6cpP" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#b" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#c" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#d" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#e" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#f" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#g" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#h" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#i" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#j" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#a2ZgMvpHQj" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#k" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#l" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#m" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#n" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#o" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#p" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#q" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#r" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#s" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#cjU9MUAYh" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#t" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#u" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#v" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#w" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#x" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#y" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#z" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#A" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#B" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#C" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#D" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#D" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#E" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#E" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#F" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#F" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#G" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#G" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#H" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#H" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#I" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#I" fillOpacity={0} stroke="#000" />
					{slider1}
					<use xlinkHref="#K" fillOpacity={0} stroke="#3c240a" />
					<use xlinkHref="#L" fillOpacity={0} stroke="#3c240a" />
					<use xlinkHref="#M" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#M" fillOpacity={0} stroke="#000" />
					{slider2}
					<use xlinkHref="#O" fill="#fff" fillOpacity={0.05} />
					<use xlinkHref="#O" fillOpacity={0} stroke="#fff" strokeWidth={4.5} />
					<use xlinkHref="#P" fillOpacity={0} stroke="#fff" strokeWidth={6} />
					<use xlinkHref="#Q" fillOpacity={0} stroke="#fff" strokeWidth={4.95} />
					<use xlinkHref="#R" fillOpacity={0} stroke="#fff" strokeWidth={6} />
					<use xlinkHref="#S" fillOpacity={0} stroke="#fff" strokeWidth={5} />
					<use xlinkHref="#T" fill="#fff" fillOpacity={0.05} />
					<use xlinkHref="#U" fillOpacity={0} stroke="#fff" strokeWidth={5.2} />
					<use xlinkHref="#V" fill="#8988c9" fillOpacity={0} />
					<use xlinkHref="#V" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#W" fill="#8988c9" fillOpacity={0} />
					<use xlinkHref="#W" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#X" fill="#8988c9" fillOpacity={0} />
					<use xlinkHref="#X" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#Y" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#Z" fillOpacity={0} stroke="#2b0836" />
					<use xlinkHref="#aa" fillOpacity={0} stroke="#2b0836" />
					<use xlinkHref="#ab" fillOpacity={0} stroke="#2b0836" />
					<use xlinkHref="#b5aCsIcyPW" fillOpacity={0} stroke="#2b0836" />
					<use xlinkHref="#ac" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#ac" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#ad" fillOpacity={0} stroke="#3c240a" />
					<g>
						<use xlinkHref="#ae" fillOpacity={0} stroke="#3c240a" />
					</g>
					<g>
						<use xlinkHref="#af" fillOpacity={0} stroke="#3c240a" />
					</g>
					<g>
						<use xlinkHref="#ag" fillOpacity={0} stroke="#3c240a" />
					</g>
					<g>
						<use xlinkHref="#ah" fillOpacity={0} stroke="#3c240a" />
					</g>
					<g>
						<use xlinkHref="#ai" fillOpacity={0} stroke="#3c240a" />
					</g>
					<g>
						<use xlinkHref="#aj" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#ak" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#al" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#am" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#an" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#ao" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#ap" fillOpacity={1} stroke={light1} />
					</g>
					<g>
						<use xlinkHref="#aq" fillOpacity={1} stroke={light2} />
					</g>
					<g>
						<use xlinkHref="#ar" fillOpacity={1} stroke={light3} />
					</g>
				</svg>
			) : (
				<svg
					preserveAspectRatio="xMinYMin slice"
					viewBox={`0 0 667 ${width}`}
					width={width}
					height={height}
				>
					<defs>
						<path d="M184.94 0h375v500h-375V0z" id="a" />
						<path
							d="M326.84 112.26c55.08 8.41 75.91 54.72 86.53 147.64 3.08 26.94 13.52 67.88 33.22 89.79 25.59 28.47 102.9 64.63 231.95 108.48"
							id="b"
						/>
						<path
							d="M326.84 106.54c55.08 8.41 81.43 52.29 92.05 145.21 3.15 27.56 13.58 73.36 33.27 94.39 24.57 26.22 100.53 61.07 227.88 104.56"
							id="c"
						/>
						<path
							d="M288.72 111.23c0 1.71 1.53 2.61 4.59 2.7h29.68c2.59 0 3.87-.54 3.85-1.62v-6.27"
							id="d"
						/>
						<path d="M291.75 103.4c-2.02 0-3.03.59-3.03 1.77v6.12" id="e" />
						<path d="M326.84 106.69c-.03-2.19-.73-3.29-2.1-3.29h-33.4" id="f" />
						<path d="M257.12 107.89l6.42-2.64h25.18" id="g" />
						<path d="M269.17 111.29c-1.7-2.46-3.84-2.46-6.44 0l-5.61-3.68" id="h" />
						<path d="M288.72 111.29h-19.97 19.97z" id="i" />
						<path d="M270.75 104.97v6-6z" id="j" />
						<path
							d="M361.69 92.89c55.09 8.4 75.92 54.71 86.54 147.63 3.08 26.95 13.52 67.88 33.22 89.8 25.58 28.47 91.28 60.02 197.09 94.64"
							id="k"
						/>
						<path
							d="M361.69 86.66c55.09 8.41 81.44 52.29 92.06 145.21 3.15 27.57 13.57 73.37 33.27 94.39 24.57 26.22 88.91 56.61 193.02 91.16"
							id="l"
						/>
						<path
							d="M323.58 91.86c0 1.7 1.53 2.6 4.59 2.69h29.67c2.59 0 3.88-.54 3.85-1.62v-6.27"
							id="m"
						/>
						<path d="M326.61 84.03c-2.02 0-3.03.59-3.03 1.77v6.11" id="n" />
						<path d="M361.69 87.31c-.02-2.19-.72-3.28-2.09-3.28h-33.4" id="o" />
						<path d="M291.98 88.52l6.41-2.65h25.19" id="p" />
						<path d="M304.03 91.91c-1.7-2.45-3.85-2.45-6.44 0l-5.61-3.67" id="q" />
						<path d="M323.58 91.91H303.6h19.98z" id="r" />
						<path d="M305.61 85.59v6-6z" id="s" />
						<path
							d="M360.36 149.21c54.01 13.72 70.24 61.84 71.77 155.35.45 27.12 6.86 68.87 24.34 92.6 22.7 30.82 96.72 71.99 222.07 123.5"
							id="t"
						/>
						<path
							d="M360.36 143.02c54.01 13.72 75.97 59.96 77.51 153.47.45 27.74 6.37 74.34 23.93 97.18 21.9 28.48 94.15 67.66 216.74 117.52"
							id="u"
						/>
						<path
							d="M321.95 144.48c-.17 1.7 1.27 2.74 4.31 3.13 17.11 1.67 26.95 2.63 29.53 2.89 2.58.25 3.91-.16 3.99-1.24l.61-6.24"
							id="v"
						/>
						<path d="M325.72 136.98c-2.01-.19-3.07.3-3.18 1.47l-.6 6.09" id="w" />
						<path d="M360.33 143.67c.18-2.19-.4-3.34-1.77-3.48l-33.24-3.25" id="x" />
						<path d="M290.82 138.08l6.64-2 25.07 2.45" id="y" />
						<path d="M302.48 142.64c-1.45-2.61-3.58-2.82-6.4-.63l-5.23-4.2" id="z" />
						<path d="M321.94 144.54l-19.88-1.94 19.88 1.94z" id="A" />
						<path d="M304.67 136.5l-.58 5.97.58-5.97z" id="B" />
						<path d="M210.44 417.42l286-170.73L414.74 0" id="C" />
						<path
							d="M232.58 106.74c.73 2.78-.62 5.55-3.02 6.18-2.4.64-4.95-1.1-5.68-3.88-.74-2.78.62-5.55 3.02-6.18 2.4-.64 4.94 1.1 5.68 3.88z"
							id="D"
						/>
						<path
							d="M249.94 132.23c.73 2.78-.62 5.55-3.02 6.19-2.4.63-4.95-1.11-5.68-3.88-.74-2.78.62-5.55 3.02-6.19 2.4-.63 4.94 1.11 5.68 3.88z"
							id="E"
						/>
						<path
							d="M254.51 89.46c.74 2.77-.62 5.54-3.02 6.18-2.4.64-4.94-1.1-5.68-3.88-.73-2.78.62-5.55 3.02-6.18 2.4-.64 4.95 1.1 5.68 3.88z"
							id="F"
						/>
						<path
							d="M423.66 77.73c.73 2.78-.62 5.55-3.02 6.19-2.4.63-4.95-1.11-5.68-3.89-.74-2.77.61-5.54 3.02-6.18 2.4-.63 4.94 1.11 5.68 3.88z"
							id="G"
						/>
						<path
							d="M372.22 228.99c.73 2.78-.62 5.55-3.02 6.18-2.4.64-4.95-1.1-5.68-3.88-.74-2.78.62-5.55 3.02-6.18 2.4-.64 4.94 1.1 5.68 3.88z"
							id="H"
						/>
						<path
							d="M247.11 251.17l4.42-1.17 15.6 58.97-4.42 1.17-15.6-58.97z"
							id="I"
						/>
						<path d="M251.24 276.37l8.71-2.3.84 3.18-8.7 2.3-.85-3.18z" id="J" />
						<path d="M-8.56 401.46l219 15.96-219-15.96z" id="K" />
						<path d="M87.55 27.98l120.5 389.44L87.55 27.98z" id="L" />
						<path
							d="M257.12 240.29l4.42-1.16 15.6 58.97-4.42 1.17-15.6-58.98z"
							id="M"
						/>
						<path d="M261.26 265.5l8.7-2.3.84 3.17-8.7 2.31-.84-3.18z" id="N" />
						<path d="M405.35 173.91c-4.59-6.36-12.64-13.08-24.17-20.16" id="O" />
						<path d="M423.75 294.43l-1.9-7.08 1.9 7.08z" id="P" />
						<path d="M434.61 287.47l-.17-7.33.17 7.33z" id="Q" />
						<path d="M458.51 274.33l-1.96-7.07 1.96 7.07z" id="R" />
						<path d="M437.05 328.44l-1.89-20.3 1.89 20.3z" id="S" />
						<path d="M430.25 322.14h13.67v15.62h-13.67v-15.62z" id="T" />
						<path d="M440.72 348.95l-3.67-19" id="U" />
						<path
							d="M-12.84 502.81c-.73 2.78.62 5.55 3.02 6.18 2.4.64 4.95-1.1 5.68-3.88.74-2.77-.62-5.54-3.02-6.18-2.4-.63-4.94 1.1-5.68 3.88z"
							id="V"
						/>
						<path d="M10.69 239.13l12.18.96-12.18-.96z" id="W" />
						<path d="M26.23 239.86l12.18.97-12.18-.97z" id="X" />
						<path d="M42.11 240.83l12.18.96-12.18-.96z" id="Y" />
						<path d="M10.69 248.92l12.18.96-12.18-.96z" id="Z" />
						<path d="M26.23 249.88l12.18.96-12.18-.96z" id="aa" />
						<path d="M42.11 250.84l12.18.96-12.18-.96z" id="ab" />
						<path d="M10.69 239.13v9.79-9.79z" id="ac" />
						<path d="M22.87 239.86v10.02-10.02z" id="ad" />
						<path d="M26.23 239.86v10.02-10.02z" id="ae" />
						<path d="M38.41 240.83v10.01-10.01z" id="af" />
						<path d="M42.11 240.83v9.53-9.53z" id="ag" />
						<path d="M54.29 241.79v9.53-9.53z" id="ah" />
						<path d="M10.69 252.43l12.18.96-12.18-.96z" id="ai" />
						<path d="M26.23 253.16l12.18.97-12.18-.97z" id="aj" />
						<path d="M42.11 254.13l12.18.96-12.18-.96z" id="ak" />
					</defs>
					<use xlinkHref="#a" fill="#fff" />
					<use xlinkHref="#bLUeSPAgP" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#b" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#c" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#d" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#e" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#f" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#g" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#h" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#i" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#j" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#bjkilRTLD" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#k" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#l" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#m" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#n" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#o" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#p" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#q" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#r" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#s" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#a3qnjZEAqy" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#t" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#u" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#v" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#w" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#x" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#y" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#z" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#A" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#B" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#C" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#D" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#D" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#E" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#E" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#F" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#F" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#G" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#G" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#H" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#H" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#I" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#I" fillOpacity={0} stroke="#000" />
					{slider1}
					<use xlinkHref="#K" fillOpacity={0} stroke="#3c240a" />
					<use xlinkHref="#L" fillOpacity={0} stroke="#3c240a" />
					<use xlinkHref="#M" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#M" fillOpacity={0} stroke="#000" />
					{slider2}
					<use xlinkHref="#O" fill="#fff" fillOpacity={0.05} />
					<use xlinkHref="#O" fillOpacity={0} stroke="#fff" strokeWidth={4.5} />
					<use xlinkHref="#P" fillOpacity={0} stroke="#fff" strokeWidth={6} />
					<use xlinkHref="#Q" fillOpacity={0} stroke="#fff" strokeWidth={4.95} />
					<use xlinkHref="#R" fillOpacity={0} stroke="#fff" strokeWidth={6} />
					<use xlinkHref="#S" fillOpacity={0} stroke="#fff" strokeWidth={5} />
					<use xlinkHref="#T" fill="#fff" fillOpacity={0.05} />
					<use xlinkHref="#U" fillOpacity={0} stroke="#fff" strokeWidth={5.2} />
					<use xlinkHref="#b1a4FGzjHW" fillOpacity={0} stroke="#2b0836" />
					<use xlinkHref="#V" fill="#fff" fillOpacity={0} />
					<use xlinkHref="#V" fillOpacity={0} stroke="#000" />
					<use xlinkHref="#W" fillOpacity={0} stroke="#3c240a" />
					<use xlinkHref="#X" fillOpacity={0} stroke="#3c240a" />
					<use xlinkHref="#Y" fillOpacity={0} stroke="#3c240a" />
					<use xlinkHref="#Z" fillOpacity={0} stroke="#3c240a" />
					<g>
						<use xlinkHref="#aa" fillOpacity={0} stroke="#3c240a" />
					</g>
					<g>
						<use xlinkHref="#ab" fillOpacity={0} stroke="#3c240a" />
					</g>
					<g>
						<use xlinkHref="#ac" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#ad" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#ae" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#af" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#ag" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#ah" fillOpacity={0} stroke="#2b0836" />
					</g>
					<g>
						<use xlinkHref="#ai" fillOpacity={0} stroke={light1} />
					</g>
					<g>
						<use xlinkHref="#aj" fillOpacity={0} stroke={light2} />
					</g>
					<g>
						<use xlinkHref="#ak" fillOpacity={0} stroke={light3} />
					</g>
				</svg>
			);
		}
	};
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg">
			{getImage(height, width, light1, light2, light3)}
		</motion.div>
	);
};

const getBlackOrOrange = (previousColor) => {
	const random = Math.floor(Math.random() * 2);
	let output = getNewColor();
	return output === previousColor ? getNewColor((random + 1) % 2) : output;

	function getNewColor() {
		switch (Math.floor(Math.random() * 2)) {
			case 0:
				return orange;
			case 1:
				return black;
			default:
				return black;
		}
	}
};

export default SVGBackground;
