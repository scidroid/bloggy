import Button from "components/global/Button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

/**
 * @component
 * @example
 * const isAuthenticated = useUser();
 * return (
 *   <Hero isAuthenticated={isAuthenticated} />
 * )
 */

const Hero = ({ isAuthenticated }) => {
  return (
    <section className="flex flex-row flex-wrap justify-around m-20">
      <article className={"flex flex-col items-center justify-center m-4"}>
        <h2 className={"font-bold text-7xl text-center m-4"}>
          Start blogging <span className={"underline"}>Today!</span>
        </h2>
        <p className={"text-center m-4 text-xl sm:w-2/3 base:xl-1/3"}>
          Blogging is difficult and expensive, why waste your precious time when
          you just want to write. Create a bloggy in 5 minutes and get your blog
          online.
        </p>
        <SignedIn>
          <Button
            text={"Go to the dashboard"}
            redirectTo={"/dashboard"}
            color={"black"}
          />
        </SignedIn>
        <SignedOut>
          <Button
            text={"Login to start"}
            redirectTo={"/login"}
            color={"black"}
          />
        </SignedOut>
      </article>
    </section>
  );
};

export default Hero;
