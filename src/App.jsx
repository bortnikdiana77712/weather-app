import { useState } from "react";
import {
  Alert,
  DateDisplay,
  Footer,
  LoadingSpinner,
  SearchBar,
  WeatherCard,
  WeatherAppContainer,
} from "./components";
import { fetchWeatherData } from "./weatherApi";

import "./index.css";
import { Header } from "./components/Header";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState("");

  const handleSearch = async (city) => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    const result = await fetchWeatherData(city, unit);

    if (result.status === "success") {
      setWeatherData(result.data);
      setCurrentCity(city);
    } else {
      setError(result.error);
      setWeatherData(null);
    }

    setLoading(false);
  };

  const handleUnitChange = async (newUnit) => {
    setUnit(newUnit);

    if (weatherData?.name) {
      const result = await fetchWeatherData(weatherData.name, newUnit);

      if (result.status === "success") {
        setWeatherData(result.data);
      } else {
        setError(result.error);
      }
    }
  };

  return (
    <WeatherAppContainer>
      <Header unit={unit} onUnitChange={handleUnitChange} />

      <DateDisplay />

      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && <LoadingSpinner />}
      {error && <Alert message={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} unit={unit} />}

      <Footer />
    </WeatherAppContainer>
  );
}

export default App;
