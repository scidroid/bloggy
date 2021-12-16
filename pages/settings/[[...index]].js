import { UserProfile } from "@clerk/nextjs";
import Head from "next/head";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Settings | Bloggy</title>
      </Head>
      <UserProfile routing={"path"} path={"/settings"} hideNavigation />;
    </>
  );
};

export default Settings;
