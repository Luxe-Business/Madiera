import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import geoUrl from "./MENA.geo.json";

export default function MapChart() {
  const markers = [
    { markerOffset: 15, name: "Arabian Gulf", coordinates: [51.6834, 26.7505] },
    { markerOffset: 15, name: "Duabi", coordinates: [55.2708, 25.2048] },
    { markerOffset: 15, name: "Saudi Arabia", coordinates: [45.0792, 23.8859] },
  ];
  return (
    <ComposableMap className="h-100">
      <ZoomableGroup center={[50.0792, 23.8859]} zoom={5}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.code_a2}
                geography={geo}
                fill="#EAEAEC"
                stroke="#59a52c"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates} width={30} height={30}>
            <path
              d="M8.79364 15.3989C6.65867 12.549 5.42808 9.31413 4.03508 6.16578C3.17208 4.2153 2.28793 2.28086 0.372312 1.12439C0.0520949 0.931071 -0.100742 0.658127 0.0720582 0.323653C0.311959 -0.140706 0.755137 0.0113602 1.13252 0.077453C5.5497 0.851091 9.72642 2.28573 13.3126 5.09352C15.9209 7.13573 17.6756 9.8493 18.5054 13.1054C18.9503 14.8511 19.0627 16.6282 18.9946 18.4652C18.9383 19.9823 19.4934 21.5229 19.8298 23.334C20.1775 22.0964 20.4642 21.1608 20.4325 20.1113C20.2685 14.6888 22.8253 10.933 27.4896 8.5764C29.5118 7.55468 31.6864 6.93508 33.9068 6.50223C34.3103 6.42357 34.7492 6.3388 34.9447 6.7971C35.1554 7.2913 34.7193 7.48727 34.3914 7.71333C33.0756 8.6204 32.4897 10.0317 31.9032 11.4462C30.9207 13.8159 29.9272 16.1733 28.3732 18.2456C26.9035 20.2051 25.0341 21.2931 22.5915 21.2003C21.5574 21.1611 21.0811 21.5475 20.9829 22.6181C20.8438 24.1358 20.548 25.639 20.5999 27.1733C20.6172 27.6849 20.6208 28.1722 19.9257 28.1937C19.2201 28.2156 19.0469 27.7372 19.0499 27.1685C19.0617 24.9089 18.7691 22.6895 18.3663 20.4703C18.189 19.4932 17.7476 19.1813 16.8485 19.2608C13.4686 19.5599 10.8745 18.1269 8.79364 15.3989ZM14.3715 7.68474C11.3402 4.32856 7.43617 2.72142 2.83292 1.64684C4.58456 4.20295 5.41922 6.80801 6.57662 9.25733C7.77395 11.7912 9.01339 14.3031 11.1064 16.2591C12.9924 18.0216 15.1561 18.3853 17.7415 17.8586C16.4308 13.3957 13.8431 9.86629 10.8233 6.59111C13.9934 8.8399 16.0427 11.9693 17.7845 15.6075C17.5036 12.482 16.3464 9.99021 14.3715 7.68474ZM25.0227 19.6681C25.5893 19.4419 26.0088 19.0164 26.453 18.6129C29.5385 15.8104 30.1688 11.6333 32.2646 8.16546C26.5858 9.10445 22.1678 13.4394 22.1143 16.6361C25.9336 11.5323 26.2533 11.2026 27.5425 11.1428C24.7976 13.5803 22.6999 16.3745 21.6615 19.9843C22.8158 20.2617 23.8441 20.1315 25.0227 19.6681Z"
              transform="translate(-12, -24)"
              fill="#8dd562"
            />

            {/* <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text> */}
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
}
