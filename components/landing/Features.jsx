import Image from "next/image";

/**
 * @component
 * @example
 * return (
 *  <Features />
 * )
 */
const Features = () => {
  return (
    <section
      className={"flex flex-row flex-wrap p-20 justify-evenly items-center"}
    >
      <Image src={"/p1.png"} width={230} height={450} alt={"person"} />
      <article className={"m-4"}>
        <h2 className="text-5xl m-2 font-bold">Features</h2>
        <ul>
          <li className={"m-2 text-2xl"}>100% free</li>
          <li className={"m-2 text-2xl"}>Zero config web</li>
          <li className={"m-2 text-2xl"}>Custom subdomain</li>
        </ul>
      </article>
    </section>
  );
};

export default Features;
