import Head from "next/head";
import Image from "next/image";
import Hero from "@components/hero/hero";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
