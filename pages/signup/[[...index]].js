import { SignUp } from "@clerk/nextjs";
import Head from "next/head";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Bloggy</title>
      </Head>
      <SignUp path="/signup" routing="path" signInUrl="/login" />{" "}
    </>
  );
};

export default SignUpPage;
