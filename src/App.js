import React, { useState } from "react";
import Popup from "reactjs-popup";
import Testtodo from "./components/addcity";

import "./index.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Weather from "./pages/Weather";
function App() {
  const [inputData, setInputData] = useState("");

  const [toogleSubmit, setToggleSubmit] = useState(true);

  const [isEditItem, setIsEditItem] = useState(null);

  // const [search, setSearch] = useState("");

  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);
    if (list) {
      console.log(JSON.parse(localStorage.getItem("lists")));
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
  const getData = (name) => {
    console.log(name);
    const api = {
      key: "f397f8dcb80ed005d831526945f55dba",
      base: "https://api.openweathermap.org/data/2.5/",
    };
    // const [query, setQuery] = useState("");
    // const [weather, setWeather] = useState({});
    //fetch(`${api.base}weather?q=${name}&units=metric&APPID=${api.key}`)
    fetch(`${api.base}weather?q=${name}&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        //setWeather(result);
        // setQuery("");
        console.log(result);
      });
  };

  const deleteItem = (id) => {
    // console.log('deleted');
    const updatedItems = items.filter((elem) => {
      return elem.id !== id;
    });
    setItems(updatedItems);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem.name);

    setToggleSubmit(false);

    setInputData(newEditItem.name);
    console.log("my new input name is" + inputData);
    setIsEditItem(id);
  };

  const [items, setItems] = useState(getLocalItems());

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            index
            path="/"
            element={
              <div className="heading">
                <h1>List of Cities</h1>
                {/* <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="search"
                ></input> */}
                <Popup
                  trigger={<button className="popupbtn"> + Add New</button>}
                  position="bottom center"
                >
                  <div>
                    <Testtodo />
                  </div>
                </Popup>
              </div>
            }
          ></Route>
          <Route path="/weather/:placename" element={<Weather />} />
        </Routes>
        {/* start of showItems */}
        <div className="showItems">
          {items.map((elem) => {
            return (
              <Link
                to={"/weather/" + elem.name}
                className="eachItem"
                key={elem.id}
              >
                <h3 onClick={() => getData(elem.name)}> {elem.name} </h3>

                <div className="todo-btn">
                  <i
                    className="far fa-edit add-btn"
                    title="Edit item"
                    onClick={() => editItem(elem.id)}
                  ></i>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete item"
                    onClick={() => deleteItem(elem.id)}
                  ></i>
                </div>
              </Link>
            );
          })}
        </div>

        {/* End of showItems */}
      </div>
    </BrowserRouter>
  );
}

export default App;
