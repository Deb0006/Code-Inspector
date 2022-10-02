import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/prism-tomorrow.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
