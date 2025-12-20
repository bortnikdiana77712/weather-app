import { WeatherDetail } from "./WeatherDetail";
import { MainInfo } from "./MainInfo";

export const WeatherCard = ({ weatherData, unit }) => {
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>

      <MainInfo weatherData={weatherData} unit={unit} />

      <div className="details">
        <WeatherDetail
          label="Feels like:"
          value={formatTemp(weatherData.main.feels_like, unit)}
        />

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
