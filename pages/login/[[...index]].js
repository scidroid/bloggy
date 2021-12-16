import { SignIn } from "@clerk/nextjs";
import Head from "next/head";

const LogInPage = () => {
  return (
    <>
      <Head>
        <title>Login | Bloggy</title>
      </Head>
      <SignIn path="/login" routing="path" signUpUrl="/signup" />
    </>
  );
};

export default LogInPage;
