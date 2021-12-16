import CallToAction from "components/landing/CallToAction";
import Features from "components/landing/Features";
import Hero from "components/landing/Hero";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | Bloggy</title>
      </Head>
      <Hero />
      <Features />
      <CallToAction />
    </>
  );
};

export default Index;
