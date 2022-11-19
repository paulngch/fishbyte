import React from "react";
import { useEffect, useState } from "react";

export default function ApiTest() {
  const [wForecast2, setWForecast2] = useState("");
  const [wForecast24, setWForecast24] = useState("");
  const [wForecast4, setWForecast4] = useState("");
  const [solunar, setSolunar] = useState("");

  const queryUrl2Hour =
    "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=2022-11-19T23%3A09%3A00";

  //   console.log(queryUrl);

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await fetch(queryUrl2Hour);
      const data = await response.json();
      setWForecast2(data.items[0].forecasts[0].area);
    };
    fetchForecast();
  }, []);

  const queryUrl24Hour =
    "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?date_time=2022-11-18T23%3A09%3A00";

  useEffect(() => {
    const fetchForecast24 = async () => {
      const response = await fetch(queryUrl24Hour);
      const data = await response.json();
      setWForecast24(data.items[0].general.forecast);
    };
    fetchForecast24();
  }, []);

  const queryUrl4 =
    "https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date_time=2022-11-19T20%3A58%3A00";

  useEffect(() => {
    const fetchForecast4 = async () => {
      const response = await fetch(queryUrl4);
      const data = await response.json();
      setWForecast4(data.items[0].forecasts[0].date);
    };
    fetchForecast4();
  }, []);

  //lat/long/YYYYMMDD/GMT
  const solunarUrl = "https://api.solunar.org/solunar/1.35,103.81,20221120,8";

  useEffect(() => {
    const fetchSolunar = async () => {
      const response = await fetch(solunarUrl);
      const data = await response.json();
      setSolunar(data.sunRise);
    };
    fetchSolunar();
  }, []);

  const tempArea = wForecast2;
  const tempArea24 = wForecast24;
  const tempArea4 = wForecast4;
  console.log(tempArea);

  return (
    <div>
      test 2hour={tempArea} 24hour={tempArea24} 4days={tempArea4} SOLUNAR ={" "}
      {solunar}
    </div>
  );
}
