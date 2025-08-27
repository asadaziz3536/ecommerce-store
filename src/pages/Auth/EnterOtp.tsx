import bgImage from "@/assets/images/hero.jpg";
import Form from "@/components/common/Form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import OTPInput from "@/components/ui/OtpInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const EnterOtp = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="grid grid-cols-12 h-screen ">
      <div
        className="bg-cover bg-center col-span-7"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="p-20 flex flex-col justify-center col-span-5">
        <Button
          onClick={() => navigate("/login")}
          className="inline-flex justify-start max-w-max cursor-pointer !pl-0"
          variant={"link"}
        >
          <FaChevronLeft /> Back
        </Button>
        <Form
          title="Enter OTP"
          description="We have share a code of your registered email address
robertfox@example.com"
          btnText="Verify"
          onBtnClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault(); // prevent form submission reload
            setDialogOpen(true);
          }}
        >
          <OTPInput />

          <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Password Changed Successfully</DialogTitle>
                <DialogDescription>
                  Your password has been updated successfully
                </DialogDescription>
              </DialogHeader>
              <Button className="py-6" onClick={() => navigate("/login")}>Back to Login</Button>
            </DialogContent>
          </Dialog>
        </Form>
      </div>
    </div>
  );
};

export default EnterOtp;
