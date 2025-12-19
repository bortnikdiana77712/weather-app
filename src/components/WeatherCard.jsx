import { WeatherDetail } from "./";
import { formatTemp, getWeatherIcon } from "../utils";

export const WeatherCard = ({ weatherData, unit }) => {
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>

      <div className="main-info">
        <div className="current-temp">{formatTemp(weatherData.main.temp, unit)}</div>

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
        <WeatherDetail
          label="Feels like:"
          value={formatTemp(weatherData.main.feels_like, unit)}
        ></WeatherDetail>

        <WeatherDetail
          label="Max temp:"
          value={formatTemp(weatherData.main.temp_max, unit)}
        />

        <WeatherDetail
          label="Humidity:"
          value={`${weatherData.main.humidity}%`}
        />

        <WeatherDetail
          label="Wind speed:"
          value={`${weatherData.wind.speed} m/s`}
        />
      </div>
    </div>
  );
};
