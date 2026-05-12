import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Error from "./components/Error";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    try {
      setLoader(true);
      setError("");
      const response = await fetch(
        "API: https://api.openweathermap.org/data/2.5/weather?q={city}&appid;=YOUR_API_KEY",
      );
      if (!response.ok) {
        throw new Error("Fail to fetch weather");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.messege);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div
      className="
    container d-flex justify-content-center align-item-center 
    min-vh-100
    "
    >
      <div
        className="card shadow-lg p-4 text-center"
        style={{ width: "400px" }}
      >
        <h1 className="mb-4">Weather App</h1>
        <SearchBar city={city} setCity={setCity} />
        <WeatherCard weather={weather} />
        <loader loader={loader} />
        <Error error={error} />
        <Button fetchWeather={fetchWeather} />
      </div>
    </div>
  );
};

export default App;
