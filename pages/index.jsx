import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** Header */}
      <Header />

      {/** Feed */}
      <Feed />

      {/** Modal */}
    </div>
  );
};

export default Home;
