import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const salesData = [
  { state: "California", code: "CA", sales: 400, growth: 4 },
  { state: "Texas", code: "TX", sales: 300, growth: 3 },
  { state: "New York", code: "NY", sales: 250, growth: 2 },
  { state: "Florida", code: "FL", sales: 350, growth: 5 },
  { state: "Washington", code: "WA", sales: 200, growth: 4 },
];

export default function USSalesMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col  gap-6 w-full max-w-3xl">
      {/* Left: Map */}
      <div className="flex gap-3">
        <div>
        <h2 className="text-lg font-semibold text-gray-900">Sales</h2>
        <p className="text-sm text-gray-500 mb-3">Sales Performance by State</p>

        </div>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USA">USA</SelectItem>
          
          </SelectContent>
        </Select>
      </div>

      <div className="w-full flex flex-1">
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 800 }}
          width={400}
          height={250}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateCode = geo.properties.iso_3166_2?.replace("US-", "");
                const current = salesData.find((d) => d.code === stateCode);
                const color = current
                  ? "#4F46E5" // purple for active states
                  : "#E0E7FF"; // light gray for others

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={color}
                    stroke="#fff"
                    strokeWidth={0.5}
                    onMouseEnter={() => setHovered(current?.state || null)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#4338CA", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {hovered && (
        <div className="text-center text-sm text-gray-700 mt-1">
          Hovering: <span className="font-medium">{hovered}</span>
        </div>
      )}
      {/* Right: List */}
      <div className="flex flex-col justify-center gap-3 flex-1">
        {salesData.slice(0, 3).map((item) => (
          <div
            key={item.code}
            className="flex justify-between items-center border-b pb-2"
          >
            <div className="text-gray-700">{item.state}</div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">
                ${item.sales.toFixed(2)}
              </span>
              <span className="text-green-500 flex items-center gap-1 text-sm font-medium">
                {item.growth}% <GoArrowUpRight />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
