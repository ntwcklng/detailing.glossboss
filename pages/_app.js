// pages/_app.js
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import config from '../config'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content={config.mainColor} />
                    <meta
            name="description"
            content={Component.metaDesc}
          />
          <title>{Component.metaTitle}</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
