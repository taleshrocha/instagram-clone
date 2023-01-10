import Head from "next/head";
import { useRecoilState } from "recoil";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />

      <Modal />
    </div>
  );
};

export default Home;
