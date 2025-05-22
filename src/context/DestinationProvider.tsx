"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ICountryTypes } from '@/types/countryTypes';

interface CountryContextType {
    countriesData: ICountryTypes | null;
    setCountriesData: React.Dispatch<React.SetStateAction<ICountryTypes | null>>;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [countriesData, setCountriesData] = useState<ICountryTypes | null>(null);

    return (
        <CountryContext.Provider value={{
            countriesData, setCountriesData
        }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountryContext = () => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error('useCountryContext must be used within a CountryProvider');
    }
    return context;
};