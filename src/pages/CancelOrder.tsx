import { Button } from "@/components/ui/button";
import { MdCancel } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const CancelOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="container max-w-screen-xl m-auto relative">
      <div className="flex flex-col justify-center items-center h-screen gap-3 text-center max-w-screen-lg m-auto">
        <MdCancel size={150} className="text-red-500" />
        <h1 className="text-4xl">Payment Failed</h1>
        <p>
          Unfortunately, something went wrong with your payment. Please try
          again or contact support if the issue persists.{" "}
        </p>

        <Button onClick={() => navigate("/cart")}>
          <GoArrowLeft  />
          Go back to Cart
        </Button>
      </div>
    </div>
  );
};

export default CancelOrder;
