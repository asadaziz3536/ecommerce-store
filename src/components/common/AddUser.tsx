import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast, ToastContainer } from "react-toastify";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      console.log("updated formData", updated);
      return updated;
    });

   

    console.log(files);

    console.log(typeof files);

    if (name === "avatar" && files) {
      console.log("upload file button is clicked ");
      console.log("files", files);
      const file = files[0];
      console.log("file", file);

      const imageUrl = URL.createObjectURL(file);

      console.log("image url", imageUrl);

      setFormData((prev) => {
        const updated = { ...prev, [name]: imageUrl };
        console.log("updated", updated);
        return updated;
      });
    }

    console.log("form Data", formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      if(!response.ok){
       const errorText= await response.text();
       throw new Error(`HTTP ${response.status}: ${errorText}`)
      }
      console.log(`response,${response}`);
    } catch (error) {
      console.log(`error: ${error}`);
      toast.error(`failed to create user: ${error.message}`)
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl py-3">Add User</h1>

      <div className="grid grid-cols-[700px_1fr]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Name
            </label>
            <Input
              type="text"
              name="name"
              className="py-6 border-black"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Email
            </label>
            <Input
              type="email"
              className="py-6 border-black"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Password
            </label>
            <Input
              type="password"
              className="py-6 border-black"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <div className="w-40 h-40">
              <img
                src={formData.avatar}
                alt=""
                className="w-full h-full aspect-square object-cover border rounded-md"
              />
            </div>
            <span className="block font-medium pb-1 text-sm">Upload file</span>
            <label
              htmlFor=""
              className="flex items-center justify-center font-medium pb-1 text-sm border-1 border-black h-[100px] rounded-md relative"
            >
              <div className="block font-medium pb-1 text-sm">
                Choose a photo to upload
                <input
                  type="file"
                  className="opacity-0 absolute inset-0"
                  onChange={handleChange}
                  name="avatar"
                />
              </div>
            </label>
          </div>

          <Button>Submit</Button>
        </form>
      </div>
        <ToastContainer />
    </>
  );
};

export default AddUser;
