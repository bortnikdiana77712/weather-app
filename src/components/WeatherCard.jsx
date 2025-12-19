export const WeatherCard = ({ weatherData, unit }) => {
  if (!weatherData) return null;

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const formatTemp = (temp) => {
    return `${Math.round(temp)}°${unit === "metric" ? "C" : "F"}`;
  };

  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>

      <div className="main-info">
        <div className="current-temp">{formatTemp(weatherData.main.temp)}</div>

        <div className="info">
          <img
            src={getWeatherIcon(weatherData.weather[0].icon)}
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />

          <div className="description">
            {weatherData.weather[0].description}
          </div>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <p>Feels like: </p>
          <strong>{formatTemp(weatherData.main.feels_like)}</strong>
        </div>

        <div className="detail">
          <p>Max temp: </p>
          <strong>{formatTemp(weatherData.main.temp_max)}</strong>
        </div>

        <div className="detail">
          <p>Humidity: </p>
          <strong>{weatherData.main.humidity} %</strong>
        </div>

        <div className="detail">
          <p>Wind speed: </p>
          <strong>{weatherData.wind.speed} m/s</strong>
        </div>
      </div>
    </div>
  );
};
