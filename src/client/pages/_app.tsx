import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../common/styles/theme';
import Layout from '../components/blocks/Layout';

class MyApp extends App {
	public render(): JSX.Element {
		const {Component, pageProps} = this.props;

		return (
			<Container>
				<Head>
					<title>Cortex JE</title>
				</Head>
				<ThemeProvider theme={theme.main}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</Container>
		);
	}
}

export default MyApp;
