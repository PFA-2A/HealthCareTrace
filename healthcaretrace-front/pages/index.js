
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/home/products";
import LeftNavBar from "../components/home/LeftNavBar";
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
      <Projects />
    </div>
  );
}