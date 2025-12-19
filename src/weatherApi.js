const API_KEY = "21571e236ae1e7500c50aabca16ad13c";

export const fetchWeatherData = async (city, tempUnit = 'metric') => {

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${tempUnit}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return {
      status: 'success',
      data: data,
      error: null
    };
  } catch (error) {
    return {
      status: 'error',
      data: null,
      error: error.message
    };
  }
};
