import Link from "next/link";
import Button from "components/global/Button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

/**
 * @component
 * @example
 * return (
 *  <Navbar />
 * )
 */

const Navbar = () => {
  return (
    <header
      className={
        "w-full p-4 bg-white flex flex-row items-center justify-around flex-wrap"
      }
    >
      <h1>
        <Link href={"/"}>
          <a className={"text-2xl text-black text-center font-bold"}>Bloggy</a>
        </Link>
      </h1>
      <SignedOut>
        <Button text={"Login"} redirectTo={"/login"} color={"black"} />
      </SignedOut>
      <SignedIn>
        <UserButton userProfileURL={"/settings"} afterSignOutAll={"/"} />
      </SignedIn>
    </header>
  );
};
export default Navbar;
