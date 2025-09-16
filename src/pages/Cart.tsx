import ProductImg from "@/assets/images/hero.jpg";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import {
  addToCart,
  clearCart,
  deleteFromCart,
  removeFromCart,
} from "@/store/cart";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import emptyboxUrl from "@/assets/icons/Empty-box.lottie?url";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);

  const handleDelete = (Item: object) => {
    dispatch(deleteFromCart(Item));
  };

  const grandTotal = () => {
    return cart
      .map((cartItem) => {
        return cartItem.price * cartItem.quantity;
      })
      .reduce((prev, curr) => prev + curr, 0);
  };

  useEffect(() => {
    grandTotal();
  }, [cart]);

  return (
    <section>
      <div className="container max-w-screen-xl m-auto">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-3">
            <DotLottieReact
              src={emptyboxUrl}
              autoplay
              style={{ width: 300, height: 300 }}
            />
            <h1 className="text-2xl">Your Cart is empty</h1>
            <p>You haven't added anything yet</p>

            <Button
              onClick={() => navigate("/products")}
              className="max-w-max cursor-pointer"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <h1 className="text-4xl pb-8">Cart</h1>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8 ">
                <div className="max-h-[500px] overflow-auto">
                  {/* Row 1: Column Titles */}
                  <div className="flex flex-row md:grid md:grid-cols-12 gap-5 pb-4 sticky bg-white top-0">
                    <div className="font-semibold md:col-span-4 flex-[0_0_200px]  md:w-auto md:basis-auto">
                      Products
                    </div>
                    <div className="font-semibold md:col-span-2 flex-[0_0_100px]">
                      Prices
                    </div>
                    <div className="font-semibold md:col-span-2 flex-[0_0_135px]">
                      Quantity
                    </div>
                    <div className="font-semibold md:col-span-2 flex-[0_0_100px]">
                      Subtotal
                    </div>
                    <div className="font-semibold md:col-span-2 flex-[0_0_100px]">
                      Action
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
                      <div className="flex border border-gray-400 rounded-sm col-span-6 md:col-span-2 mt-2 md:mt-0 flex-[0_0_135px]">
                        <Button
                          onClick={() => dispatch(removeFromCart(CartItem))}
                          className="bg-transparent border-r text-black hover:bg-transparent rounded-tr-[0px] rounded-br-[0px]"
                        >
                          -
                        </Button>
                        <input
                          type="number"
                          min="1"
                          value={CartItem.quantity}
                          className="w-12 text-center border-x px-2"
                        />
                        <Button
                          onClick={() => dispatch(addToCart(CartItem))}
                          className="bg-transparent border-l text-black hover:bg-transparent rounded-tl-[0px] rounded-bl-[0px]"
                        >
                          +
                        </Button>
                      </div>

                      {/* Subtotal */}
                      <div className="col-span-6 md:col-span-2 mt-2 md:mt-0 flex-[0_0_100px]">
                        ${CartItem.price * CartItem.quantity}
                      </div>

                      {/* Action */}
                      <div className="col-span-6 md:col-span-2 mt-2 md:mt-0 flex-[0_0_100px]">
                        <MdDelete
                          onClick={() => handleDelete(CartItem)}
                          className="text-red-400 cursor-pointer"
                          size={30}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button onClick={() => dispatch(clearCart())} className="mt-5">
                  Clear Cart
                </Button>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <ul className="flex flex-col gap-5">
                  <li className="flex justify-between font-bold">
                    <p>Subtotal</p> <span>{`$${grandTotal()}`}</span>
                  </li>
                  <li>
                    <span className="font-bold">Enter Copen Code</span>
                    <div className="flex items-center justify-between border  gap-3 rounded-md h-[60px] group focus-within:border-2 pl-4">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-full border-0 focus-visible:border-0 outline-0"
                        placeholder="Enter Your Copen Code"
                      />
                      <Button className="h-[60px]">Apply Coupen</Button>
                    </div>
                  </li>

                  <li className="flex justify-between font-medium">
                    <p>Delivery Charges</p> <span>$5.00</span>
                  </li>
                  <li className="flex justify-between font-bold">
                    <p>GrandTotal</p> <span>${grandTotal()}</span>
                  </li>
                </ul>

                <Button className="w-full mt-8">Checkout</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
