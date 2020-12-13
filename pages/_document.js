import Document, { Head, Main, NextScript, Html } from 'next/document';

console.log("2nd ****************** doc ********************")


export default class MyDocument extends Document {
    getInitialProps = async (ctx) => {
        console.log(ctx)
        return{ name : 'doc.js'}
      }

    render() {
      return (
        <Html lang="en">
          <Head>
            {/* PWA primary color */}
            <meta name="theme-color"/>
            <link
              rel="stylesheet"
              href="https://rsms.me/inter/inter.css"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
