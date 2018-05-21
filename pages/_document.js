import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import config from '../config'

injectGlobal`
  body {
    background-color: #fafbff;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto";
    text-rendering:optimizeLegibility;
    -webkit-font-smoothing:antialiased;
  };
  * {
    box-sizing: border-box
  };

`

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html lang="de">
        <Head>
          <title>{config.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content={config.mainColor} />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <meta
            name="description"
            content="Wir beseitigen Lackdefekte - Tragen Keramikversiegelung auf - Reparieren Leder - Autopflege Mieth in 46284 Dorsten"
          />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
