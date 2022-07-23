import Head from "next/head";
import Playground from "../components/Playground";

export default function Home() {
  return (
    <>
      <Head>
        <title>code-inspector</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Playground />
    </>
  );
}
