export const WeatherDetail = ({ label, value }) => {
  return (
    <div className="detail">
      <p>{label}</p>
      <strong>{value}</strong>
    </div>
  );
};