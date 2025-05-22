"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface Country {
    country_name: string;
    country_code: string;
}

interface DataContextType {
    countries:  Country | null;
    setCountries: React.Dispatch<React.SetStateAction<Country | null>>;

    universities: null;
    setUniversities: React.Dispatch<React.SetStateAction<null>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [countries, setCountries] = useState<Country | null>(null);
    const [universities, setUniversities] = useState<null>(null);

    return (
        <DataContext.Provider value={{
            countries, setCountries, universities, setUniversities
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useCountryContext must be used within a CountryProvider');
    }
    return context;
};