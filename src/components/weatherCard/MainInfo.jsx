import { formatTemp, getWeatherIcon } from "../../utils";

export const MainInfo = ({ weatherData, unit }) => {
  return (
    <div className="main-info">
      <div className="current-temp">
        {formatTemp(weatherData.main.temp, unit)}
      </div>

      <div className="info">
        <img
          src={getWeatherIcon(weatherData.weather[0].icon)}
          alt={weatherData.weather[0].description}
          className="weather-icon"
        />

        <div className="description">{weatherData.weather[0].description}</div>
      </div>
    </div>
  );
};
