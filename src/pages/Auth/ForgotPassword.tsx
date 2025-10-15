import bgImage from "@/assets/images/hero.jpg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail]=useState();

  const handleChange=(e)=>{

   const {name, value}= e.target;


  setEmail(value)

  }


  const handleSubmit=async(e)=>{
    e.preventDefault();


   const response=await sendPasswordResetEmail(auth, email)


  }
  return (
    <div className="grid grid-cols-12 h-screen ">
      <div
        className="bg-cover bg-center col-span-12 md:col-span-7"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="p-6 md:p-20 flex flex-col justify-center col-span-12 md:col-span-5">
        <Button
          onClick={() => navigate("/login")}
          className="inline-flex justify-start max-w-max cursor-pointer !pl-0"
          variant={"link"}
        >
          <FaChevronLeft /> Back
        </Button>
        <Form onBtnClick={handleSubmit}
          title="Forgot Password"
          description="Enter your registered email address. we’ll send you a code to reset your password."
          btnText="Sent OTP"
        >
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Email Address
            </label>
            <Input
              type="email"
              className="py-6 border-black"
              placeholder="Enter Your Email"

              onChange={handleChange}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
