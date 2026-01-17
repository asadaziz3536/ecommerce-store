import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import { feature } from "topojson-client";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const salesData = [
  { state: "California", code: "CA", sales: 400, growth: 4 },
  { state: "Texas", code: "TX", sales: 300, growth: 3 },
  { state: "New York", code: "NY", sales: 250, growth: 2 },
  { state: "Florida", code: "FL", sales: 350, growth: 5 },
  { state: "Washington", code: "WA", sales: 200, growth: 4 },
];

function getColor(sales: number) {
  return sales > 350
    ? "#1D4ED8"
    : sales > 300
      ? "#3B82F6"
      : sales > 250
        ? "#60A5FA"
        : "#A5B4FC";
}

export default function USSalesMap() {
  const [geoData, setGeoData] = useState<any>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    fetch(geoUrl)
      .then((res) => res.json())
      .then((topo) => {
        const geojson = feature(topo, topo.objects.states);
        setGeoData(geojson);
      });
  }, []);

  const onEachState = (feature: any, layer: any) => {
    const stateCode = feature.properties.iso_3166_2?.replace("US-", "");
    const current = salesData.find((d) => d.code === stateCode);

    layer.setStyle({
      fillColor: current ? getColor(current.sales) : "#E5E7EB",
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8,
    });

    layer.on({
      mouseover: () => {
        setHovered(current?.state || null);
        layer.setStyle({
          fillOpacity: 1,
          weight: 2,
        });
        layer
          .bindPopup(
            `${current?.state || "Unknown"} <br/> Sales: $${current?.sales || 0}`,
          )
          .openPopup();
      },
      mouseout: () => {
        setHovered(null);
        layer.closePopup();
        layer.setStyle({
          fillOpacity: 0.8,
          weight: 1,
        });
      },
      click: () => {
        alert(
          `${current?.state || "Unknown"} \nSales: $${current?.sales || 0}`,
        );
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-6 w-full max-w-3xl">
      <div className="w-full flex flex-1">
        <MapContainer
          center={[37.8, -96]}
          zoom={4}
          style={{ width: "100%", height: "280px" }}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {geoData && <GeoJSON data={geoData} onEachFeature={onEachState} />}
        </MapContainer>
      </div>

      {hovered && (
        <div className="text-center text-sm text-gray-700 mt-1">
          Hovering: <span className="font-medium">{hovered}</span>
        </div>
      )}
    </div>
  );
}
