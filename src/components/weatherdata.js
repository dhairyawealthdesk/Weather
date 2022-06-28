// import React, { useState } from "react";
// import { Switch } from "antd";

// const api = {
//   key: "bade89d83de825161d4b44dcda2c1606",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// function WeatherData() {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});

//   fetch(`${api.base}weather?q=London&APPID=${api.key}`)
//     .then((res) => res.json())
//     .then((result) => {
//       setWeather(result);
//       setQuery("");
//       console.log(result);
//     });

//   const [toggle, setoggle] = useState(false);
//   const toggler = () => {
//     toggle ? setoggle(false) : setoggle(true);
//   };

//   const dateBuilder = (d) => {
//     let months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     let days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`;
//   };

//   return (
//     <div
//       className={
//         typeof weather.main != "undefined"
//           ? weather.main.temp > 16
//             ? "app warm"
//             : "app"
//           : "app"
//       }
//     >
//       <main>
//         {typeof weather.main != "undefined" ? (
//           <div>
//             <div className="location-box">
//               <div className="location">
//                 {weather.name}, {weather.sys.country}
//               </div>
//               <div className="date">{dateBuilder(new Date())}</div>
//             </div>

//             <div className="weather-box">
//               <div className="temp">
//                 <div className="switch">
//                   <p>You can change the temprature By pressing below button</p>
//                   <Switch className="toggle" onClick={toggler} />
//                 </div>
//                 {toggle ? (
//                   <span>{Math.round(weather.main.temp)}°c </span>
//                 ) : (
//                   <span>{Math.round((weather.main.temp * 9) / 5 + 32)}°f</span>
//                 )}
//                 {/* {Math.round(weather.main.temp)}°c /{" "}
//                 {Math.round((weather.main.temp * 9) / 5 + 32)}°f */}
//               </div>
//               <div className="weather">{weather.weather[0].main}</div>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </main>
//     </div>
//   );
// }

// export default WeatherData;
