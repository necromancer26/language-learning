import "../styles/globals.css";
import "../styles/navbar.css"
import Head from "next/head";
import Navbar from "../components/reusables/navbar";
// import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Footer from "../components/reusables/footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="lofi">
      <Head>
        <title>Polydioms</title>
        <meta name="description" content="Polydioms, language services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
