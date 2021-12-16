/**
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */
const Footer = () => {
  return (
    <footer className={"p-4"}>
      <p className={"text-black text-center text-xl font-bold"}>
        Bloggy by <a href={"https://scidroid.me/"} className={"underline hover:no-underline"}>SciDroid</a>.
      </p>
    </footer>
  );
};

export default Footer;
