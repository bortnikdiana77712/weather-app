import { useState } from "react";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { UnitSelect } from "./components/UnitSelect";
import { WeatherCard } from "./components/WeatherCard";
import { DateDisplay } from "./components/DateDisplay";
import { Alert } from "./components/Alert";

import "./index.css";

const API_KEY = "21571e236ae1e7500c50aabca16ad13c";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState("");

  const fetchWeatherData = async (city, tempUnit = unit) => {
    if (!city || typeof city !== "string") {
      setError("Please enter a valid city name");
      return null;
    }

    setLoading(true);
    setError("");

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${tempUnit}`;
      console.log("Fetching URL:", url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (location) => {
    const data = await fetchWeatherData(location);
    if (data) {
      setWeatherData(data);
      setCurrentCity(location);
    } else {
      setWeatherData(null);
    }
  };

  const handleUnitChange = async (newUnit) => {
    setUnit(newUnit);

    if (currentCity) {
      fetchWeatherData(currentCity, newUnit).then((data) => {
        if (data) {
          setWeatherData(data);
        }
      });
    } else if (weatherData?.name) {
      fetchWeatherData(weatherData.name, newUnit).then((data) => {
        if (data) {
          setWeatherData(data);
        }
      });
    }
  };

  return (
    <div className="main">
      <header>
        <h1>Weather App</h1>
        <UnitSelect unit={unit} onUnitChange={handleUnitChange} />
      </header>

      <DateDisplay />

      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && <p>Загрузка</p>}
      {error && <Alert message={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} unit={unit} />}

      <Footer />
    </div>
  );
}

export default App;
