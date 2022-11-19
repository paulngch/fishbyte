import React from "react";
import { useEffect, useState } from "react";

export default function ApiTest() {
  const [wForecast2, setWForecast2] = useState("");

  const queryUrl =
    "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=2022-11-19T23%3A09%3A00";

  //   console.log(queryUrl);

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await fetch(queryUrl);
      const data = await response.json();
      setWForecast2(data.items[0].forecasts[0].area);
    };
    fetchForecast();
  }, []);

const tempArea = wForecast2

console.log(tempArea)

  return <div>test {tempArea}</div>;
}
