import LoginForm from "@/components/common/Form";
import bgImage from "@/assets/images/hero.jpg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, loginUser, logoutUser } from "../../features/auth/authSlice";




const SignUp = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
const {user,loading,error}=useSelector((state)=>state.auth)
 const dispatch= useDispatch();




  const handleChange=(e)=>{
e.preventDefault();

const {name,value}=e.target;

console.log(`name: ${name},  value:${value}`)
  }

  const handleSubmit=(e)=>{  
    e.preventDefault();
    const {name,value}=e.target;

    console.log(`name: ${name},  value:${value}`)
  
  

   
    
    
    }
  return (
    <div className="grid md:grid-cols-12 h-screen ">
      <div
        className="bg-cover bg-center col-span-7"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="p-6 md:p-20 flex flex-col justify-center col-span-5">
        <Form title="Create New Account" description="Please enter details" btnText="Signup" onBtnClick={handleSubmit} >
          {/* <div>
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
          </div> */}
           <div>
            <label htmlFor="" className="block font-medium pb-1 text-sm">
              Email
            </label>
            <Input
              type="email"
              name="email"
              className="py-6 border-black"
                       placeholder="Enter Your Email"
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
              onChange={handleChange}
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
