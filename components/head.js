import Head from 'next/head'
import config from '../config'

export default () => (
  <div>
    <Head>
      <title>{config.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    </Head>
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
  </div>
)