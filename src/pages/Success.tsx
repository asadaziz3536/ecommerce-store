import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import Confetti from "@/assets/icons/Confetti.lottie?url";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import ProductImg from "@/assets/images/hero.jpg";

import { clearCart } from "@/store/cart";

const Success = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
 const dispatch= useDispatch();

  const navigate= useNavigate();
  const grandTotal = () => {
    return cart
      .map((cartItem) => {
        return cartItem.price * cartItem.quantity;
      })
      .reduce((prev, curr) => prev + curr, 0);
  };



  const handleClick=()=>{
    navigate('/')
    dispatch(clearCart())
  }


  return (
    <div className="container max-w-screen-xl m-auto relative">
      <div className="flex flex-col justify-center items-center h-screen gap-3 text-center max-w-screen-lg m-auto">
        <DotLottieReact
          className="fixed w-full h-screen inset-0 pointer-events-none"
          src={Confetti}
          autoplay
        />

        <FaCheckCircle size={150} className="text-green-500" />
        <h1 className="text-4xl">Thanks for your Order!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
        </p>
        <h2 className="font-bold text-2xl mt-3">Order Summary</h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="max-h-[350px] overflow-auto border p-3 pt-0 rounded-lg">
              {/* Row 1: Column Titles */}
              <div className="flex flex-row md:grid md:grid-cols-12 gap-5 pb-4 sticky bg-white top-0">
                <div className="font-semibold md:col-span-4 flex-[0_0_200px] pt-2  md:w-auto md:basis-auto">
                  Products
                </div>
                <div className="font-semibold md:col-span-2 flex-[0_0_100px] pt-2">
                  Prices
                </div>
                <div className="font-semibold md:col-span-2 flex-[0_0_135px] pt-2">
                  Quantity
                </div>
                <div className="font-semibold md:col-span-2 flex-[0_0_100px] pt-2">
                  Subtotal
                </div>
              </div>

              {/* Row 2: Product Items */}
              {cart.map((CartItem, index) => (
                <div
                  key={CartItem.id || index}
                  className="flex flex-row md:grid md:grid-cols-12 gap-5 items-center border-b py-3"
                >
                  {/* Product Info */}
                  <div className="flex flex-col md:flex-row  gap-4 items-start sm:items-center col-span-12 md:col-span-4 flex-[0_0_200px]  md:w-auto md:basis-auto">
                    <img
                      src={
                        CartItem.images && CartItem.images.length > 0
                          ? CartItem.images[0]
                          : ProductImg
                      }
                      alt="Girls Pink Moana Printed Dress"
                      className="rounded-full w-16 h-16 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{CartItem.title}</h3>
                      <p className="font-semibold">
                        Size <span className="font-normal">S</span>
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex-[0_0_100px] md:col-span-2">
                    ${CartItem.price}
                  </div>

                  {/* Quantity */}
                  <div className="flex justify-center col-span-6 md:col-span-2 mt-2 md:mt-0 flex-[0_0_135px]">
                    <input
                      type="number"
                      min="1"
                      value={CartItem.quantity}
                      className="text-center px-2 field-sizing-content border border-gray-400 rounded-sm"
                    />
                  </div>

                  {/* Subtotal */}
                  <div className="col-span-6 md:col-span-2 mt-2 md:mt-0 flex-[0_0_100px]">
                    ${CartItem.price * CartItem.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-1 w-full">
          <li className="flex justify-between font-bold">
            <p>Subtotal</p> <span>{`$${grandTotal()}`}</span>
          </li>

          <li className="flex justify-between font-medium">
            <p>Delivery Charges</p> <span>$5.00</span>
          </li>
          <li className="flex justify-between font-bold">
            <p>GrandTotal</p> <span>${grandTotal()}</span>
          </li>
        </ul>
        <Button type="button" variant={"default"} onClick={handleClick}>
          Back to home <FaHome />
        </Button>
      </div>
    </div>
  );
};

export default Success;
