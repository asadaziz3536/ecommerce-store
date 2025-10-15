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
  });

  const [errors, setErrors]=useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
    }
    if (name === "password") {
      setFormData((prev) => ({ ...prev, password: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
              Email Address
            </label>
            <Input
              type="text"
              name="email"
              className="py-6 border-black"
              placeholder="Enter Your Email Address"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Password
            </label>
            <Input
              type="password"
              name="password"
              className="py-6 border-black"
              placeholder="Enter Your Password"
              onChange={handleChange}
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
