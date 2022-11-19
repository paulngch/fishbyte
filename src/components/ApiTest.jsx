import React from "react";
import { useEffect, useState } from "react";

export default function ApiTest() {
  const [wForecast2, setWForecast2] = useState({});

  const queryUrl =
    "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=2022-11-19T23%3A09%3A00";

  //   console.log(queryUrl);


  useEffect(() => {
    fetch(queryUrl)
      .then((response) => response.json())
      .then((data) => setWForecast2(data));
  }, []);


    const temp = wForecast2;
    // console.log(temp)
    console.log(temp.api_info.status)

  return (
    <div>
        test
    </div>
  );
}
