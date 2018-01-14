import React from 'react';
import Head from 'next/head';

const PageWrapper = (Page) => {
    return class Higher extends React.Component {
        static async getInitialProps(ctx) {
            return Page.getInitialProps ? await Page.getInitialProps(ctx) : {};
        }
        render() {
            return (
                <div>
                    <Head>
                        <meta charSet="utf-8" />
                        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <title>Call me crazy!</title>
                        <meta name="description" content="Call me crazy" />
                    </Head>
                    <Page {...this.props} />
                </div>
            )
        }
    }
}

export default PageWrapper;