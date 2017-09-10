import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import config from '../config'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <script dangerouslySetInnerHTML={{__html: `  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-20363654-2', 'auto');
            ga('send', 'pageview');`}} />
          <title>{config.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
          <meta name="description" content="Lackdefekte beseitigen - Keramikversiegelung - Lederreparatur - Autopflege Mieth in 46284 Dorsten" />
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
        <style jsx global>{`
          * {
            margin: 0;
            box-sizing: border-box
          }
          body {
            font-family: 'Open Sans', sans-serif;
            color: #4e4e4e;
          }
          a {
            color: #50A8DB;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
          }
          a:hover {
            color: #000;
            text-decoration: none;
          }
          img {
            max-width: 100%;
          }
        `}</style>
      </html>
    )
  }
}