import axios from "axios";
import React, { useState } from "react";

function WeatherApp() {
  const API_KEY = "c50cf12661f92eca09a98ee804ddcad8";
  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  const [data, setData] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  const fetch_data = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${API_KEY}`
      )
      .then((response) => {
        setData(response.data);
        setIsFetched(true);
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
    console.log(form.city, form.country);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-md w-fit bg-white rounded-md border-doubled border-black border-2 p-4 m-1 sm:p-6">
        <WeatherTitle />
        <WeatherForm
          data={form}
          handleSubmit={fetch_data}
          handleChange={handleChange}
        />
        {isFetched ? (
          <div>
            <hr className="my-3" />
            <WeatherDisplay data={data} />
            <hr className="my-3" />
            <WeatherData data={data} />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
function WeatherTitle() {
  return (
    <div className="font-bold text-lg flex justify-center mb-3 sm:mb-4">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
        Weather Forecast
      </h2>
      <hr className="my-2 border-dashed border-black" />
    </div>
  );
}

function WeatherDisplay(props) {
  const { data } = props;
  return (
    <div>
      {data && (
        <div className="flex flex-col items-center text-center sm:text-start sm:flex-row sm:justify-around">
          <div>
            <h1 className="font-semibold text-2xl">
              {data.name}, {data.sys.country}
            </h1>
            <h4 className="text-slate-400">
              as of {new Date().toLocaleDateString()}
            </h4>
          </div>
          <div className="bg-slate-200 rounded-lg m-2 p-2 mx-5">
            <h1 className="text-6xl text-center font-semibold">
              {Math.round(data.main.temp - 273)}
              <sup>o</sup>C
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

function WeatherForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };
  const handleChange = (e) => {
    props.handleChange(e);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center max-w-400 lg:flex-row"
    >
      <label className="text-md m-1 font-bold">City</label>
      <input
        type={"text"}
        name="city"
        value={props.data.city}
        onChange={handleChange}
        className="h-8 w-22 rounded-md m-1 border-double border-black border-2"
      />
      <label className="text-md m-1 font-bold">Country</label>
      <input
        type={"text"}
        name="country"
        value={props.data.country}
        onChange={handleChange}
        className="h-8 w-22 rounded-md m-3 border-double border-black border-2"
      />
      <input
        type={"submit"}
        className="cursor-pointer font-semibold rounded-md m-1 p-1 border-solid border-black border-2 hover:bg-black hover:text-white"
      />
    </form>
  );
}
function WeatherData(props) {
  const { data } = props;
  return (
    <div>
      {data && (
        <div className="flex flex-col justify-around sm:flex-row sm:space-x-5">
          <ul className="list-style-none">
            <li className="font-semibold">
              Temperature:{" "}
              <span className="text-slate-300">
                {Math.round(data.main.temp - 273)}
                <sup>o</sup>C
              </span>
            </li>
            <hr className="my-2 border-dashed border-black" />
            <li className="font-semibold">
              Humidity:{" "}
              <span className="text-slate-300">{data.main.humidity}</span>
            </li>
            <hr className="my-2 border-dashed border-black" />
            <li className="font-semibold">
              Pressure:{" "}
              <span className="text-slate-300">{data.main.pressure}</span>
            </li>
            <hr className="my-2 border-dashed border-black" />
            <li className="font-semibold">
              Visibility:{" "}
              <span className="text-slate-300">
                {data.visibility / 1000} km
              </span>
            </li>
            <hr className="my-2 border-dashed border-black" />
          </ul>
          <ul className="list-style-none">
            <li className="font-semibold">
              Wind:{" "}
              <span className="text-slate-300">
                {Math.floor(data.wind.speed * 18) / 5} km/hr
              </span>
            </li>
            <hr className="my-2 border-dashed border-black" />
            <li className="font-semibold">
              Wind direction:{" "}
              <span className="text-slate-300">
                {data.wind.deg}
                <sup>o</sup>deg
              </span>
            </li>
            <hr className="my-2 border-dashed border-black" />
            <li className="font-semibold">
              Sunrise:{" "}
              <span className="text-slate-300">
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
              </span>
            </li>
            <hr className="my-2 border-dashed border-black" />
            <li className="font-semibold">
              Sunset:{" "}
              <span className="text-slate-300">
                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
              </span>
            </li>
            <hr className="my-2 border-dashed border-black" />
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
