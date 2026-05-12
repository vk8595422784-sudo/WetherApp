const WeatherCard = ({ weather }) => {
  if (!weather || !weather.main) {
    return null;
  }
  const temp = weather.main.temp.toFixed(1);
  return (
    <div>
      <h2 className="mb-3">{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <h1 className="mb-3">{temp}°C</h1>

      <div className="mt-3">
        <p className="mb-2">Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
