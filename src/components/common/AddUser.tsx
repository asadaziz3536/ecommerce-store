import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    uploadFile: "",
  });


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      console.log("updated formData", updated);
      return updated;
    });

    console.log(
      `name:${formData.name}, email:${formData.email}, password:${formData.password}, uploadFile:${formData.uploadFile}`
    );

    console.log(files);

    console.log(typeof files);

    if (name === "uploadFile" && files.length) {
      console.log("upload file button is clicked ");
      console.log("files", files)
      const file = files[0];
      console.log("file", file);


  const imageUrl=URL.createObjectURL(file);


  console.log("image url", imageUrl)


   
      
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl py-3">Add User</h1>

      <div className="grid grid-cols-[700px_1fr]">
        <form action="">
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
                  name="uploadFile"
                />
              </div>
            </label>
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
