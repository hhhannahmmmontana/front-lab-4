import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const UnitsContext = createContext(undefined);

export const UnitsProvider = ({ children }) => {
    const [unitSystem, setUnitSystem] = useLocalStorage('weather_units', 'metric');

    const toggleUnits = () => {
        setUnitSystem((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
    };

    const temperatureSymbol = unitSystem === 'metric' ? '°C' : '°F';
    const speedSymbol = unitSystem === 'metric' ? 'km/h' : 'mph';

    return (
        <UnitsContext.Provider value={{ unitSystem, toggleUnits, temperatureSymbol, speedSymbol }}>
            {children}
        </UnitsContext.Provider>
    );
};