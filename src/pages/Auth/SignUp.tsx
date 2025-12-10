import bgImage from "@/assets/images/hero.jpg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termCondition, setTermCondition] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    conditions: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    console.log(`name:${name}, value:${value}`);

    if (name === "email") {
      setEmail(value);

      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, email: "Email is required" }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Email is Invalid" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
    if (name === "password") {
      setPassword(value);

      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, password: "Password is required" }));
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)
      ) {
        setErrors((prev) => ({
          ...prev,
          password:
            "Password must contain at least 8 characters, one uppercase, one lowercase, and one number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!termCondition) {
      setErrors((prev) => ({
        ...prev,
        conditions: "You must accept Terms & Conditions",
      }));
      valid = false;
    }
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      valid = false;
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      valid = false;
    }
    if (!valid) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("user created", user);

      if (user) {
        toast.success("user created successfully!");
        setEmail("");
        setPassword("");
        setTermCondition(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="grid md:grid-cols-12 h-screen ">
      <div
        className="bg-cover bg-center col-span-7"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="p-6 md:p-20 flex flex-col justify-center col-span-5">
        <Form
          onBtnClick={handleSubmit}
          title="Create New Account"
          description="Please enter details"
          btnText="Signup"
        >
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              name="email"
              className="py-6 border-black"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleChange}
            />

            <p className="text-red-500">{errors.email}</p>
          </div>
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                className="py-6 border-black"
                placeholder="Enter Your Password"
                value={password}
                onChange={handleChange}
              />

              <div className="absolute top-[18px] right-[20px]">
                {showPassword ? (
                  <FaEye onClick={handleShowPassword} />
                ) : (
                  <FaEyeSlash onClick={handleShowPassword} />
                )}
              </div>
            </div>
            <p className="text-red-500">{errors.password}</p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-row gap-2 items-center">
              <Checkbox
                checked={termCondition}
                onCheckedChange={(checked) => {
                  setTermCondition(checked);

                  if (checked) {
                    setErrors((prev) => ({ ...prev, conditions: "" }));
                  }
                }}
              />
              <label htmlFor="">
                I agree to the <b>Terms & conditions</b>
              </label>
            </div>
            <p className="text-red-500">{errors.conditions}</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
