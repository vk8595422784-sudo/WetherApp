import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Error from "./components/Error";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    // Prevent empty API calls
    if (!city.trim()) return;

    try {
      setLoader(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77213482e5f8495a79a2255a16dbe563&units=metric`,
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weather");
      }

      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };

  // Runs whenever city changes
  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div
      className="
        container
        d-flex
        justify-content-center
        align-items-center
        min-vh-100
      "
    >
      <div
        className="card shadow-lg p-4 text-center"
        style={{ width: "400px" }}
      >
        <h1 className="mb-4">Weather App</h1>

        {/* Search Input */}
        <SearchBar city={city} setCity={setCity} />

        {/* Loading */}
        {loader && <Loader />}

        {/* Error */}
        {error && <Error error={error} />}

        {/* Weather Data */}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default App;
