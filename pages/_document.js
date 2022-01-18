import Document, { Head, Main, NextScript, Html } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import config from '../config'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <meta name="google-site-verification" content="VUJ1Um81u_bwUp9wfsWrz-r-bYUP6E_Ueg0Z_63w68k" />
        </Head>
        <body>
          {this.props.styleTags}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
