import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import confetti from "canvas-confetti";

const Set = () => {
  const { username } = useUser();
  const [image, setImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["icon"] = image;
    data["subdomain"] = username;
    fetch("/api/site", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == 201) {
        confetti({
          particleCount: 500,
          spread: 150,
          origin: { y: 0 },
        });
      }
    });
  };
  console.log(errors);

  return (
    <form
      className={"flex flex-col justify-between items-center"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={"text-2xl font-bold m-4"}>Add new bloggy</h2>
      <input
        type={"text"}
        placeholder={"Name of the blog"}
        className={"border border-black m-2"}
        {...register("name", { required: true })}
      />
      <input
        type={"text"}
        className={"border border-black m-2"}
        placeholder={"Description"}
        {...register("description", { required: true, maxLength: 100 })}
      />
      <p>Upload an icon: </p>
      <Widget
        publicKey={"624de14caf2cf3c7f75c"}
        onChange={(info) => setImage(info.cdnUrl)}
        id={"file"}
        previewStep={"true"}
      />
      <input className={"btn-black"} value={"Submit"} type={"submit"} />
    </form>
  );
};

export default Set;
