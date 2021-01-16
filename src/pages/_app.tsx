import * as React from "react";
import App, { AppProps } from "next/app";
import 'sanitize.css'
import './styles.css'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;

    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
