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
    console.log("target event", `${name}:`, value);

    if (name === "uploadimage" && files) {
      const file = files[0];

      setFormData((prev) => ({ ...prev, uploadFile: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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
            {formData.uploadFile && (
              <img
                src={URL.createObjectURL(formData.uploadFile)}
                alt=""
                className="w-40 h-40 object-cover"
              />
            )}
            <img src="" alt="" />
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
                  name="uploadimage"
                  id=""
                  className="opacity-0 absolute inset-0"
                  onChange={handleChange}
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
