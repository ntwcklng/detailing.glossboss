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
          <meta
            name="description"
            content="Wir beseitigen Lackdefekte - Tragen Keramikversiegelung auf - Reparieren Leder - Autopflege Mieth in 46284 Dorsten"
          />
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
