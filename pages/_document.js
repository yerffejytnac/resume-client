import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { injectGlobal } from "styled-components";

import "../styles/global-styles";
const GA_TRACKING_ID = "UA-68616953-5";
class Root extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Jeffrey Michael Canty — User Interface Engineer</title>
          {this.props.styleTags}

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${
              GA_TRACKING_ID
            }`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `
            }}
          />
        </Head>
        <body>
          <Main className="main" />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Root;
