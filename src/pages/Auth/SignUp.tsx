import LoginForm from "@/components/common/Form";
import bgImage from "@/assets/images/hero.jpg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="grid md:grid-cols-12 h-screen ">
      <div
        className="bg-cover bg-center col-span-7"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="p-6 md:p-20 flex flex-col justify-center col-span-5">
        <Form title="Create New Account" description="Please enter details" btnText="Signup" >
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
             First Name
            </label>
            <Input
              type="text"
              className="py-6 border-black"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Last Name
            </label>
            <Input
              type="text"
              className="py-6 border-black"
                       placeholder="Enter Last Name"
            />
          </div>
           <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Email
            </label>
            <Input
              type="email"
              className="py-6 border-black"
                       placeholder="Enter Your Email"
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
            />
          </div>


          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Checkbox />
              <label htmlFor="">I agree to the <b>Terms & conditions</b></label>
            </div>
            
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
