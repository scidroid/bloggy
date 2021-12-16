import "styles/global.css";
import Layout from "components/global/Layout";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";
import LoginMessage from "components/global/LoginMessage";

const publicPages = ["/", "/login", "/signup"];

const App = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  let isPublicPage;
  if (
    publicPages.includes(pathname) ||
    pathname.includes("/login") ||
    pathname.includes("/signup")
  ) {
    isPublicPage = true;
  }

  return (
    <ClerkProvider>
      {isPublicPage ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <>
          <SignedOut>
            <Layout>
              <LoginMessage />
            </Layout>
          </SignedOut>
          <SignedIn>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SignedIn>
        </>
      )}
    </ClerkProvider>
  );
};

export default App;
