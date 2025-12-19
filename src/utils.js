export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const formatTemp = (temp, unit) => {
  return `${Math.round(temp)}°${unit === "metric" ? "C" : "F"}`;
};
