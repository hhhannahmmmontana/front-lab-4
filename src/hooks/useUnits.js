import { useContext } from 'react';
import { UnitsContext } from '../services/UnitsProvider';

export const useUnits = () => {
    const context = useContext(UnitsContext);

    if (!context) {
        throw new Error('useUnits must be used within a UnitsProvider');
    }

    return context;
};