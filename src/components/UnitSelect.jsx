export const UnitSelect = ({ unit, onUnitChange }) => {
  return (
    <select
      value={unit}
      onChange={(e) => onUnitChange(e.target.value)}
      className="unit-select"
    >
      <option value="metric">Celsius (°C)</option>
      <option value="imperial">Fahrenheit (°F)</option>
    </select>
  );
};
