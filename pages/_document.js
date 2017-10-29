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
          <script
            dangerouslySetInnerHTML={{
              __html: `  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-20363654-2', 'auto');
            ga('send', 'pageview');`
            }}
          />
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
