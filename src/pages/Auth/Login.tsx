import LoginForm from "@/components/common/Form";
import bgImage from "@/assets/images/hero.jpg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    rememberMe: "",
  });

  const handleChange = (e) => {
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
    if (name === "remember") {
      if (checked) {
        setErrors((prev) => ({ ...prev, rememberMe: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = false;

    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isValid = true;
    }
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      isValid = true;
    }
    if (!formData.rememberMe) {
      setErrors((prev) => ({ ...prev, rememberMe: "This check is required" }));
      isValid = true;
    }

    if(!isValid){
      return
    }
    try {
      const resposne = await signInWithEmailAndPassword(
        auth, 
        formData.email,
        formData.password
      );

      let token = resposne.user.accessToken;

      if (token) {
        navigate("/dashboard");
      }
    } catch {}
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="grid md:grid-cols-12 h-screen ">
      <div
        className="bg-cover bg-center col-span-12 md:col-span-7"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="p-6 md:p-20 flex flex-col justify-center col-span-12 md:col-span-5">
        <Form
          onBtnClick={handleSubmit}
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
            <Input
              type="password"
              name="password"
              className="py-6 border-black"
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.password}</p>
          </div>

          <div className="flex flex-col justify-between">
            <div
              className="flex justify-between gap-2 items-center"
              onChange={handleChange}
            >
              <div className="flex gap-2">
                <input type="checkbox" name="remember" id="" />
                <label htmlFor="">Remember me</label>
              </div>

              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <p className="text-red-500">{errors.rememberMe}</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
