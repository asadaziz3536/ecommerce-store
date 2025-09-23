import LoginForm from "@/components/common/Form";
import bgImage from "@/assets/images/hero.jpg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const getEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const getPassword = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, password: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response", response);
    } catch(err) {

      console.log("error:", err)
    }
  };
  return (
    <div className="grid md:grid-cols-12 h-screen ">
      <div
        className="bg-cover bg-center col-span-12 md:col-span-7"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="p-6 md:p-20 flex flex-col justify-center col-span-12 md:col-span-5">
        <Form
          onBtnClick={() => handleClick(event)}
          title="Welcome 👋 "
          description="Please login here"
          btnText="Login"
        >
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Email Address
            </label>
            <Input
              type="text"
              className="py-6 border-black"
              placeholder="Enter Your Email Address"
              value={formData.emailAddress}
              onChange={() => getEmail(event)}
            />
          </div>
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Password
            </label>
            <Input
              type="password"
              className="py-6 border-black"
              placeholder="Enter Your Password"
              onChange={(e) => getPassword(event)}
            />
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Checkbox />
              <label htmlFor="">Remember me</label>
            </div>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
