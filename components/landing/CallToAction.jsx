import Button from "components/global/Button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const CallToAction = ({ isAuthenticated }) => {
  return (
    <section
      className={"flex flex-row flex-wrap justify-evenly items-center m-6"}
    >
      <section className={"flex flex-col justify-center items-center"}>
        <h2 className={"text-5xl font-bold m-4 text-center"}>
          Start blogging like a <span className={"underline"}>pro!</span>
        </h2>
        <p className={"m-4 text-xl text-center max-w-lg"}>
          You already have everything to succeed, start writing and reach
          millions of people with just one click.
        </p>
      </section>
      <SignedIn>
        <Button text={"Go to the dashboard"} redirectTo={"/dashboard"} color={"black"}
        />
      </SignedIn>
      <SignedOut>
        <Button text={"Login to start"} redirectTo={"/login"} color={"black"} />
      </SignedOut>
    </section>
  );
};

export default CallToAction;
