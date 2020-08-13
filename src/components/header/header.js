import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, LogoSquare, StyledHeader, Wrapper } from './header.css';
import Nav from 'components/header/nav';

const Header = ({ title }) => (
	<Wrapper>
		<StyledHeader>
			<Container>
				<LogoSquare>
					<Link to="/">
						<h1 className="white">{title}</h1>
					</Link>
				</LogoSquare>

				<Nav />
			</Container>
		</StyledHeader>
	</Wrapper>
);

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
