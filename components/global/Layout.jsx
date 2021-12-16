import Navbar from "components/global/Navbar";
import Footer from "components/global/Footer";
import { useRouter } from "next/router";

/**
 * @component
 * @example
 * return (
 *  <Layout>
 *    <Dashboard />
 *  </Layout>
 * )
 */

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div className={"min-h-screen flex flex-col justify-between"}>
      <Navbar />
      <main>{children}</main>
      {!pathname.includes("settings") && <Footer />}
    </div>
  );
};

export default Layout;
