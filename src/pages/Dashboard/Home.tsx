import InfoCard from "@/components/common/Dashboard/InfoCard";
import { BiDollar } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { IoReturnUpBackSharp } from "react-icons/io5";
import RevenueOrderChart from "@/components/common/Dashboard/RevenueOrderChart";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Welcome Back</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet
        voluptatem suscipit illum enim illo rem sequi eum, cupiditate esse quod,
        minus provident animi possimus totam at reiciendis voluptas quas!
      </p>

      <div className="grid grid-cols-4 gap-5 py-10">
        <InfoCard
          title="Total Sales"
          totalAmount="$6650.050"
          cardIcon={<BiDollar />}
          iconBg="blue"
          percentage="10%"
          todayTotal={150}
          increment={true}
        />
        <InfoCard
          title="Total Orders"
          totalAmount="$1,212,321"
          cardIcon={<FiShoppingCart />}
          iconBg="sky"
          percentage="4%"
          todayTotal={2990}
          increment={false}
        />
        <InfoCard
          title="Visitors"
          totalAmount="$820,100"
          cardIcon={<FaUsers />}
          iconBg="orange"
          percentage="8%"
          todayTotal={120}
          increment={true}
        />
        <InfoCard
          title="Refunded"
          totalAmount="$21,980"
          cardIcon={<IoReturnUpBackSharp />}
          iconBg="red"
          percentage="2%"
          todayTotal={120}
          increment={false}
        />
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <RevenueOrderChart />
        </div>
        <div className="col-span-3">
          <RevenueOrderChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
