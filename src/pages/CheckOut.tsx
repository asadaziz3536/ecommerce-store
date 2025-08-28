import ProductImg from "@/assets/images/hero.jpg";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";

const CheckOut = () => {
  return (
    <section>
      <div className="container max-w-screen-xl m-auto">
        <h1 className="text-4xl pb-8">Checkout</h1>

        <div className="grid grid-cols-12">
   <div className="col-span-12 md:col-span-8 overflow-auto">
  {/* Row 1: Column Titles */}
  <div className="flex flex-row md:grid md:grid-cols-12 gap-5 pb-4">
    <div className="font-semibold md:col-span-4 flex-[0_0_200px]  md:w-auto md:basis-auto">Products</div>
    <div className="font-semibold md:col-span-2">Prices</div>
    <div className="font-semibold md:col-span-2">Quantity</div>
    <div className="font-semibold md:col-span-2">Subtotal</div>
    <div className="font-semibold md:col-span-2 ">Action</div>
  </div>

  {/* Row 2: Product Items */}
 <div className="flex flex-row md:grid md:grid-cols-12 gap-5 items-center">
  {/* Product Info */}
  <div className="flex flex-col md:flex-row  gap-4 items-start sm:items-center col-span-12 md:col-span-4 flex-[0_0_200px]  md:w-auto md:basis-auto">
    <img
      src={ProductImg}
      alt="Girls Pink Moana Printed Dress"
      className="rounded-full w-16 h-16 object-cover"
    />
    <div>
      <h3 className="font-semibold">Girls Pink Moana Printed Dress</h3>
      <p className="font-semibold">
        Size <span className="font-normal">S</span>
      </p>
    </div>
  </div>

  {/* Price */}
  <div className="col-span-6 md:col-span-2">$80.00</div>

  {/* Quantity */}
  <div className="flex border border-gray-400 rounded-sm col-span-6 md:col-span-2 mt-2 md:mt-0">
    <Button className="bg-transparent border-r text-black hover:bg-transparent">-</Button>
    <input type="number" min="1" className="w-12 text-center border-x px-2" />
    <Button className="bg-transparent border-l text-black hover:bg-transparent">+</Button>
  </div>

  {/* Subtotal */}
  <div className="col-span-6 md:col-span-2 mt-2 md:mt-0">$80.00</div>

  {/* Action */}
  <div className="col-span-6 md:col-span-2 mt-2 md:mt-0">
    <MdDelete size={30} />
  </div>
</div>

</div>



          <div className="col-span-12 md:col-span-4">
            <ul className="flex flex-col gap-5">
              <li className="flex justify-between font-bold">
                <p>Subtotal</p> <span>$200.00</span>
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
                <p>GrandTotal</p> <span>$200</span>
              </li>
            </ul>

            <Button className="w-full mt-8">Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
