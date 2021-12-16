import Head from "next/head";
import { useEffect, useState } from "react";
import Set from "components/dashboard/Set";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const Dashboard = () => {
  const { username } = useUser();
  const getData = async () => {
    const response = await fetch("/api/site?username=" + username);
    const data = await response.json();
    return data;
  };
  const [data, setData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData().then((data) => {
      data.length > 0 ? setData(data) : setData(false);
      setIsLoading(false);
    });
  }),
    [data];
  if (isLoading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="animate-spin rounded-full h-8 w-8 border-b-6 border-gray-900"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Dashboard | Bloggy</title>
      </Head>
      <h2 className={"text-center text-4xl font-bold m-8"}>Dashbaord</h2>
      {!data && <Set />}
      {data && (
        <div className={"flex flex-col items-center justify-center"}>
          <section className={"flex flex-col justify-center items-center"}>
            <img
              src={data[0].icon}
              alt={data[0].name}
              width={200}
              height={200}
            />
            <h2 className={"text-center text-2xl font-bold"}>{data[0].name}</h2>
            <p>{data[0].description}</p>
            <p className={"text-xl text-center m-4 font-bold"}>
              Your site:{" "}
              <a
                className={"text-blue-400 underline hover:no-underline"}
                href={"https://" + data[0].subdomain + ".bloggy.scidroid.co/"}
              >
                {"https://" + data[0].subdomain + ".bloggy.scidroid.co/"}
              </a>
            </p>
          </section>
          <section>
            <h2 className={"text-center text-4xl font-bold"}>Your posts</h2>
            <p className="text-center">Comming soon...</p>
          </section>
        </div>
      )}
    </>
  );
};

export default Dashboard;
