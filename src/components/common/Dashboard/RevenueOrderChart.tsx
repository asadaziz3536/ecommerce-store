import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RevenueOrderChart = () => {
  const data = [
    { month: "Jun", revenue: 980, orders: 600 },
    { month: "Feb", revenue: 950, orders: 500 },
    { month: "Mar", revenue: 700, orders: 650 },
    { month: "Apr", revenue: 1100, orders: 500 },
    { month: "May", revenue: 950, orders: 420 },
    { month: "Jun", revenue: 980, orders: 600 },
    { month: "Jul", revenue: 900, orders: 640 },
    { month: "Aug", revenue: 950, orders: 520 },
    { month: "Sep", revenue: 980, orders: 700 },
    { month: "Oct", revenue: 900, orders: 540 },
    { month: "Nov", revenue: 900, orders: 440 },
    { month: "Dec", revenue: 900, orders: 640 },
  ];
  return (
    <div className="bg-whtie rounded-2xl p-4 shadow border">
      <h2 className="font-medium text-2xl pb-4">Revenue vs Orders</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0f0c29" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="blue"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="cyan"
            fillOpacity={1}
            fill="url(#colorOrders)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueOrderChart;
