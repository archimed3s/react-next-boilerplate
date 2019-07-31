import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from 'common/styles/global';
import theme from 'common/styles/theme';
import Layout from 'blocks/Layout';

class MyApp extends App {
	public render(): JSX.Element {
		const {Component, pageProps} = this.props;

		return (
			<Container>
				<Head>
					<title>Cortex JE</title>
				</Head>
				<ThemeProvider theme={theme.main}>
					<>
						<GlobalStyles />
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</>
				</ThemeProvider>
			</Container>
		);
	}
}

export default MyApp;
