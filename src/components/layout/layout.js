import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';
import { StyledInnerLayout, StyledOuterLayout } from './layout.css';
import GlobalStyle from 'global.css.js';

const Layout = ({ data, margin, children }) => (
	<div>
		<GlobalStyle />
		<Head />
		<StyledOuterLayout>
			<Header title={data.site.siteMetadata.siteTitleShort} />
			<StyledInnerLayout margin={margin}>{children}</StyledInnerLayout>

			<Footer />
		</StyledOuterLayout>
	</div>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	data: PropTypes.object.isRequired,
	margin: PropTypes.bool,
};

const LayoutWithQuery = (props) => (
	<StaticQuery
		query={graphql`
			query LayoutQuery {
				site {
					siteMetadata {
						siteTitleShort
					}
				}
			}
		`}
		render={(data) => <Layout data={data} {...props} />}
	/>
);

LayoutWithQuery.propTypes = {
	children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
