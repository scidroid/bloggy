import Button from "components/global/Button";

/**
 * @component
 * @example
 * return (
 *  <LoginMessage />
 * )
 */

const LoginMessage = () => {
  return (
    <section className={"flex flex-col justify-center items-center"}>
      <h1 className={"text-5xl font-bold text-center m-6"}>
        Please, login to access to this page
      </h1>
      <Button text={"Login"} redirectTo={"/login"} color={"black"} />
    </section>
  );
};

export default LoginMessage;
