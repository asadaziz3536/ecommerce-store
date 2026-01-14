import bgImage from "@/assets/images/login.svg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, email: "Email is required" }));
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
        setErrors({
          ...errors,
          email:
            "Oops! That doesn’t look like a valid email. Try something like name@example.com",
        });
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setErrors({ ...errors, email: "Email is required!" });
      return;
    } else if (errors.email) {
      return;
    }

    try {
      const response = await sendPasswordResetEmail(auth, email);

      toast.success("Password reset link sent");
    } catch (err) {
      const error = err as FirebaseError;
      toast.error(error.code.split("/")[1]?.toUpperCase());
    }
  };
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
        <Form
          onSubmit={handleSubmit}
          title="Forgot Password"
          description="Enter your registered email address. we’ll send you a password reset link"
          btnText="Submit"
        >
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              className="py-6 border-black"
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.email}</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
