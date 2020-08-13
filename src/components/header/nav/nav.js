import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { useStaticQuery, graphql } from 'gatsby';

const Nav = () => {
	const data = useStaticQuery(graphql`
		query NavQuery {
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
		<Container>
			<ul>
				{data.synthsJson.models.map((m, i) => (
					<li key={i}>
						<Link to={m.slug}>{m.model}</Link>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default Nav;
