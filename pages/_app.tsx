import "../styles/globals.css";
import Navbar from "../components/reusables/navbar";
// import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Footer from "../components/reusables/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="lofi">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
