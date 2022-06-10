import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="홈">
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 divide-y">
        <div>Resume project</div>
      </div>
    </Layout>
  );
};

export default Home;
