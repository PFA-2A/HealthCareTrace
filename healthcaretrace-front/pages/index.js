
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/projects/Content";
import LeftNavBar from "../components/projects/LeftNavBar";
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>extensivly</title>
        <meta name="description" content="extensivly" />
        <link rel="icon" href="/AGRI (1).ico" />
      </Head>
      <Navbar />
      <LeftNavBar />
      <Content />
    </div>
  );
}