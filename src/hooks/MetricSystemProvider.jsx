import { createContext, useState, useContext } from 'react';

const NumeralSystemContext = createContext();

export const NumeralSystemProvider = ({ children }) => {
    const [isMetric, setIsMetric] = useState(true);

    const toggleMetricSystem = () => {
        setIsMetric(prev => !prev);
    };

    return (
        <NumeralSystemContext.Provider value={{ isMetric, toggleMetricSystem }}>
            {children}
        </NumeralSystemContext.Provider>
    );
};

export const useNumeralSystem = () => {
    const context = useContext(NumeralSystemContext);
    if (!context) {
        throw new Error("useNumeralSystem must be used within a NumeralSystemProvider");
    }
    return context;
};