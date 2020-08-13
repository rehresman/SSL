import React from 'react';
import { StyledFooter } from './footer.css';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
	const data = useStaticQuery(graphql`
		query FooterQuery {
			footerJson {
				links {
					name
					link
				}
				content
			}
		}
	`);
	return (
		<StyledFooter>
			<div className="links">
				{data.footerJson.links.map((l, i) => (
					<Link key={i} to={l.link}>
						{l.name}
					</Link>
				))}
			</div>
			<p>{data.footerJson.content}</p>
		</StyledFooter>
	);
};

export default Footer;
