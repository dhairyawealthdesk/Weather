import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Switch } from "antd";
import "./weather.css";

const Weather = () => {
  const { placename } = useParams();
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState([]);
  const getData = async (name) => {
    console.log(name);
    const api = {
      key: "3513df748212af0708c55c9d793caa02",
      base: "https://api.openweathermap.org/data/2.5/",
    };
    // const [query, setQuery] = useState("");
    // const [weather, setWeather] = useState({});
    //fetch(`${api.base}weather?q=${name}&units=metric&APPID=${api.key}`)

    const res = await axios.get(
      `${api.base}weather?q=${name}&appid=3513df748212af0708c55c9d793caa02`
    );
    setWeatherData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getData(placename);
  }, [placename]);

  const back = () => {
    navigate("/");
  };
  const [toggle, setoggle] = useState(false);
  const toggler = () => {
    toggle ? setoggle(false) : setoggle(true);
  };

  return (
    <div>
      {/* <p>Lon: {weatherData?.coord?.lon}</p>
      <p>Lat: {weatherData?.coord?.lat}</p> */}
      {/* feels_like: 309.14
            humidity: 89
            pressure: 1006
            temp: 302.14
            temp_max: 302.14
          temp_min: 302.14 */}
      {/* <p>feels_like: {weatherData?.main?.feels_like}</p> */}
      <main>
        {typeof weatherData.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weatherData.name}, {weatherData.sys.country}
              </div>
              {/* <div className="date">{dateBuilder(new Date())}</div> */}
            </div>

            <div className="weather-box">
              <div className="temp">
                <div className="switch">
                  <p>You can change the temprature By pressing below button</p>
                  <Switch className="toggle" onClick={toggler} />
                </div>
                {toggle ? (
                  <span>{Math.round(weatherData.main.temp) - 273}°c </span>
                ) : (
                  <span>
                    {((Math.round(weatherData.main.temp) - 273) * 9) / 5 + 32}°f
                  </span>
                )}
                {/* {Math.round(weatherData.main.temp) - 273}°c /
                {((Math.round(weatherData.main.temp) - 273) * 9) / 5 + 32}°f */}
                {/* {Math.round((weatherData.main.temp * 9) / 5 + 32)}°f */}
              </div>
              <div className="weather">
                <p>
                  {" "}
                  <span>Weather Description: </span>
                  {weatherData.weather[0].main}
                </p>
                <p>
                  <span>Wind Speed: </span>
                  {weatherData.wind.speed}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <button onClick={back} style={{ cursor: "pointer" }}>
          {" "}
          {"<"} Go back{" "}
        </button>
      </main>
    </div>
  );
};

export default Weather;
