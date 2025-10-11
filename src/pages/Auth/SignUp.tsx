import LoginForm from "@/components/common/Form";
import bgImage from "@/assets/images/hero.jpg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "email") {
      setEmail(value);
      if (email.trim() === "") {
        setErrors({ ...errors, email: "Email is required" });
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
        setErrors({ ...errors, email: "Email is Invalid" });
      } else {
        setErrors({ ...errors, email: "" });
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
            "Password must have at least 8 characters, one uppercase, one lowercase, and one number.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
    if (name === "terms") {
      setTerms(checked);
      if (checked) {
        setErrors((prev) => ({ ...prev, terms: "" }));
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrors({ ...errors, email: "Email is required" });
      return 
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      return
    }
    if (!terms) {
      setErrors((prev) => ({
        ...prev,
        terms: "Agree to terms and conditions",
      }));
      return
    }

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
      }
    } catch (error) {
      console.log(error.message);
    }
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
            <Input
              type="password"
              name="password"
              className="py-6 border-black"
              placeholder="Enter Your Password"
              value={password}
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.password}</p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex gap-2 items-center">
              {/* <Checkbox /> */}

              <input
                type="checkbox"
                name="terms"
                id=""
                onChange={handleChange}
              />
              <label htmlFor="">
                I agree to the <b>Terms & conditions</b>
              </label>
            </div>
            <p className="text-red-500">{errors.terms}</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
