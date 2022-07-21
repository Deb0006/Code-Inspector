import Head from "next/head";
import Navbar from "../components/Navbar";
import Playground from "../components/Playground";
import Footer from "../components/Footer";
// import styles from "../styles/Home.module.css";
const prism = require("prismjs");

export default function Home() {
  return (
    <>
      <Head>
        <title>inspector-ai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Playground />
    </>
  );
}
