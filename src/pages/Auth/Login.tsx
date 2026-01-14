import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import LoginBg from "@/assets/images/login.svg";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    rememberMe: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));

      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, email: "Email is required" }));
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
        setErrors((prev) => ({
          ...prev,
          email:
            "Oops! That doesn’t look like a valid email. Try something like name@example.com",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
    if (name === "password") {
      setFormData((prev) => ({ ...prev, password: value }));

      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, password: "Password is required" }));
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)
      ) {
        setErrors((prev) => ({
          ...prev,
          password:
            "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
    if (name === "rememberMe") {
      setFormData((prev) => ({ ...prev, rememberMe: checked }));
      if (checked) {
        setErrors((prev) => ({ ...prev, rememberMe: "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isValid = false;
    }
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      isValid = false;
    }
    if (!formData.rememberMe) {
      setErrors((prev) => ({ ...prev, rememberMe: "This check is required" }));
      isValid = false;
    }

    if (!isValid) {
      return;
    }
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      let token = await response.user.getIdToken();
      if (token) {
        toast.success("LogIn Successfully!");
      }
    } catch (error) {
      if (error instanceof Error)
        if (error.message) {
          toast.error(error.message);
        }
    }
  };

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;
      if (user) {
        toast.success("Logged In Successfully!");
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid md:grid-cols-12 h-screen ">
      <div
        className="bg-cover bg-center col-span-12 md:col-span-7"
        style={{ backgroundImage: `url(${LoginBg})` }}
      ></div>
      <div className="p-6 md:p-20 flex flex-col justify-center col-span-12 md:col-span-5">
        <Form
          onSubmit={handleSubmit}
          title="Welcome 👋 "
          description="Please login here"
          btnText="Login"
        >
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              name="email"
              className="py-6 border-black"
              placeholder="Enter Your Email Address"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.email}</p>
          </div>
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                className="py-6 border-black relative"
                placeholder="Enter Your Password"
                onChange={handleChange}
              />

              <div className="absolute top-[18px] right-[20px]">
                {showPassword ? (
                  <span onClick={handleShowPassword}>
                    <FaEye />
                  </span>
                ) : (
                  <span>
                    <FaEyeSlash onClick={handleShowPassword} />{" "}
                  </span>
                )}
              </div>
            </div>

            <p className="text-red-500">{errors.password}</p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex justify-between gap-2 items-center">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id=""
                  onChange={handleChange}
                />
                <label htmlFor="">Remember me</label>
              </div>

              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <p className="text-red-500">{errors.rememberMe}</p>
          </div>
        </Form>

        <div className="py-3 bg-white flex justify-center relative before:content-[''] before:absolute before:w-[calc(50%_-_30px)] before:bg-gray-300 before:h-[1px] before:left-0 before:top-[50%] after:absolute after:w-[calc(50%_-_30px)] after:bg-gray-300 after:h-[1px] after:right-0 after:top-[50%]">
          OR
        </div>

        <Button
          className="cursor-pointer"
          variant={"outline"}
          onClick={handleSignIn}
        >
          <FcGoogle />
          Login with google{" "}
        </Button>

        <p className="flex justify-center pt-4">
          Don't have an account? &nbsp;{" "}
          <Link className="text-blue-600" to={"/signup"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
