import { UnitSelect } from "./";

export const Header = ({ unit, onUnitChange }) => {
  return (
    <header>
      <h1>Weather App</h1>
      <UnitSelect unit={unit} onUnitChange={onUnitChange} />
    </header>
  );
};