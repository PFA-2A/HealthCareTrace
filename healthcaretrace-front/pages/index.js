import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/home/products";
import getWallet from '../client/wallet/getWallet.js'
import LeftNavBar from "../components/home/LeftNavBar";
import cookieCutter from 'cookie-cutter';
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter();
  const { connected } = getWallet()
  console.log( {connected} );
  if (connected) {
    cookieCutter.set('wallet', connected);
    router.push('/signup');
  } else {
    document.cookie = 'wallet=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.removeItem("wallet");
    sessionStorage.removeItem("wallet");
    router.push("/connectTowallet"); 
  }
  return (
    <div>
      <Head>
        <title>HealthCare Trace</title>
        <meta name="description" content="HealthCare Trace" />
        <link rel="icon" href="/AGRI (1).ico" />
      </Head>
      <Navbar />
      <LeftNavBar />
      <Projects />
    </div>
  );
}